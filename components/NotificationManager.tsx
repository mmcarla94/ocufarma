import React, { useEffect } from 'react';
import { useTherapyStore } from '@/store/therapy-store';
import { useNotifications } from '@/hooks/useNotifications';

export default function NotificationManager() {
  const therapyStore = useTherapyStore();
  useNotifications(); // Inizializza il sistema di notifiche

  // Carica le terapie all'avvio dell'app
  useEffect(() => {
    // Utilizziamo una funzione asincrona interna per gestire l'inizializzazione
    const initializeTherapies = async () => {
      try {
        await therapyStore.loadTherapies();
        console.log('Terapie caricate con successo');
      } catch (error) {
        console.error('Errore durante il caricamento delle terapie:', error);
      }
    };
    
    initializeTherapies();
  }, []);

  return null; // Questo componente non ha UI, gestisce solo le notifiche in background
}
