import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Therapy, EyeSelection } from '@/types/medication';
import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useMedicationStore } from './medication-store';

interface TherapyState {
  therapies: Therapy[];
  isLoading: boolean;
  error: string | null;
  stats: {
    addedCount: number;
  };
  
  // Actions
  addTherapy: (therapy: Omit<Therapy, 'id' | 'isActive' | 'notificationIds'>) => Promise<void>;
  updateTherapy: (id: string, updates: Partial<Omit<Therapy, 'id'>>) => Promise<void>;
  deleteTherapy: (id: string) => Promise<void>;
  toggleTherapyActive: (id: string, isActive: boolean) => Promise<void>;
  loadTherapies: () => Promise<void>; // Aggiunta la funzione loadTherapies
  
  // Helpers
  getActiveTherapies: () => Therapy[];
  getTherapyById: (id: string) => Therapy | undefined;
  checkInteractions: (medicationId: string) => string[];
  getUpcomingDoses: (hours: number) => { therapy: Therapy; time: string }[];
}

// Configure notifications
if (Platform.OS !== 'web') {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
}

// Request notification permissions
export async function requestNotificationPermissions() {
  if (Platform.OS === 'web') {
    console.log('Notifications not supported on web');
    return false;
  }
  
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  
  return finalStatus === 'granted';
}

// Schedule a notification
async function scheduleNotification(therapy: Therapy, time: string): Promise<string> {
  if (Platform.OS === 'web') {
    console.log('Notifications not supported on web');
    return '';
  }
  
  // Parse time (HH:MM)
  const [hours, minutes] = time.split(':').map(Number);
  
  // Get medication name
  const { medications } = useMedicationStore.getState();
  const medication = medications.find(m => m.id === therapy.medicationId);
  const medicationName = medication ? medication.name : therapy.medicationName;
  
  // Get eye text
  const eyeText = getEyeText(therapy.eye);
  
  // Schedule the notification with precise time trigger
  try {
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Promemoria Farmaco',
        body: `È ora di prendere ${medicationName} per ${eyeText}`,
        data: { therapyId: therapy.id },
        sound: true,
      },
      trigger: {
        hour: hours,
        minute: minutes,
        repeats: true,
        // Ensure the notification is delivered precisely at the specified time
        // by using a daily repeating schedule
      },
    });
    
    console.log(`Scheduled notification for ${hours}:${minutes}, ID: ${notificationId}`);
    return notificationId;
  } catch (error) {
    console.error('Error scheduling notification:', error);
    return '';
  }
}

// Get text representation of eye selection
function getEyeText(eye: EyeSelection): string {
  switch (eye) {
    case 'left':
      return "l'occhio sinistro";
    case 'right':
      return "l'occhio destro";
    case 'both':
      return "entrambi gli occhi";
    default:
      return "gli occhi";
  }
}

// Cancel notifications for a therapy
async function cancelTherapyNotifications(notificationIds: string[]) {
  if (Platform.OS === 'web') return;
  
  for (const id of notificationIds) {
    try {
      await Notifications.cancelScheduledNotificationAsync(id);
      console.log(`Cancelled notification with ID: ${id}`);
    } catch (error) {
      console.error(`Error cancelling notification ${id}:`, error);
    }
  }
}

// Verify scheduled notifications (for debugging)
export async function verifyScheduledNotifications() {
  if (Platform.OS === 'web') {
    console.log('Notifications not supported on web');
    return [];
  }
  
  try {
    const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
    console.log('Currently scheduled notifications:', scheduledNotifications);
    return scheduledNotifications;
  } catch (error) {
    console.error('Error verifying scheduled notifications:', error);
    return [];
  }
}

