import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Switch, Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Bell, BellOff, ArrowLeft, Settings, Clock, AlertCircle } from 'lucide-react-native';
import { useTherapyStore, requestNotificationPermissions, verifyScheduledNotifications } from '@/store/therapy-store';
import { useThemeColors } from '@/hooks/useThemeColors';
import { Platform } from 'react-native';

export default function NotificationsScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  const { therapies, toggleTherapyActive, updateTherapy, getUpcomingDoses } = useTherapyStore();
  
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [remindersEnabled, setRemindersEnabled] = useState(true);
  const [upcomingDoses, setUpcomingDoses] = useState<{ therapy: any; time: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Check if notifications are enabled for any therapy
    const hasEnabledNotifications = therapies.some(therapy => therapy.enableNotifications);
    setNotificationsEnabled(hasEnabledNotifications);
    
    // Check if reminders are enabled for any therapy
    const hasEnabledReminders = therapies.some(therapy => therapy.enableReminders);
    setRemindersEnabled(hasEnabledReminders);
    
    // Get upcoming doses
    const upcoming = getUpcomingDoses(24); // Get doses for next 24 hours
    setUpcomingDoses(upcoming);
  }, [therapies]);
  
  const handleToggleAllNotifications = async (value: boolean) => {
    setIsLoading(true);
    
    try {
      if (value && Platform.OS !== 'web') {
        // Request permissions if enabling notifications
        const hasPermission = await requestNotificationPermissions();
        
        if (!hasPermission) {
          Alert.alert(
            'Permessi Notifiche',
            'Per ricevere notifiche, devi concedere i permessi nelle impostazioni del dispositivo.',
            [
              { text: 'Annulla', style: 'cancel' },
              { text: 'Apri Impostazioni', onPress: () => {
                // Open settings (implementation depends on platform)
                // For a real app, you would use Linking to open settings
                Alert.alert('Info', 'Questa funzionalità aprirebbe le impostazioni del dispositivo in un\'app reale.');
              }}
            ]
          );
          setNotificationsEnabled(false);
          setIsLoading(false);
          return;
        }
      }
      
      // Update all therapies
      for (const therapy of therapies) {
        if (therapy.enableNotifications !== value) {
          await updateTherapy(therapy.id, { enableNotifications: value });
        }
      }
      
      setNotificationsEnabled(value);
      
      if (Platform.OS !== 'web') {
        // Verify scheduled notifications for debugging
        await verifyScheduledNotifications();
      }
    } catch (error) {
      console.error('Error toggling notifications:', error);
      Alert.alert('Errore', 'Si è verificato un errore durante l\'aggiornamento delle notifiche.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleToggleAllReminders = async (value: boolean) => {
    setIsLoading(true);
    
    try {
      // Update all therapies
      for (const therapy of therapies) {
        if (therapy.enableReminders !== value) {
          await updateTherapy(therapy.id, { enableReminders: value });
        }
      }
      
      setRemindersEnabled(value);
      
      if (Platform.OS !== 'web') {
        // Verify scheduled notifications for debugging
        await verifyScheduledNotifications();
      }
    } catch (error) {
      console.error('Error toggling reminders:', error);
      Alert.alert('Errore', 'Si è verificato un errore durante l\'aggiornamento dei promemoria.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleToggleTherapyNotifications = async (therapyId: string, value: boolean) => {
    try {
      if (value && Platform.OS !== 'web') {
        // Request permissions if enabling notifications
        const hasPermission = await requestNotificationPermissions();
        
        if (!hasPermission) {
          Alert.alert(
            'Permessi Notifiche',
            'Per ricevere notifiche, devi concedere i permessi nelle impostazioni del dispositivo.',
            [
              { text: 'Annulla', style: 'cancel' },
              { text: 'Apri Impostazioni', onPress: () => {
                // Open settings (implementation depends on platform)
                Alert.alert('Info', 'Questa funzionalità aprirebbe le impostazioni del dispositivo in un\'app reale.');
              }}
            ]
          );
          return;
        }
      }
      
      await updateTherapy(therapyId, { enableNotifications: value });
      
      // Update the global switch if needed
      if (!value) {
        const allDisabled = therapies.every(therapy => 
          therapy.id === therapyId ? !value : !therapy.enableNotifications
        );
        if (allDisabled) {
          setNotificationsEnabled(false);
        }
      } else {
        setNotificationsEnabled(true);
      }
    } catch (error) {
      console.error('Error toggling therapy notifications:', error);
      Alert.alert('Errore', 'Si è verificato un errore durante l\'aggiornamento delle notifiche.');
    }
  };
  
  const handleToggleTherapyReminders = async (therapyId: string, value: boolean) => {
    try {
      await updateTherapy(therapyId, { enableReminders: value });
      
      // Update the global switch if needed
      if (!value) {
        const allDisabled = therapies.every(therapy => 
          therapy.id === therapyId ? !value : !therapy.enableReminders
        );
        if (allDisabled) {
          setRemindersEnabled(false);
        }
      } else {
        setRemindersEnabled(true);
      }
    } catch (error) {
      console.error('Error toggling therapy reminders:', error);
      Alert.alert('Errore', 'Si è verificato un errore durante l\'aggiornamento dei promemoria.');
    }
  };
  
  const handleToggleTherapyActive = async (therapyId: string, value: boolean) => {
    try {
      await toggleTherapyActive(therapyId, value);
    } catch (error) {
      console.error('Error toggling therapy active state:', error);
      Alert.alert('Errore', 'Si è verificato un errore durante l\'aggiornamento dello stato della terapia.');
    }
  };
  
  const handleBack = () => {
    router.back();
  };
  
  const formatTime = (time: string) => {
    return time;
  };
  
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen 
        options={{ 
          title: 'Notifiche',
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleStyle: {
            color: colors.text,
          },
          headerTintColor: colors.primary,
          headerLeft: () => (
            <Pressable onPress={handleBack} style={styles.backButton}>
              <ArrowLeft size={24} color={colors.primary} />
            </Pressable>
          ),
        }} 
      />
      
      <ScrollView style={styles.content}>
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <View style={styles.cardHeader}>
            <Bell size={24} color={colors.primary} />
            <Text style={[styles.cardTitle, { color: colors.text }]}>Impostazioni Notifiche</Text>
          </View>
          
          <View style={styles.settingRow}>
            <View style={styles.settingTextContainer}>
              <Text style={[styles.settingTitle, { color: colors.text }]}>Notifiche</Text>
              <Text style={[styles.settingDescription, { color: colors.gray[600] }]}>
                Ricevi notifiche per tutte le terapie
              </Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={handleToggleAllNotifications}
              disabled={isLoading}
              trackColor={{ false: colors.gray[300], true: colors.primary + '80' }}
              thumbColor={notificationsEnabled ? colors.primary : colors.gray[100]}
            />
          </View>
          
          <View style={styles.settingRow}>
            <View style={styles.settingTextContainer}>
              <Text style={[styles.settingTitle, { color: colors.text }]}>Promemoria</Text>
              <Text style={[styles.settingDescription, { color: colors.gray[600] }]}>
                Ricevi promemoria se non hai preso il farmaco
              </Text>
            </View>
            <Switch
              value={remindersEnabled}
              onValueChange={handleToggleAllReminders}
              disabled={isLoading || !notificationsEnabled}
              trackColor={{ false: colors.gray[300], true: colors.primary + '80' }}
              thumbColor={remindersEnabled && notificationsEnabled ? colors.primary : colors.gray[100]}
            />
          </View>
        </View>
        
        {upcomingDoses.length > 0 && (
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <View style={styles.cardHeader}>
              <Clock size={24} color={colors.primary} />
              <Text style={[styles.cardTitle, { color: colors.text }]}>Prossime Dosi</Text>
            </View>
            
            {upcomingDoses.map((item, index) => (
              <View 
                key={`${item.therapy.id}-${item.time}`} 
                style={[
                  styles.doseRow,
                  index < upcomingDoses.length - 1 && { borderBottomWidth: 1, borderBottomColor: colors.gray[200] }
                ]}
              >
                <View style={styles.doseInfo}>
                  <Text style={[styles.doseTime, { color: colors.primary }]}>
                    {formatTime(item.time)}
                  </Text>
                  <Text style={[styles.doseMedication, { color: colors.text }]}>
                    {item.therapy.medicationName}
                  </Text>
                  <Text style={[styles.doseDetails, { color: colors.gray[600] }]}>
                    {item.therapy.dosage ? `${item.therapy.dosage} gocce` : ''}
                    {item.therapy.eye && ` - ${getEyeText(item.therapy.eye)}`}
                  </Text>
                </View>
                <View style={styles.doseActions}>
                  <Pressable 
                    style={[
                      styles.notificationButton,
                      { backgroundColor: item.therapy.enableNotifications ? colors.primary + '20' : colors.gray[200] }
                    ]}
                    onPress={() => handleToggleTherapyNotifications(item.therapy.id, !item.therapy.enableNotifications)}
                  >
                    {item.therapy.enableNotifications ? (
                      <Bell size={18} color={colors.primary} />
                    ) : (
                      <BellOff size={18} color={colors.gray[500]} />
                    )}
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        )}
        
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <View style={styles.cardHeader}>
            <Settings size={24} color={colors.primary} />
            <Text style={[styles.cardTitle, { color: colors.text }]}>Gestione Terapie</Text>
          </View>
          
          {therapies.map((therapy, index) => (
            <View 
              key={therapy.id} 
              style={[
                styles.therapyRow,
                index < therapies.length - 1 && { borderBottomWidth: 1, borderBottomColor: colors.gray[200] }
              ]}
            >
              <View style={styles.therapyInfo}>
                <Text style={[styles.therapyName, { color: colors.text }]}>
                  {therapy.medicationName}
                </Text>
                <Text style={[styles.therapyDetails, { color: colors.gray[600] }]}>
                  {therapy.times?.join(', ')}
                  {therapy.dosage ? ` - ${therapy.dosage} gocce` : ''}
                </Text>
              </View>
              <View style={styles.therapyActions}>
                <Switch
                  value={therapy.isActive}
                  onValueChange={(value) => handleToggleTherapyActive(therapy.id, value)}
                  trackColor={{ false: colors.gray[300], true: colors.success + '80' }}
                  thumbColor={therapy.isActive ? colors.success : colors.gray[100]}
                  style={styles.therapySwitch}
                />
                <Switch
                  value={therapy.enableNotifications}
                  onValueChange={(value) => handleToggleTherapyNotifications(therapy.id, value)}
                  disabled={!therapy.isActive || !notificationsEnabled}
                  trackColor={{ false: colors.gray[300], true: colors.primary + '80' }}
                  thumbColor={therapy.enableNotifications && therapy.isActive ? colors.primary : colors.gray[100]}
                  style={styles.therapySwitch}
                />
                <Switch
                  value={therapy.enableReminders}
                  onValueChange={(value) => handleToggleTherapyReminders(therapy.id, value)}
                  disabled={!therapy.isActive || !therapy.enableNotifications || !notificationsEnabled}
                  trackColor={{ false: colors.gray[300], true: colors.warning + '80' }}
                  thumbColor={therapy.enableReminders && therapy.enableNotifications && therapy.isActive ? colors.warning : colors.gray[100]}
                  style={styles.therapySwitch}
                />
              </View>
            </View>
          ))}
          
          {therapies.length === 0 && (
            <View style={styles.emptyState}>
              <AlertCircle size={48} color={colors.gray[400]} style={styles.emptyIcon} />
              <Text style={[styles.emptyText, { color: colors.gray[600] }]}>
                Non hai ancora aggiunto terapie
              </Text>
              <Pressable 
                style={[styles.addButton, { backgroundColor: colors.primary }]}
                onPress={() => router.push('/new-therapy')}
              >
                <Text style={styles.addButtonText}>Aggiungi Terapia</Text>
              </Pressable>
            </View>
          )}
        </View>
        
        <View style={[styles.infoCard, { backgroundColor: colors.warning + '10' }]}>
          <AlertCircle size={20} color={colors.warning} style={styles.infoIcon} />
          <Text style={[styles.infoText, { color: colors.gray[700] }]}>
            Le notifiche potrebbero non funzionare correttamente se l'app è chiusa o il dispositivo è spento. Assicurati di controllare regolarmente le tue terapie.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function getEyeText(eye: string): string {
  switch (eye) {
    case 'left':
      return 'Occhio sinistro';
    case 'right':
      return 'Occhio destro';
    case 'both':
      return 'Entrambi gli occhi';
    default:
      return '';
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    padding: 8,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  settingTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
  },
  doseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  doseInfo: {
    flex: 1,
  },
  doseTime: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  doseMedication: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 2,
  },
  doseDetails: {
    fontSize: 13,
  },
  doseActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  therapyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  therapyInfo: {
    flex: 1,
    marginRight: 8,
  },
  therapyName: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 2,
  },
  therapyDetails: {
    fontSize: 13,
  },
  therapyActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  therapySwitch: {
    marginLeft: 8,
    transform: [{ scale: 0.8 }],
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  emptyIcon: {
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  infoCard: {
    borderRadius: 8,
    padding: 12,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoIcon: {
    marginRight: 8,
    marginTop: 2,
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
  },
});
