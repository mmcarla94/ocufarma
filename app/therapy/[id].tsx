import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, Alert, Switch, Platform } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useTherapyStore } from '@/store/therapy-store';
import { Eye, Clock, Calendar, CheckCircle, Edit2, Trash2, Bell, ArrowLeft } from 'lucide-react-native';
import { EyeSelection } from '@/types/medication';

export default function TherapyDetailScreen() {
  const colors = useThemeColors();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { getTherapyById, deleteTherapy, updateTherapy } = useTherapyStore();
  const [therapy, setTherapy] = useState(null);
  
  useEffect(() => {
    if (id) {
      const therapyData = getTherapyById(id.toString());
      setTherapy(therapyData);
    }
  }, [id, getTherapyById]);
  
  const handleEdit = () => {
    router.push(`/edit-therapy/${id}`);
  };
  
  const handleDelete = () => {
    Alert.alert(
      'Conferma eliminazione',
      'Sei sicuro di voler eliminare questa terapia?',
      [
        {
          text: 'Annulla',
          style: 'cancel',
        },
        {
          text: 'Elimina',
          onPress: () => {
            deleteTherapy(id.toString());
            router.push('/(tabs)/therapies');
          },
          style: 'destructive',
        },
      ]
    );
  };
  
  const handleToggleNotifications = (value) => {
    updateTherapy(therapy.id, { enableNotifications: value });
    
    // Update local state
    setTherapy({
      ...therapy,
      enableNotifications: value
    });
  };
  
  const handleMarkDoseCompleted = () => {
    const today = new Date().toISOString().split('T')[0];
    const time = new Date().toTimeString().split(' ')[0].substring(0, 5);
    
    const completedDoses = therapy.completedDoses || [];
    const newCompletedDoses = [
      ...completedDoses,
      { date: today, time, completed: true }
    ];
    
    updateTherapy(therapy.id, { completedDoses: newCompletedDoses });
    
    // Update local state
    setTherapy({
      ...therapy,
      completedDoses: newCompletedDoses
    });
    
    Alert.alert(
      'Dose Completata',
      'Hai registrato con successo la dose di oggi. Continua così!',
      [{ text: 'OK' }]
    );
  };
  
  // Format date to Italian format (DD/MM/YYYY)
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };
  
  // Get eye text
  const getEyeText = (eye: EyeSelection) => {
    switch (eye) {
      case 'left':
        return "Occhio sinistro";
      case 'right':
        return "Occhio destro";
      case 'both':
        return "Entrambi gli occhi";
      default:
        return "Occhi";
    }
  };
  
  // Render back button that works on both web and native
  const renderBackButton = () => {
    if (Platform.OS === 'web') {
      return (
        <div onClick={() => router.back()} style={{ marginRight: 10, cursor: 'pointer' }}>
          <ArrowLeft size={24} color={colors.primary} />
        </div>
      );
    } else {
      return (
        <Pressable onPress={() => router.back()} style={{ marginRight: 10 }}>
          <ArrowLeft size={24} color={colors.primary} />
        </Pressable>
      );
    }
  };
  
  if (!therapy) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <Stack.Screen 
          options={{
            title: 'Dettaglio Terapia',
            headerTitleStyle: { 
              fontWeight: '600',
              fontSize: 18,
            },
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerShadowVisible: false,
            headerLeft: () => renderBackButton(),
          }}
        />
        <View style={styles.loadingContainer}>
          <Text style={{ color: colors.text }}>Caricamento...</Text>
        </View>
      </SafeAreaView>
    );
  }
  
  // Check if a dose was completed today
  const today = new Date().toISOString().split('T')[0];
  const doseCompletedToday = therapy.completedDoses?.some(dose => dose.date === today);
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen 
        options={{
          title: 'Dettaglio Terapia',
          headerTitleStyle: { 
            fontWeight: '600',
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerShadowVisible: false,
          headerLeft: () => renderBackButton(),
        }}
      />
      
      <ScrollView style={styles.scrollContainer}>
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Eye size={24} color={colors.primary} style={styles.headerIcon} />
              <Text style={[styles.title, { color: colors.text }]}>{therapy.medicationName}</Text>
            </View>
            
            <View style={[
              styles.statusBadge, 
              { backgroundColor: therapy.isActive ? colors.success + '20' : colors.gray[300] }
            ]}>
              <Text style={[
                styles.statusText, 
                { color: therapy.isActive ? colors.success : colors.gray[600] }
              ]}>
                {therapy.isActive ? 'Attiva' : 'Inattiva'}
              </Text>
            </View>
          </View>
          
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={[styles.detailLabel, { color: colors.gray[600] }]}>Occhio:</Text>
              <Text style={[styles.detailValue, { color: colors.text }]}>{getEyeText(therapy.eye)}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={[styles.detailLabel, { color: colors.gray[600] }]}>Frequenza:</Text>
              <Text style={[styles.detailValue, { color: colors.text }]}>{therapy.frequency}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={[styles.detailLabel, { color: colors.gray[600] }]}>Data di inizio:</Text>
              <Text style={[styles.detailValue, { color: colors.text }]}>{formatDate(therapy.startDate)}</Text>
            </View>
            
            {therapy.endDate && (
              <View style={styles.detailRow}>
                <Text style={[styles.detailLabel, { color: colors.gray[600] }]}>Data di fine:</Text>
                <Text style={[styles.detailValue, { color: colors.text }]}>{formatDate(therapy.endDate)}</Text>
              </View>
            )}
            
            {therapy.notes && (
              <View style={styles.notesContainer}>
                <Text style={[styles.notesLabel, { color: colors.gray[600] }]}>Note:</Text>
                <Text style={[styles.notesText, { color: colors.text }]}>{therapy.notes}</Text>
              </View>
            )}
          </View>
          
          {therapy.isActive && (
            <View style={styles.reminderContainer}>
              <View style={styles.reminderHeader}>
                <Clock size={18} color={colors.primary} style={styles.reminderIcon} />
                <Text style={[styles.reminderTitle, { color: colors.text }]}>Orari di assunzione</Text>
              </View>
              
              <View style={styles.timesList}>
                {therapy.times && therapy.times.map((time, index) => (
                  <View 
                    key={index} 
                    style={[styles.timeItem, { backgroundColor: colors.background }]}
                  >
                    <Text style={[styles.timeText, { color: colors.text }]}>{time}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
          
          <View style={styles.notificationToggleContainer}>
            <View style={styles.notificationContent}>
              <Bell size={18} color={colors.primary} style={styles.notificationIcon} />
              <Text style={[styles.notificationText, { color: colors.text }]}>
                Notifiche
              </Text>
            </View>
            <Switch
              value={therapy.enableNotifications}
              onValueChange={handleToggleNotifications}
              trackColor={{ false: colors.gray[300], true: colors.primary + '70' }}
              thumbColor={therapy.enableNotifications ? colors.primary : colors.gray[400]}
            />
          </View>
        </View>
        
        {therapy.isActive && (
          <View style={[styles.actionCard, { backgroundColor: colors.card }]}>
            <View style={styles.actionHeader}>
              <CheckCircle size={18} color={colors.primary} style={styles.actionIcon} />
              <Text style={[styles.actionTitle, { color: colors.text }]}>Registra dose</Text>
            </View>
            
            {doseCompletedToday ? (
              <View style={[styles.completedContainer, { backgroundColor: colors.success + '15' }]}>
                <CheckCircle size={20} color={colors.success} style={styles.completedIcon} />
                <Text style={[styles.completedText, { color: colors.success }]}>
                  Hai già registrato la dose di oggi. Ottimo lavoro!
                </Text>
              </View>
            ) : (
              <>
                <Text style={[styles.actionDescription, { color: colors.gray[600] }]}>
                  Registra quando hai assunto il farmaco per tenere traccia della tua terapia
                </Text>
                
                <Pressable 
                  style={[styles.markCompletedButton, { backgroundColor: colors.primary }]}
                  onPress={handleMarkDoseCompleted}
                >
                  <Text style={styles.markCompletedText}>Segna come completata</Text>
                </Pressable>
              </>
            )}
          </View>
        )}
        
        <View style={styles.buttonsContainer}>
          <Pressable 
            style={[styles.editButton, { backgroundColor: colors.gray[200] }]}
            onPress={handleEdit}
          >
            <Edit2 size={18} color={colors.gray[700]} style={styles.buttonIcon} />
            <Text style={[styles.editButtonText, { color: colors.gray[700] }]}>Modifica</Text>
          </Pressable>
          
          <Pressable 
            style={[styles.deleteButton, { backgroundColor: colors.danger + '15' }]}
            onPress={handleDelete}
          >
            <Trash2 size={18} color={colors.danger} style={styles.buttonIcon} />
            <Text style={[styles.deleteButtonText, { color: colors.danger }]}>Elimina</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerIcon: {
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  detailsContainer: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 15,
    fontWeight: '500',
    width: 120,
  },
  detailValue: {
    fontSize: 15,
    flex: 1,
  },
  notesContainer: {
    marginTop: 8,
  },
  notesLabel: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 4,
  },
  notesText: {
    fontSize: 15,
    lineHeight: 22,
  },
  reminderContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E5E7',
    paddingTop: 16,
    marginBottom: 16,
  },
  reminderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  reminderIcon: {
    marginRight: 8,
  },
  reminderTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  timesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeItem: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  timeText: {
    fontSize: 14,
    fontWeight: '500',
  },
  notificationToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E7',
    paddingTop: 16,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    marginRight: 8,
  },
  notificationText: {
    fontSize: 16,
    fontWeight: '500',
  },
  actionCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  actionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionIcon: {
    marginRight: 8,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  actionDescription: {
    fontSize: 14,
    marginBottom: 16,
  },
  markCompletedButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  markCompletedText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  completedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  completedIcon: {
    marginRight: 10,
  },
  completedText: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  editButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  deleteButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginLeft: 8,
  },
  buttonIcon: {
    marginRight: 8,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});