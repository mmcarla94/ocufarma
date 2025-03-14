import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Medication } from '@/types/medication';
import { Heart, AlertTriangle } from 'lucide-react-native';
import { useMedicationStore } from '@/store/medication-store';
import { useRouter } from 'expo-router';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useTherapyStore } from '@/store/therapy-store';

interface MedicationCardProps {
  medication: Medication;
  onSelect?: () => void;
}

export const MedicationCard: React.FC<MedicationCardProps> = ({ medication, onSelect }) => {
  const router = useRouter();
  const colors = useThemeColors();
  const { isFavorite, addToFavorites, removeFromFavorites } = useMedicationStore();
  const { checkInteractions } = useTherapyStore();
  
  const isFav = isFavorite(medication.id);
  const interactions = checkInteractions(medication.id);
  const hasInteractions = interactions.length > 0;
  
  const handlePress = () => {
    if (onSelect) {
      onSelect();
    } else {
      router.push(`/medication/${medication.id}`);
    }
  };
  
  const handleFavoriteToggle = (e: any) => {
    e.stopPropagation();
    if (isFav) {
      removeFromFavorites(medication.id);
    } else {
      addToFavorites(medication.id);
    }
  };

  const getCategoryColor = () => {
    switch (medication.category) {
      case 'anti-glaucoma': return colors.category.antiGlaucoma;
      case 'anti-infective': return colors.category.antiInfective;
      case 'anti-inflammatory': return colors.category.antiInflammatory;
      case 'anti-allergic': return colors.category.antiAllergic;
      case 'mydriatic-cycloplegic': return colors.category.mydriatic;
      case 'artificial-tears': return colors.category.artificialTears;
      case 'supplements': return colors.category.supplements;
      case 'diagnostic': return colors.category.diagnostic;
      case 'anesthetic': return colors.category.anesthetic;
      case 'intravitreal': return colors.category.intravitreal;
      case 'antiseptic': return colors.category.antiseptic || colors.warning;
      default: return colors.primary;
    }
  };

  // Simplified subcategory color function to avoid infinite loops
  const getSubcategoryColor = () => {
    if (!medication.subcategory) return getCategoryColor();
    
    // Just return the category color with slight transparency
    return getCategoryColor();
  };

  const formatCategory = (category: string) => {
    // Special cases for categories that should be displayed without spaces
    if (category === 'anti-glaucoma') return 'Antiglaucoma';
    if (category === 'anti-infective') return 'Antinfettivi';
    if (category === 'anti-allergic') return 'Antiallergici';
    
    // For other categories, capitalize each word
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const formatSubcategory = (subcategory: string) => {
    // Italian translations for subcategories
    const translations: Record<string, string> = {
      'beta-blockers': 'Beta-bloccanti',
      'prostaglandins': 'Prostaglandine',
      'prostaglandin-analogs': 'Prostaglandine',
      'alpha-agonists': 'Alfa-agonisti',
      'carbonic-anhydrase-inhibitors': 'Inibitori anidrasi carbonica',
      'cholinergic-agonists': 'Agonisti colinergici',
      'combined-medications': 'Combinazioni',
      'combinations': 'Combinazioni',
      'antibiotics': 'Antibiotici',
      'antivirals': 'Antivirali',
      'antifungals': 'Antifungini',
      'combined-anti-infective': 'Combinati',
      'corticosteroids': 'Corticosteroidi',
      'nsaids': 'FANS',
      'combined-anti-inflammatory': 'Combinati',
      'antihistamines': 'Antistaminici',
      'mast-cell-stabilizers': 'Stabilizzatori mastociti',
      'combined-anti-allergic': 'Combinati',
      'dual-action': 'Doppia azione',
      'anticholinergics': 'Anticolinergici',
      'sympathomimetics': 'Simpaticomimetici',
      'combined-mydriatic': 'Combinati',
      'povidone-iodine': 'Iodopovidone',
      'chlorhexidine': 'Clorexidina',
      'other-antiseptics': 'Altri antisettici',
      'aqueous': 'Acquose',
      'lipidic': 'Lipidiche',
      'high-tech': 'High-tech',
      'preservative-free': 'Senza conservanti',
      'gel-formulations': 'Gel',
      'retina': 'Retina',
      'vitreous': 'Vitreo',
      'neuroprotectors': 'Neuroprotettori',
      'general-eye-health': 'Salute oculare',
      'ocular-surface': 'Superficie oculare',
      'dyes': 'Coloranti',
      'contrast-agents': 'Agenti di contrasto',
      'other-diagnostic': 'Altri diagnostici',
      'topical-anesthetics': 'Anestetici topici',
      'injectable-anesthetics': 'Anestetici iniettabili',
      'anti-vegf': 'Anti-VEGF',
      'steroids-intravitreal': 'Steroidi intravitreali',
      'antibiotics-intravitreal': 'Antibiotici intravitreali',
      'ointment': 'Unguento',
      'ointment-anti-inflammatory': 'Unguento'
    };

    // Return the Italian translation if available, otherwise format the original
    return translations[subcategory] || 
      subcategory.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
  };
  
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: colors.card },
        pressed && styles.pressed
      ]}
      onPress={handlePress}
    >
      {medication.imageUrl && (
        <Image 
          source={{ uri: medication.imageUrl }} 
          style={styles.image}
          resizeMode="cover"
        />
      )}
      
      <View style={styles.content}>
        <Text 
          style={[styles.name, { color: colors.text }]} 
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {medication.name}
        </Text>
        
        <Text 
          style={[styles.activeIngredient, { color: colors.gray[600] }]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {medication.activeIngredient}
          {medication.concentration && ` ${medication.concentration}`}
        </Text>
        
        <View style={styles.bottomRow}>
          <View style={styles.categoryContainer}>
            {/* Category tag is now optional and only shown in search or favorites */}
            {(router.pathname === '/search' || router.pathname === '/(tabs)/favorites') && (
              <Text 
                style={[
                  styles.category, 
                  { 
                    backgroundColor: getCategoryColor() + '20', 
                    color: getCategoryColor() 
                  }
                ]} 
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {formatCategory(medication.category)}
              </Text>
            )}
            
            {medication.subcategory && (
              <Text 
                style={[
                  styles.subcategory, 
                  { 
                    backgroundColor: getSubcategoryColor() + '20',
                    color: getSubcategoryColor() 
                  }
                ]} 
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {formatSubcategory(medication.subcategory)}
              </Text>
            )}
          </View>
          
          {hasInteractions && (
            <View style={styles.interactionIndicator}>
              <AlertTriangle size={16} color={colors.warning} />
            </View>
          )}
        </View>
      </View>
      
      <Pressable 
        style={styles.favoriteButton}
        onPress={handleFavoriteToggle}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Heart 
          size={22} 
          color={isFav ? colors.error : colors.gray[400]} 
          fill={isFav ? colors.error : 'none'} 
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
    height: 90, // Reduced height for better symmetry
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  image: {
    width: 70, // Slightly reduced for better proportions
    height: '100%',
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between', // Ensures equal spacing between elements
  },
  name: {
    fontSize: 15, // Reduced from 16
    fontWeight: '600',
    marginBottom: 4,
  },
  activeIngredient: {
    fontSize: 13, // Reduced from 14
    marginBottom: 4,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap',
    gap: 4,
  },
  category: {
    fontSize: 11, // Reduced from 12
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
    maxWidth: '100%', // Prevent overflow
  },
  subcategory: {
    fontSize: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
    maxWidth: '60%', // Prevent overflow
  },
  interactionIndicator: {
    marginLeft: 8,
  },
  favoriteButton: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center', // Center the heart icon
    width: 46, // Fixed width for symmetry
  },
});