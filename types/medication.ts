export interface Medication {
  id: string;
  name: string;
  activeIngredient: string;
  description: string;
  category: string;
  subcategory?: string;
  dosageForm: string;
  strength: string;
  manufacturer: string;
  prescriptionRequired: boolean;
  sideEffects: string[];
  contraindications: string[];
  interactions?: Interaction[];
  imageUrl?: string;
  isFavorite?: boolean;
}

export interface Interaction {
  medicationId?: string;
  activeIngredient?: string;
  effect: string;
  severity: 'mild' | 'moderate' | 'severe';
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  count: number;
}

export type UserRole = 'medico' | 'paziente' | 'premium';

export interface Therapy {
  id: string;
  medicationId: string;
  medicationName: string;
  eye: EyeSelection;
  frequency: string;
  startDate: string;
  endDate?: string;
  notes?: string;
  isActive: boolean;
  notificationIds?: string[];
  times?: string[];
  enableNotifications: boolean;
  completedDoses?: {
    date: string;
    time: string;
    status: 'completed' | 'skipped' | 'postponed';
    originalTime?: string; // Per tenere traccia dell'orario originale quando posticipato
  }[];
}