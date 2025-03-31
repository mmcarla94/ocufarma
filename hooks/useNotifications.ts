import React, { useEffect, useRef, useState } from 'react';
import { Platform, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useTherapyStore } from '@/store/therapy-store';
import Constants from 'expo-constants';
import * as Device from 'expo-device';

// Configurazione del gestore di notifiche
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// Hook personalizzato per gestire le notifiche
export function useNotifications() {
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();
  const { therapies, updateTherapy } = useTherapyStore();

  // Funzione per registrare il dispositivo per le notifiche push
  async function registerForPushNotificationsAsync() {
    let token;
    
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      
      if (finalStatus !== 'granted') {
        console.log('Failed to get push token for push notification!');
        return;
      }
      
      token = (await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig?.extra?.eas?.projectId ?? '',
      })).data;
    } else {
      console.log('Must use physical device for Push Notifications');
    }

    return token;
  }

  // Funzione per posticipare una notifica di 15 minuti
  const postponeNotification = async (therapyId: string, originalTime: string) => {
    const therapy = therapies.find(t => t.id === therapyId);
    
    if (therapy) {
      const today = new Date().toISOString().split('T')[0];
      const now = new Date();
      
      // Aggiungi 15 minuti all'orario corrente
      now.setMinutes(now.getMinutes() + 15);
      const postponedTime = now.toTimeString().split(' ')[0].substring(0, 5);
      
      // Registra la dose posticipata
      const completedDoses = therapy.completedDoses || [];
      const newCompletedDoses = [
        ...completedDoses,
        { 
          date: today, 
          time: postponedTime, 
          status: 'postponed' as const,
          originalTime 
        }
      ];
      
      // Aggiorna la terapia
      updateTherapy(therapy.id, { completedDoses: newCompletedDoses });
      
      // Programma una nuova notifica tra 15 minuti
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Promemoria Farmaco (Posticipato)",
          body: `È ora di prendere ${therapy.medicationName}`,
          data: { therapyId: therapy.id, originalTime },
        },
        trigger: { seconds: 15 * 60 }, // 15 minuti
      });
      
      return true;
    }
    
    return false;
  };

  // Funzione per registrare una dose come completata
  const markDoseAsCompleted = (therapyId: string, originalTime?: string) => {
    const therapy = therapies.find(t => t.id === therapyId);
    
    if (therapy) {
      const today = new Date().toISOString().split('T')[0];
      const time = new Date().toTimeString().split(' ')[0].substring(0, 5);
      
      const completedDoses = therapy.completedDoses || [];
      const newCompletedDoses = [
        ...completedDoses,
        { 
          date: today, 
          time, 
          status: 'completed' as const,
          originalTime: originalTime || time
        }
      ];
      
      updateTherapy(therapy.id, { completedDoses: newCompletedDoses });
      return true;
    }
    
    return false;
  };

  // Funzione per registrare una dose come saltata
  const markDoseAsSkipped = (therapyId: string, originalTime?: string) => {
    const therapy = therapies.find(t => t.id === therapyId);
    
    if (therapy) {
      const today = new Date().toISOString().split('T')[0];
      const time = new Date().toTimeString().split(' ')[0].substring(0, 5);
      
      const completedDoses = therapy.completedDoses || [];
      const newCompletedDoses = [
        ...completedDoses,
        { 
          date: today, 
          time, 
          status: 'skipped' as const,
          originalTime: originalTime || time
        }
      ];
      
      updateTherapy(therapy.id, { completedDoses: newCompletedDoses });
      return true;
    }
    
    return false;
  };

  // Funzione per mostrare le opzioni di risposta alla notifica
  const showNotificationOptions = (therapyId: string, originalTime?: string) => {
    if (Platform.OS === 'web') {
      console.log('Alert dialogs not fully supported on web');
      return;
    }
    
    Alert.alert(
      'Promemoria Farmaco',
      'Come vuoi gestire questa dose?',
      [
        {
          text: 'Completato',
          onPress: () => markDoseAsCompleted(therapyId, originalTime),
          style: 'default',
        },
        {
          text: 'Posticipa (15 min)',
          onPress: () => postponeNotification(therapyId, originalTime || new Date().toTimeString().split(' ')[0].substring(0, 5)),
        },
        {
          text: 'Non instillata',
          onPress: () => markDoseAsSkipped(therapyId, originalTime),
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  // Funzione per gestire la risposta alle notifiche
  const handleNotificationResponse = (response: Notifications.NotificationResponse) => {
    const data = response.notification.request.content.data as { 
      therapyId?: string;
      originalTime?: string;
    };
    
    if (data.therapyId) {
      console.log(`Notifica cliccata per la terapia: ${data.therapyId}`);
      
      // Mostra le opzioni di risposta alla notifica
      showNotificationOptions(data.therapyId, data.originalTime);
    }
  };

  // Effetto per configurare i listener delle notifiche
  useEffect(() => {
    // Registrazione per le notifiche push
    registerForPushNotificationsAsync();

    // Listener per le notifiche ricevute mentre l'app è in foreground
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notifica ricevuta:', notification);
    });

    // Listener per le risposte alle notifiche (quando l'utente clicca su una notifica)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(handleNotificationResponse);

    // Pulizia dei listener quando il componente viene smontato
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current!);
      Notifications.removeNotificationSubscription(responseListener.current!);
    };
  }, [therapies]);

  // Funzione per programmare una notifica di test
  const scheduleTestNotification = async () => {
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Test Notifica OcuFarma",
        body: "Questa è una notifica di test per verificare il funzionamento del sistema.",
        data: { test: true },
      },
      trigger: { seconds: 5 },
    });
    
    console.log(`Test notification scheduled: ${notificationId}`);
    return notificationId;
  };

  return {
    scheduleTestNotification,
    markDoseAsCompleted,
    markDoseAsSkipped,
    postponeNotification,
    showNotificationOptions,
  };
}
