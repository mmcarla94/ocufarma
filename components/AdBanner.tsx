import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, ActivityIndicator } from 'react-native';
import { X } from 'lucide-react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useRouter } from 'expo-router';
// Nota: In un'implementazione reale, importeremmo AdMob
// import { AdMobBanner, AdMobInterstitial, setTestDeviceIDAsync } from 'expo-ads-admob';

interface AdBannerProps {
  isVisible: boolean;
  onClose: () => void;
  adDuration?: number; // Durata in secondi
  adType?: 'banner' | 'interstitial'; // Tipo di annuncio
  testMode?: boolean; // Modalità di test per AdMob
}

export const AdBanner: React.FC<AdBannerProps> = ({ 
  isVisible, 
  onClose, 
  adDuration = 5, // Default 5 secondi
  adType = 'interstitial', // Default interstitial
  testMode = true // Default modalità test attiva
}) => {
  const colors = useThemeColors();
  const router = useRouter();
  const [timeRemaining, setTimeRemaining] = useState(adDuration);
  const [isLoading, setIsLoading] = useState(true);
  
  // In un'implementazione reale, configureremmo AdMob qui
  useEffect(() => {
    // Configurazione di AdMob (commentata perché è solo dimostrativa)
    // async function configureAdMob() {
    //   await setTestDeviceIDAsync('EMULATOR');
    //   if (adType === 'interstitial') {
    //     await AdMobInterstitial.setAdUnitID(testMode ? 'ca-app-pub-3940256099942544/1033173712' : 'IL-TUO-ID-REALE');
    //   }
    // }
    // configureAdMob();
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      // Simula il caricamento dell'annuncio
      setIsLoading(true);
      
      // In un'implementazione reale, caricheremmo un annuncio AdMob qui
      // async function loadAd() {
      //   try {
      //     if (adType === 'interstitial') {
      //       await AdMobInterstitial.requestAdAsync();
      //       await AdMobInterstitial.showAdAsync();
      //     }
      //   } catch (error) {
      //     console.error('Errore nel caricamento dell\'annuncio:', error);
      //   }
      // }
      // loadAd();
      
      const loadingTimer = setTimeout(() => {
        setIsLoading(false);
        setTimeRemaining(adDuration);
      }, 1000);
      
      return () => clearTimeout(loadingTimer);
    }
  }, [isVisible, adDuration]);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isVisible && !isLoading && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isVisible, isLoading, timeRemaining]);
  
  useEffect(() => {
    if (timeRemaining === 0) {
      // Chiudi automaticamente l'annuncio dopo che il timer è scaduto
      const closeTimer = setTimeout(() => {
        onClose();
      }, 500);
      
      return () => clearTimeout(closeTimer);
    }
  }, [timeRemaining, onClose]);
  
  if (!isVisible) return null;
  
  return (
    <Modal
      transparent
      visible={isVisible}
      animationType="fade"
      onRequestClose={() => {
        if (timeRemaining === 0) onClose();
      }}
    >
      <View style={styles.modalOverlay}>
        <View style={[styles.adContainer, { backgroundColor: colors.card }]}>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={colors.primary} />
              <Text style={[styles.loadingText, { color: colors.text }]}>Caricamento annuncio...</Text>
            </View>
          ) : (
            <>
              <View style={styles.adHeader}>
                <Text style={[styles.adLabel, { color: colors.gray[600] }]}>Annuncio</Text>
                {timeRemaining === 0 ? (
                  <Pressable onPress={onClose} style={styles.closeButton}>
                    <X size={20} color={colors.gray[600]} />
                  </Pressable>
                ) : (
                  <Text style={[styles.timerText, { color: colors.gray[600] }]}>
                    {timeRemaining}s
                  </Text>
                )}
              </View>
              
              <View style={[styles.adContent, { backgroundColor: colors.primary + '15' }]}>
                <Text style={[styles.adTitle, { color: colors.text }]}>OcuFarma Premium</Text>
                <Text style={[styles.adDescription, { color: colors.gray[600] }]}>
                  Rimuovi le pubblicità e supporta lo sviluppo dell'app con soli €4,99 all'anno!
                </Text>
                
                {timeRemaining === 0 && (
                  <Pressable 
                    style={[styles.adButton, { backgroundColor: colors.primary }]}
                    onPress={() => {
                      onClose();
                      // Naviga alla pagina per sostenere il progetto
                      router.push('/support-project');
                    }}
                  >
                    <Text style={styles.adButtonText}>Scopri di più</Text>
                  </Pressable>
                )}
              </View>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  adContainer: {
    width: '90%',
    maxWidth: 400,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  adHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  adLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  timerText: {
    fontSize: 14,
    fontWeight: '500',
  },
  closeButton: {
    padding: 4,
  },
  adContent: {
    padding: 20,
    alignItems: 'center',
  },
  adTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  adDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  adButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  adButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  loadingContainer: {
    padding: 40,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
  },
});