import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface PremiumState {
  isPremium: boolean;
  premiumExpiryDate: string | null;
  medicationsViewed: number;
  adFrequency: number;
  lastAdShownTime: string | null;
  
  // Actions
  setPremium: (isPremium: boolean, expiryDate?: string) => void;
  incrementMedicationsViewed: () => number;
  resetMedicationsViewed: () => void;
  shouldShowAd: () => boolean;
  setAdShown: () => void;
  setAdFrequency: (frequency: number) => void;
  getRemainingPremiumDays: () => number | null;
}

export const usePremiumStore = create<PremiumState>()(
  persist(
    (set, get) => ({
      isPremium: false,
      premiumExpiryDate: null,
      medicationsViewed: 0,
      adFrequency: 3, // Mostra pubblicità ogni 3 farmaci visualizzati
      lastAdShownTime: null,
      
      setPremium: (isPremium, expiryDate) => {
        if (isPremium && expiryDate) {
          set({ isPremium, premiumExpiryDate: expiryDate });
        } else if (!isPremium) {
          set({ isPremium, premiumExpiryDate: null });
        }
        
        // Verifica se l'abbonamento è scaduto
        const checkPremiumExpiry = () => {
          const { isPremium, premiumExpiryDate } = get();
          
          if (isPremium && premiumExpiryDate) {
            const now = new Date();
            const expiry = new Date(premiumExpiryDate);
            
            if (now > expiry) {
              set({ isPremium: false, premiumExpiryDate: null });
            }
          }
        };
        
        // Controlla la scadenza all'avvio
        checkPremiumExpiry();
      },
      
      incrementMedicationsViewed: () => {
        const { medicationsViewed, isPremium } = get();
        
        // Se l'utente è premium, non incrementare il contatore
        if (isPremium) return 0;
        
        const newCount = medicationsViewed + 1;
        set({ medicationsViewed: newCount });
        return newCount;
      },
      
      resetMedicationsViewed: () => {
        set({ medicationsViewed: 0 });
      },
      
      shouldShowAd: () => {
        const { medicationsViewed, adFrequency, isPremium, lastAdShownTime } = get();
        
        // Gli utenti premium non vedono pubblicità
        if (isPremium) return false;
        
        // Verifica se è passato abbastanza tempo dall'ultima pubblicità (almeno 60 secondi)
        if (lastAdShownTime) {
          const now = new Date();
          const lastShown = new Date(lastAdShownTime);
          const timeDiff = now.getTime() - lastShown.getTime();
          const secondsPassed = timeDiff / 1000;
          
          if (secondsPassed < 60) return false;
        }
        
        // Mostra pubblicità se il numero di farmaci visualizzati è un multiplo della frequenza
        return medicationsViewed > 0 && medicationsViewed % adFrequency === 0;
      },
      
      setAdShown: () => {
        set({ lastAdShownTime: new Date().toISOString() });
      },
      
      setAdFrequency: (frequency) => {
        set({ adFrequency: frequency });
      },
      
      getRemainingPremiumDays: () => {
        const { isPremium, premiumExpiryDate } = get();
        
        if (!isPremium || !premiumExpiryDate) return null;
        
        const now = new Date();
        const expiry = new Date(premiumExpiryDate);
        const timeDiff = expiry.getTime() - now.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        return daysDiff > 0 ? daysDiff : 0;
      }
    }),
    {
      name: 'premium-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);