export const useTherapyStore = create<TherapyState>()(
  persist(
    (set, get) => ({
      therapies: [],
      isLoading: false,
      error: null,
      stats: {
        addedCount: 0
      },
      
      // Implementazione della funzione loadTherapies
      loadTherapies: async () => {
        try {
          console.log('Loading therapies from storage...');
          // La funzione persist di zustand carica automaticamente i dati da AsyncStorage
          // Quindi qui non dobbiamo fare nulla di specifico, ma possiamo usare
          // questa funzione per inizializzare le notifiche per le terapie attive
          
          if (Platform.OS !== 'web') {
            const activeTherapies = get().getActiveTherapies();
            console.log(`Found ${activeTherapies.length} active therapies`);
            
            // Richiedi i permessi per le notifiche
            const hasPermission = await requestNotificationPermissions();
            
            if (hasPermission) {
              // Cancella tutte le notifiche esistenti per ricominciare da zero
              await Notifications.cancelAllScheduledNotificationsAsync();
              
              // Rischedula le notifiche per tutte le terapie attive
              for (const therapy of activeTherapies) {
                if (therapy.enableNotifications && therapy.times && therapy.times.length > 0) {
                  const notificationIds: string[] = [];
                  
                  for (const time of therapy.times) {
                    const notificationId = await scheduleNotification(therapy, time);
                    if (notificationId) {
                      notificationIds.push(notificationId);
                    }
                  }
                  
                  // Aggiorna gli ID delle notifiche per questa terapia
                  if (notificationIds.length > 0) {
                    await get().updateTherapy(therapy.id, { notificationIds });
                  }
                }
              }
              
              // Verifica le notifiche programmate
              await verifyScheduledNotifications();
            }
          }
          
          console.log('Therapies loaded successfully');
        } catch (error) {
          console.error('Error loading therapies:', error);
          set({ error: error instanceof Error ? error.message : 'Unknown error loading therapies' });
        }
      },
      
      addTherapy: async (therapyData) => {
        try {
          const id = Date.now().toString();
          const newTherapy: Therapy = {
            id,
            ...therapyData,
            isActive: true,
            notificationIds: [],
          };
          
          // Schedule notifications if therapy is active and notifications are enabled
          const notificationIds: string[] = [];
          if (Platform.OS !== 'web' && newTherapy.enableNotifications) {
            // Request permissions first
            const hasPermission = await requestNotificationPermissions();
            
            if (hasPermission) {
              for (const time of newTherapy.times || []) {
                const notificationId = await scheduleNotification(newTherapy, time);
                if (notificationId) {
                  notificationIds.push(notificationId);
                }
              }
              newTherapy.notificationIds = notificationIds;
              
              // Verify scheduled notifications (for debugging)
              await verifyScheduledNotifications();
            }
          }
          
          set((state) => ({
            therapies: [...state.therapies, newTherapy],
            stats: {
              ...state.stats,
              addedCount: state.stats.addedCount + 1
            }
          }));
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'Unknown error' });
        }
      },
      
      updateTherapy: async (id, updates) => {
        try {
          const therapy = get().therapies.find(t => t.id === id);
          if (!therapy) return;
          
          // Cancel existing notifications
          if (Platform.OS !== 'web' && therapy.notificationIds?.length) {
            await cancelTherapyNotifications(therapy.notificationIds);
          }
          
          const updatedTherapy = { ...therapy, ...updates };
          
          // Reschedule notifications if therapy is active and notifications are enabled
          const notificationIds: string[] = [];
          if (updatedTherapy.isActive && updatedTherapy.enableNotifications && Platform.OS !== 'web') {
            const hasPermission = await requestNotificationPermissions();
            
            if (hasPermission) {
              for (const time of updatedTherapy.times || []) {
                const notificationId = await scheduleNotification(updatedTherapy, time);
                if (notificationId) {
                  notificationIds.push(notificationId);
                }
              }
              updatedTherapy.notificationIds = notificationIds;
              
              // Verify scheduled notifications (for debugging)
              await verifyScheduledNotifications();
            }
          }
          
          set((state) => ({
            therapies: state.therapies.map((t) => 
              t.id === id ? updatedTherapy : t
            ),
          }));
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'Unknown error' });
        }
      },
      
      deleteTherapy: async (id) => {
        try {
          const therapy = get().therapies.find(t => t.id === id);
          if (!therapy) return;
          
          // Cancel notifications
          if (Platform.OS !== 'web' && therapy.notificationIds?.length) {
            await cancelTherapyNotifications(therapy.notificationIds);
          }
          
          set((state) => ({
            therapies: state.therapies.filter((t) => t.id !== id),
          }));
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'Unknown error' });
        }
      },
      
      toggleTherapyActive: async (id, isActive) => {
        try {
          const therapy = get().therapies.find(t => t.id === id);
          if (!therapy) return;
          
          if (Platform.OS !== 'web') {
            // Cancel existing notifications for this therapy
            if (therapy.notificationIds?.length) {
              await cancelTherapyNotifications(therapy.notificationIds);
            }
            
            // Schedule new notifications if activating and notifications are enabled
            let notificationIds: string[] = [];
            if (isActive && therapy.enableNotifications) {
              const hasPermission = await requestNotificationPermissions();
              
              if (hasPermission) {
                for (const time of therapy.times || []) {
                  const notificationId = await scheduleNotification(therapy, time);
                  if (notificationId) {
                    notificationIds.push(notificationId);
                  }
                }
                
                // Verify scheduled notifications (for debugging)
                await verifyScheduledNotifications();
              }
            }
            
            set((state) => ({
              therapies: state.therapies.map((t) => 
                t.id === id ? { ...t, isActive, notificationIds } : t
              ),
            }));
          } else {
            set((state) => ({
              therapies: state.therapies.map((t) => 
                t.id === id ? { ...t, isActive } : t
              ),
            }));
          }
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'Unknown error' });
        }
      },
      
      getActiveTherapies: () => {
        return get().therapies.filter(therapy => therapy.isActive);
      },
      
      getTherapyById: (id) => {
        return get().therapies.find(therapy => therapy.id === id);
      },
      
      checkInteractions: (medicationId) => {
        const { medications } = useMedicationStore.getState();
        const activeTherapies = get().getActiveTherapies();
        
        // Get the medication we want to check
        const medication = medications.find(m => m.id === medicationId);
        if (!medication || !medication.interactions) return [];
        
        // Check for interactions with active therapies
        const interactions: string[] = [];
        
        for (const therapy of activeTherapies) {
          // Skip if it's the same medication
          if (therapy.medicationId === medicationId) continue;
          
          const therapyMedication = medications.find(m => m.id === therapy.medicationId);
          if (!therapyMedication) continue;
          
          // Check if there's an interaction between these medications
          const interaction = medication.interactions?.find(i => 
            i.medicationId === therapyMedication.id || 
            i.activeIngredient === therapyMedication.activeIngredient
          );
          
          if (interaction) {
            interactions.push(`${therapyMedication.name}: ${interaction.effect}`);
          }
        }
        
        return interactions;
      },
      
      getUpcomingDoses: (hours) => {
        const activeTherapies = get().getActiveTherapies();
        const upcomingDoses: { therapy: Therapy; time: string }[] = [];
        
        // Get current date and time
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        
        // Calculate the end time (current time + specified hours)
        const endTime = new Date(now);
        endTime.setHours(endTime.getHours() + hours);
        
        // Loop through active therapies
        for (const therapy of activeTherapies) {
          // Skip if therapy doesn't have times
          if (!therapy.times || therapy.times.length === 0) continue;
          
          // Check each time for this therapy
          for (const time of therapy.times) {
            const [timeHour, timeMinute] = time.split(':').map(Number);
            
            // Create a date object for this time
            const doseTime = new Date(now);
            doseTime.setHours(timeHour, timeMinute, 0, 0);
            
            // If the dose time is in the past for today, set it to tomorrow
            if (doseTime < now) {
              doseTime.setDate(doseTime.getDate() + 1);
            }
            
            // Check if the dose time is within the specified hours
            if (doseTime <= endTime) {
              upcomingDoses.push({
                therapy,
                time
              });
            }
          }
        }
        
        // Sort by time
        upcomingDoses.sort((a, b) => {
          const [aHour, aMinute] = a.time.split(':').map(Number);
          const [bHour, bMinute] = b.time.split(':').map(Number);
          
          if (aHour !== bHour) {
            return aHour - bHour;
          }
          
          return aMinute - bMinute;
        });
        
        return upcomingDoses;
      }
    }),
    {
      name: 'therapy-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
