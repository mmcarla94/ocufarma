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
  
  // Actions
  addTherapy: (therapy: Omit<Therapy, 'id' | 'isActive' | 'notificationIds'>) => Promise<void>;
  updateTherapy: (id: string, updates: Partial<Omit<Therapy, 'id'>>) => Promise<void>;
  deleteTherapy: (id: string) => Promise<void>;
  toggleTherapyActive: (id: string, isActive: boolean) => Promise<void>;
  
  // Helpers
  getActiveTherapies: () => Therapy[];
  getTherapyById: (id: string) => Therapy | undefined;
  checkInteractions: (medicationId: string) => string[];
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
  
  // Create a Date object for today at the specified time
  const scheduledTime = new Date();
  scheduledTime.setHours(hours, minutes, 0, 0);
  
  // If the time has already passed today, schedule for tomorrow
  if (scheduledTime <= new Date()) {
    scheduledTime.setDate(scheduledTime.getDate() + 1);
  }
  
  // Get medication name
  const { medications } = useMedicationStore.getState();
  const medication = medications.find(m => m.id === therapy.medicationId);
  const medicationName = medication ? medication.name : therapy.medicationName;
  
  // Get eye text
  const eyeText = getEyeText(therapy.eye);
  
  // Schedule the notification
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
    },
  });
  
  return notificationId;
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
    await Notifications.cancelScheduledNotificationAsync(id);
  }
}

export const useTherapyStore = create<TherapyState>()(
  persist(
    (set, get) => ({
      therapies: [],
      isLoading: false,
      error: null,
      
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
            }
          }
          
          set((state) => ({
            therapies: [...state.therapies, newTherapy],
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
      }
    }),
    {
      name: 'therapy-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);