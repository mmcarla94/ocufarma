import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, Linking, Alert, Platform } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { useMedicationStore } from '@/store/medication-store';
import { Heart, Clock, AlertCircle, ExternalLink, ShoppingCart, FileText, Pill, Check, X, ArrowLeft, Info, Droplets, Beaker, Building, Package, AlertTriangle } from 'lucide-react-native';
import { useTherapyStore } from '@/store/therapy-store';
import { useThemeColors } from '@/hooks/useThemeColors';
import { usePremiumStore } from '@/store/premium-store';
import { AdBanner } from '@/components/AdBanner';

export default function MedicationDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const colors = useThemeColors();
  const { medications, isFavorite, addToFavorites, removeFromFavorites } = useMedicationStore();
  const { checkInteractions } = useTherapyStore();
  const { incrementMedicationsViewed, shouldShowAd, setAdShown, adFrequency } = usePremiumStore();
  const [showAd, setShowAd] = useState(false);
  const [adType, setAdType] = useState<'banner' | 'interstitial'>('interstitial');
  
  const medication = medications.find(med => med.id === id);
  
  // Gestione delle pubblicità
  useEffect(() => {
    // Incrementa il contatore dei farmaci visualizzati
    const viewCount = incrementMedicationsViewed();
    
    // Verifica se mostrare una pubblicità
    if (shouldShowAd()) {
      // Determina il tipo di annuncio in base al contatore
      // Mostra un interstitial ogni 3-4 farmaci (in base a adFrequency)
      // e un banner negli altri casi
      setAdType(viewCount % (adFrequency * 2) === 0 ? 'interstitial' : 'banner');
      
      // Mostra la pubblicità con un leggero ritardo per permettere il caricamento della pagina
      const adTimer = setTimeout(() => {
        setShowAd(true);
        setAdShown(); // Registra che una pubblicità è stata mostrata
      }, 1000);
      
      return () => clearTimeout(adTimer);
    }
  }, []);
  
  const handleCloseAd = () => {
    setShowAd(false);
  };
  
  if (!medication) {
    return (
      <View style={[styles.notFoundContainer, { backgroundColor: colors.background }]}>
        <Text style={[styles.notFoundText, { color: colors.gray[600] }]}>Farmaco non trovato</Text>
        <Pressable 
          style={[styles.backButton, { backgroundColor: colors.primary }]}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Torna Indietro</Text>
        </Pressable>
      </View>
    );
  }
  
  const isFav = isFavorite(medication.id);
  const interactions = checkInteractions(medication.id);
  const hasInteractions = interactions.length > 0;
  
  const handleFavoriteToggle = () => {
    if (isFav) {
      removeFromFavorites(medication.id);
    } else {
      addToFavorites(medication.id);
    }
  };
  
  const handleAddTherapy = () => {
    if (hasInteractions) {
      Alert.alert(
        "Attenzione: Possibili Interazioni",
        "Questo farmaco potrebbe interagire con altri farmaci che stai assumendo. Consulta il tuo medico prima di iniziare questa terapia.",
        [
          { text: "Annulla", style: "cancel" },
          { 
            text: "Continua comunque", 
            onPress: () => router.push({
              pathname: '/new-therapy',
              params: { medicationId: medication.id, medicationName: medication.name }
            })
          }
        ]
      );
    } else {
      router.push({
        pathname: '/new-therapy',
        params: { medicationId: medication.id, medicationName: medication.name }
      });
    }
  };
  
  const handleOpenPackageInsert = () => {
    if (medication.packageInsertUrl) {
      Linking.openURL(medication.packageInsertUrl);
    }
  };
  
  const handleBuyOnline = () => {
    if (medication.price?.url) {
      Linking.openURL(medication.price.url);
    } else {
      // URL di fallback per la farmacia online
      Linking.openURL('https://www.igeasanitaria.com/');
    }
  };

  const handleGoBack = () => {
    router.back();
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
  
  const getSubcategoryColor = () => {
    if (!medication.subcategory) return getCategoryColor();
    
    // Get a simple hash of the subcategory string
    const subcategoryHash = medication.subcategory.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    
    // Use modulo to get one of the 4 colors
    const colorIndex = subcategoryHash % 4;
    
    // Safely access the subcategory color with a fallback
    return colors.subcategoryColors && colors.subcategoryColors[colorIndex] 
      ? colors.subcategoryColors[colorIndex] 
      : getCategoryColor(); // Fallback to category color if subcategory color is not available
  };
  
  const getSubcategoryName = () => {
    if (!medication.subcategory) return null;
    
    // Trova la sottocategoria corrispondente
    const subcategories = require('@/constants/subcategories').subcategories;
    const categorySubcategories = subcategories[medication.category] || [];
    const subcategory = categorySubcategories.find(s => s.id === medication.subcategory);
    
    return subcategory ? subcategory.name : medication.subcategory.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };
  
  const getCharacteristicLabel = (characteristic: string) => {
    switch (characteristic) {
      case 'preservative-free': return 'Senza conservanti';
      case 'single-dose': return 'Monodose';
      case 'gel': return 'Gel';
      case 'ointment': return 'Pomata oftalmica';
      default: return characteristic;
    }
  };

  // Trova altre formulazioni dello stesso farmaco
  const otherFormulations = medications.filter(med => 
    med.id !== medication.id && 
    med.activeIngredient === medication.activeIngredient &&
    med.name.includes(medication.name.split(' ')[0])
  );
  
  return (
    <>
      <ScrollView 
        style={[styles.container, { backgroundColor: colors.background }]} 
        showsVerticalScrollIndicator={false}
      >
      <AdBanner 
        isVisible={showAd} 
        onClose={handleCloseAd} 
        adType={adType}
        adDuration={adType === 'interstitial' ? 5 : 0} // 5 secondi per interstitial, 0 per banner (sempre visibile)
        testMode={true} // Modalità test attiva
      />
      <View style={[styles.header, { backgroundColor: colors.card, borderBottomColor: colors.gray[200] }]}>
        <Pressable 
          style={[styles.backButtonHeader, { backgroundColor: colors.background + '80' }]}
          onPress={handleGoBack}
        >
          {Platform.OS === 'web' ? (
            <ArrowLeft size={20} color={colors.text} onClick={handleGoBack} />
          ) : (
            <ArrowLeft size={20} color={colors.text} />
          )}
        </Pressable>
        
        {medication.imageUrl ? (
          <Image 
            source={{ uri: medication.imageUrl }} 
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.imagePlaceholder, { backgroundColor: colors.gray[200] }]} />
        )}
        
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: colors.text }]}>{medication.name}</Text>
          
          <View style={styles.ingredientRow}>
            <Text style={[styles.activeIngredient, { color: colors.gray[600] }]}>
              {medication.activeIngredient}
              {medication.concentration && ` ${medication.concentration}`}
            </Text>
          </View>
          
          {medication.manufacturer && (
            <View style={styles.manufacturerRow}>
              <Building size={14} color={colors.gray[500]} style={styles.manufacturerIcon} />
              <Text style={[styles.manufacturerText, { color: colors.gray[500] }]}>
                {medication.manufacturer}
              </Text>
            </View>
          )}
          
          <View style={styles.categoryContainer}>
            <Text 
              style={[
                styles.category, 
                { 
                  backgroundColor: getCategoryColor() + '20', 
                  color: getCategoryColor() 
                }
              ]}
            >
              {medication.category.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </Text>
            
            {medication.subcategory && (
              <Text 
                style={[
                  styles.subcategory, 
                  { 
                    backgroundColor: getSubcategoryColor() + '20', 
                    color: getSubcategoryColor() 
                  }
                ]}
              >
                {getSubcategoryName()}
              </Text>
            )}
          </View>
          
          <View style={styles.prescriptionContainer}>
            <Text 
              style={[
                styles.prescriptionText, 
                { 
                  color: medication.requiresPrescription ? colors.error : colors.success 
                }
              ]}
            >
              {medication.requiresPrescription ? 'Richiede ricetta medica' : 'Senza ricetta'}
            </Text>
          </View>
          
          {medication.characteristics && medication.characteristics.length > 0 && (
            <View style={styles.characteristicsContainer}>
              {medication.characteristics.map((characteristic, index) => (
                <View 
                  key={index} 
                  style={[
                    styles.characteristicBadge, 
                    { backgroundColor: colors.primary + '10' }
                  ]}
                >
                  <Check size={12} color={colors.primary} style={styles.characteristicIcon} />
                  <Text style={[styles.characteristicText, { color: colors.primary }]}>
                    {getCharacteristicLabel(characteristic)}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
      
      {hasInteractions && (
        <View style={[styles.interactionsWarning, { backgroundColor: colors.warning + '20' }]}>
          <AlertTriangle size={20} color={colors.warning} style={styles.interactionsIcon} />
          <View style={styles.interactionsContent}>
            <Text style={[styles.interactionsTitle, { color: colors.warning }]}>
              Possibili interazioni farmacologiche
            </Text>
            {interactions.map((interaction, index) => (
              <Text key={index} style={[styles.interactionText, { color: colors.text }]}>
                • {interaction}
              </Text>
            ))}
            <Text style={[styles.interactionsNote, { color: colors.gray[600] }]}>
              Consulta il tuo medico prima di combinare questi farmaci.
            </Text>
          </View>
        </View>
      )}
      
      <View style={[styles.actionsContainer, { borderBottomColor: colors.gray[200] }]}>
        <Pressable 
          style={[
            styles.actionButton, 
            isFav ? 
              { backgroundColor: colors.error, borderColor: colors.error } : 
              { backgroundColor: colors.error + '10', borderColor: colors.error }
          ]}
          onPress={handleFavoriteToggle}
        >
          <Heart 
            size={20} 
            color={isFav ? 'white' : colors.error} 
            fill={isFav ? 'white' : 'none'} 
            style={styles.actionIcon} 
          />
          <Text 
            style={[
              styles.actionText, 
              { color: isFav ? 'white' : colors.error }
            ]}
          >
            {isFav ? 'Nei preferiti' : 'Aggiungi ai preferiti'}
          </Text>
        </Pressable>
        
        <Pressable 
          style={[
            styles.actionButton, 
            { backgroundColor: colors.primary + '10', borderColor: colors.primary }
          ]}
          onPress={handleAddTherapy}
        >
          <Clock size={20} color={colors.primary} style={styles.actionIcon} />
          <Text style={[styles.actionText, { color: colors.primary }]}>Aggiungi a Terapia</Text>
        </Pressable>
      </View>
      
      {otherFormulations.length > 0 && (
        <View style={[styles.infoCard, { backgroundColor: colors.card }]}>
          <View style={styles.sectionHeader}>
            <Package size={18} color={colors.primary} style={styles.sectionHeaderIcon} />
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Altre Formulazioni</Text>
          </View>
          <View style={styles.otherFormulationsContainer}>
            {otherFormulations.map((formulation, index) => (
              <Pressable
                key={index}
                style={[
                  styles.otherFormulationItem, 
                  { borderBottomColor: colors.gray[200] },
                  index === otherFormulations.length - 1 && styles.lastFormulationItem
                ]}
                onPress={() => router.push(`/medication/${formulation.id}`)}
              >
                <Text 
                  style={[styles.otherFormulationName, { color: colors.text }]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {formulation.name}
                </Text>
                <Text style={[styles.otherFormulationConcentration, { color: colors.gray[600] }]}>
                  {formulation.concentration || ''}
                </Text>
                <ExternalLink size={16} color={colors.primary} />
              </Pressable>
            ))}
          </View>
        </View>
      )}
      
      <View style={[styles.infoCard, { backgroundColor: colors.card }]}>
        <View style={styles.sectionHeader}>
          <Info size={18} color={colors.primary} style={styles.sectionHeaderIcon} />
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Descrizione</Text>
        </View>
        <Text style={[styles.sectionText, { color: colors.gray[700] }]}>{medication.description}</Text>
      </View>
      
      <View style={[styles.infoCard, { backgroundColor: colors.card }]}>
        <View style={styles.sectionHeader}>
          <Droplets size={18} color={colors.primary} style={styles.sectionHeaderIcon} />
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Dosaggio</Text>
        </View>
        <Text style={[styles.sectionText, { color: colors.gray[700] }]}>{medication.dosage}</Text>
      </View>
      
      <View style={[styles.infoCard, { backgroundColor: colors.card }]}>
        <View style={styles.sectionHeader}>
          <AlertCircle size={18} color={colors.warning} style={styles.sectionHeaderIcon} />
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Effetti Collaterali</Text>
        </View>
        <Text style={[styles.sectionText, { color: colors.gray[700] }]}>{medication.sideEffects}</Text>
      </View>
      
      <View style={[styles.infoCard, { backgroundColor: colors.card }]}>
        <View style={styles.sectionHeader}>
          <X size={18} color={colors.error} style={styles.sectionHeaderIcon} />
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Controindicazioni</Text>
        </View>
        <Text style={[styles.sectionText, { color: colors.gray[700] }]}>{medication.contraindications}</Text>
      </View>
      
      {medication.packageInsertUrl && (
        <Pressable 
          style={[styles.packageInsertButton, { backgroundColor: colors.primary + '10' }]}
          onPress={handleOpenPackageInsert}
        >
          <FileText size={20} color={colors.primary} style={styles.packageInsertIcon} />
          <Text style={[styles.packageInsertText, { color: colors.primary }]}>Visualizza Foglietto Illustrativo</Text>
        </Pressable>
      )}
      
      {medication.price && (
        <View style={[styles.priceCard, { backgroundColor: colors.card }]}>
          <View style={styles.priceHeader}>
            <Text style={[styles.priceTitle, { color: colors.text }]}>Prezzo Indicativo</Text>
            <Text style={[styles.priceAmount, { color: colors.primary }]}>
              {medication.price.amount.toFixed(2)} {medication.price.currency}
            </Text>
          </View>
          
          {medication.price.source && (
            <Text style={[styles.priceSource, { color: colors.gray[600] }]}>
              Fonte: {medication.price.source}
            </Text>
          )}
          
          <Pressable 
            style={[styles.buyButton, { backgroundColor: colors.success }]}
            onPress={handleBuyOnline}
          >
            <ShoppingCart size={20} color="white" style={styles.buyButtonIcon} />
            <Text style={styles.buyButtonText}>Acquista Online</Text>
          </Pressable>
        </View>
      )}
      
      <View style={[styles.disclaimer, { backgroundColor: colors.warning + '10' }]}>
        <AlertCircle size={16} color={colors.warning} style={styles.disclaimerIcon} />
        <Text style={[styles.disclaimerText, { color: colors.gray[700] }]}>
          Consultare sempre un professionista sanitario prima di iniziare o modificare qualsiasi terapia farmacologica.
        </Text>
      </View>
    </ScrollView>
    
    {/* Componente per mostrare le pubblicità */}
    <AdBanner 
      isVisible={showAd} 
      onClose={handleCloseAd} 
      adType={adType}
      adDuration={adType === 'interstitial' ? 5 : 0} // 5 secondi per interstitial, 0 per banner (sempre visibile)
      testMode={true} // Modalità test attiva
    />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 1,
    paddingBottom: 16,
    position: 'relative',
  },
  backButtonHeader: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    padding: 16,
  },
  title: {
    fontSize: 22, // Reduced from 24
    fontWeight: '700',
    marginBottom: 4,
  },
  ingredientRow: {
    marginBottom: 8,
  },
  activeIngredient: {
    fontSize: 15, // Reduced from 16
  },
  manufacturerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  manufacturerIcon: {
    marginRight: 4,
  },
  manufacturerText: {
    fontSize: 13, // Reduced from 14
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
    gap: 8,
  },
  category: {
    fontSize: 13, // Reduced from 14
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    marginBottom: 4,
  },
  subcategory: {
    fontSize: 13, // Reduced from 14
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    marginBottom: 4,
  },
  prescriptionContainer: {
    marginBottom: 8,
  },
  prescriptionText: {
    fontSize: 13, // Reduced from 14
    fontWeight: '500',
  },
  characteristicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  characteristicBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  characteristicIcon: {
    marginRight: 4,
  },
  characteristicText: {
    fontSize: 11, // Reduced from 12
    fontWeight: '500',
  },
  interactionsWarning: {
    margin: 16,
    marginBottom: 0,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
  },
  interactionsIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  interactionsContent: {
    flex: 1,
  },
  interactionsTitle: {
    fontSize: 15, // Reduced from 16
    fontWeight: '600',
    marginBottom: 8,
  },
  interactionText: {
    fontSize: 13, // Reduced from 14
    marginBottom: 4,
  },
  interactionsNote: {
    fontSize: 11, // Reduced from 12
    marginTop: 8,
    fontStyle: 'italic',
  },
  actionsContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
    borderBottomWidth: 1,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  actionIcon: {
    marginRight: 8,
  },
  actionText: {
    fontSize: 13, // Reduced from 14
    fontWeight: '600',
  },
  infoCard: {
    margin: 16,
    marginBottom: 0,
    padding: 16,
    borderRadius: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionHeaderIcon: {
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 17, // Reduced from 18
    fontWeight: '600',
  },
  sectionText: {
    fontSize: 13, // Reduced from 14
    lineHeight: 19, // Adjusted for new font size
  },
  otherFormulationsContainer: {
    marginTop: 4,
  },
  otherFormulationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  lastFormulationItem: {
    borderBottomWidth: 0,
  },
  otherFormulationName: {
    flex: 1,
    fontSize: 13, // Reduced from 14
    fontWeight: '500',
    marginRight: 8,
  },
  otherFormulationConcentration: {
    fontSize: 13, // Reduced from 14
    marginRight: 8,
  },
  packageInsertButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    margin: 16,
    marginBottom: 0,
    borderRadius: 8,
  },
  packageInsertIcon: {
    marginRight: 8,
  },
  packageInsertText: {
    fontSize: 13, // Reduced from 14
    fontWeight: '600',
  },
  priceCard: {
    margin: 16,
    marginBottom: 0,
    padding: 16,
    borderRadius: 12,
  },
  priceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  priceTitle: {
    fontSize: 15, // Reduced from 16
    fontWeight: '600',
  },
  priceAmount: {
    fontSize: 18, // Reduced from 20
    fontWeight: '700',
  },
  priceSource: {
    fontSize: 11, // Reduced from 12
    marginBottom: 16,
  },
  buyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
  },
  buyButtonIcon: {
    marginRight: 8,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 15, // Reduced from 16
    fontWeight: '600',
  },
  disclaimer: {
    flexDirection: 'row',
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  disclaimerIcon: {
    marginRight: 8,
    marginTop: 2,
  },
  disclaimerText: {
    flex: 1,
    fontSize: 11, // Reduced from 12
    lineHeight: 16, // Adjusted for new font size
  },
  notFoundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  notFoundText: {
    fontSize: 17, // Reduced from 18
    marginBottom: 16,
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  backButtonText: {
    color: 'white',
    fontSize: 15, // Reduced from 16
    fontWeight: '500',
  },
});