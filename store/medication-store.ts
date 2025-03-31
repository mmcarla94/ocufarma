import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Medication, MedicationCategory } from '@/types/medication';
import { medications } from '@/mocks/medications';

interface MedicationState {
  medications: Medication[];
  favorites: string[];
  isLoading: boolean;
  error: string | null;
  stats: {
    searchedCount: number;
    scannedCount: number;
  };
  
  // Actions
  addToFavorites: (id: string) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
  incrementSearchCount: () => void;
  incrementScanCount: () => void;
  
  // Filters
  filterByCategory: (category: MedicationCategory) => Medication[];
  searchMedications: (query: string) => Medication[];
  searchMedicationByBarcode: (barcode: string) => Medication | null;
  getFavorites: () => Medication[];
  
  // Interactions
  checkInteractions: (medicationId1: string, medicationId2: string) => string | null;
}

// Aggiungiamo i codici a barre ai farmaci di esempio
const medicationsWithBarcodes = medications.map((med, index) => {
  // Generiamo un codice a barre univoco per ogni farmaco
  // In un'app reale, questi sarebbero i veri codici a barre dei farmaci
  const barcode = `978${(1000000 + parseInt(med.id)).toString().padStart(10, '0')}`;
  
  return {
    ...med,
    barcode
  };
});

// Add sample interactions to medications
const medicationsWithInteractions = medicationsWithBarcodes.map(med => {
  // Only add interactions to certain medications for demonstration
  if (med.id === '1') { // Timolol
    return {
      ...med,
      interactions: [
        {
          activeIngredient: 'Brimonidina tartrato',
          effect: 'Può aumentare l\'effetto ipotensivo e causare bradicardia',
          severity: 'moderate'
        },
        {
          medicationId: '19', // Ranibizumab
          effect: 'Può aumentare il rischio di infiammazione intraoculare',
          severity: 'mild'
        }
      ]
    };
  } else if (med.id === '5') { // Prednisolone
    return {
      ...med,
      interactions: [
        {
          activeIngredient: 'Moxifloxacina cloridrato',
          effect: 'Può mascherare segni di infezione o peggiorare un\'infezione esistente',
          severity: 'moderate'
        },
        {
          medicationId: '17', // Proparacaina
          effect: 'Può ritardare la guarigione corneale',
          severity: 'moderate'
        }
      ]
    };
  } else if (med.id === '3') { // Moxifloxacina
    return {
      ...med,
      interactions: [
        {
          activeIngredient: 'Prednisolone acetato',
          effect: 'L\'efficacia antibiotica può essere ridotta dai corticosteroidi',
          severity: 'moderate'
        }
      ]
    };
  } else if (med.id === '21') { // Brimonidina
    return {
      ...med,
      interactions: [
        {
          activeIngredient: 'Timolol maleate',
          effect: 'Può aumentare l\'effetto ipotensivo e causare bradicardia',
          severity: 'moderate'
        }
      ]
    };
  }
  return med;
});

export const useMedicationStore = create<MedicationState>()(
  persist(
    (set, get) => ({
      medications: medicationsWithInteractions,
      favorites: [],
      isLoading: false,
      error: null,
      stats: {
        searchedCount: 0,
        scannedCount: 0
      },
      
      addToFavorites: (id) => {
        set((state) => ({
          favorites: [...state.favorites, id]
        }));
      },
      
      removeFromFavorites: (id) => {
        set((state) => ({
          favorites: state.favorites.filter(favId => favId !== id)
        }));
      },
      
      isFavorite: (id) => {
        return get().favorites.includes(id);
      },
      
      filterByCategory: (category) => {
        return get().medications.filter(med => med.category === category);
      },
      
      incrementSearchCount: () => {
        set((state) => ({
          stats: {
            ...state.stats,
            searchedCount: state.stats.searchedCount + 1
          }
        }));
      },
      
      incrementScanCount: () => {
        set((state) => ({
          stats: {
            ...state.stats,
            scannedCount: state.stats.scannedCount + 1
          }
        }));
      },
      
      searchMedications: (query) => {
        if (!query.trim()) return get().medications;
        
        // Increment search count when a real search is performed
        get().incrementSearchCount();
        
        const lowercaseQuery = query.toLowerCase();
        return get().medications.filter(med => 
          med.name.toLowerCase().includes(lowercaseQuery) || 
          med.activeIngredient.toLowerCase().includes(lowercaseQuery)
        );
      },
      
      searchMedicationByBarcode: (barcode) => {
        // Incrementiamo il contatore delle scansioni
        get().incrementScanCount();
        
        // Cerchiamo il farmaco con il codice a barre corrispondente
        const medication = get().medications.find(med => med.barcode === barcode);
        
        return medication || null;
      },
      
      getFavorites: () => {
        const { medications, favorites } = get();
        return medications.filter(med => favorites.includes(med.id));
      },
      
      checkInteractions: (medicationId1, medicationId2) => {
        const { medications } = get();
        
        const medication1 = medications.find(med => med.id === medicationId1);
        const medication2 = medications.find(med => med.id === medicationId2);
        
        if (!medication1 || !medication2 || !medication1.interactions) {
          return null;
        }
        
        // Check if there's a direct interaction by ID
        const directInteraction = medication1.interactions.find(
          interaction => interaction.medicationId === medicationId2
        );
        
        if (directInteraction) {
          return directInteraction.effect;
        }
        
        // Check if there's an interaction by active ingredient
        const ingredientInteraction = medication1.interactions.find(
          interaction => interaction.activeIngredient === medication2.activeIngredient
        );
        
        if (ingredientInteraction) {
          return ingredientInteraction.effect;
        }
        
        return null;
      }
    }),
    {
      name: 'medication-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
