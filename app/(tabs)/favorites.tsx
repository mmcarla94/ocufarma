import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, View, FlatList, ScrollView, Pressable, Dimensions } from 'react-native';
import { MedicationCard } from '@/components/MedicationCard';
import { EmptyState } from '@/components/EmptyState';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useMedicationStore } from '@/store/medication-store';
import { useTherapyStore } from '@/store/therapy-store';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { Search, Heart, Filter, PieChart, Clock, AlertCircle, Pill, Eye } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function FavoritesScreen() {
  const colors = useThemeColors();
  const router = useRouter();
  const { getFavorites, stats: medicationStats } = useMedicationStore();
  const { stats: therapyStats } = useTherapyStore();
  const favoriteMedications = getFavorites();
  const screenWidth = Dimensions.get('window').width - 40; // Larghezza dello schermo meno padding
  
  // Stati per filtrare i preferiti
  const [filterActive, setFilterActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Statistiche sui preferiti
  const [categoryStats, setCategoryStats] = useState([]);
  
  // Calcola le statistiche per categoria
  useEffect(() => {
    if (favoriteMedications.length === 0) return;
    
    const categories = {};
    
    favoriteMedications.forEach(med => {
      if (categories[med.category]) {
        categories[med.category].count++;
      } else {
        categories[med.category] = {
          name: formatCategory(med.category),
          count: 1,
          color: getCategoryColor(med.category, colors)
        };
      }
    });
    
    const statsArray = Object.values(categories).sort((a, b) => b.count - a.count);
    setCategoryStats(statsArray);
  }, [favoriteMedications]);
  
  const handleSearch = () => {
    router.push('/search');
  };
  
  const toggleFilter = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setFilterActive(false);
    } else {
      setSelectedCategory(category);
      setFilterActive(true);
    }
  };
  
  // Funzione per formattare il nome della categoria
  const formatCategory = (category) => {
    // Special cases for categories that should be displayed without spaces
    if (category === 'anti-glaucoma') return 'Antiglaucoma';
    if (category === 'anti-infective') return 'Antinfettivi';
    if (category === 'anti-allergic') return 'Antiallergici';
    if (category === 'anti-inflammatory') return 'Antinfiammatori';
    if (category === 'artificial-tears') return 'Lacrime artificiali';
    if (category === 'mydriatic-cycloplegic') return 'Midriatici';
    
    // For other categories, capitalize each word
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };
  
  // Funzione per ottenere il colore della categoria
  const getCategoryColor = (category, colors) => {
    switch (category) {
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
  
  // Filtra i farmaci preferiti in base alla categoria selezionata
  const filteredMedications = filterActive && selectedCategory
    ? favoriteMedications.filter(med => med.category === selectedCategory)
    : favoriteMedications;
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.headerTitle, { color: colors.text }]}>Preferiti</Text>
      
      {favoriteMedications.length > 0 ? (
        <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
          {/* Sezione Statistiche */}
          <View style={[styles.statsCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Le tue statistiche
            </Text>
            
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <View style={[styles.statIconContainer, { backgroundColor: colors.primary + '15' }]}>
                  <Heart size={20} color={colors.primary} />
                </View>
                <Text style={[styles.statValue, { color: colors.text }]}>{favoriteMedications.length}</Text>
                <Text style={[styles.statLabel, { color: colors.gray[600] }]}>Farmaci salvati</Text>
              </View>
              
              <View style={styles.statItem}>
                <View style={[styles.statIconContainer, { backgroundColor: colors.success + '15' }]}>
                  <Pill size={20} color={colors.success} />
                </View>
                <Text style={[styles.statValue, { color: colors.text }]}>{medicationStats.searchedCount}</Text>
                <Text style={[styles.statLabel, { color: colors.gray[600] }]}>Farmaci cercati</Text>
              </View>
              
              <View style={styles.statItem}>
                <View style={[styles.statIconContainer, { backgroundColor: colors.secondary + '15' }]}>
                  <Eye size={20} color={colors.secondary} />
                </View>
                <Text style={[styles.statValue, { color: colors.text }]}>{therapyStats.addedCount}</Text>
                <Text style={[styles.statLabel, { color: colors.gray[600] }]}>Terapie aggiunte</Text>
              </View>
            </View>
          </View>
          
          {/* Sezione Categorie */}
          {categoryStats.length > 0 && (
            <View style={[styles.categoriesCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.categoriesHeader}>
                <Text style={[styles.sectionTitle, { color: colors.text }]}>
                  Categorie salvate
                </Text>
                {filterActive && (
                  <Pressable 
                    style={[styles.resetFilterButton, { backgroundColor: colors.primary + '15' }]}
                    onPress={() => {
                      setSelectedCategory(null);
                      setFilterActive(false);
                    }}
                  >
                    <Text style={[styles.resetFilterText, { color: colors.primary }]}>Resetta filtro</Text>
                  </Pressable>
                )}
              </View>
              
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={styles.categoryChipsContainer}
              >
                {categoryStats.map((category, index) => (
                  <Pressable 
                    key={index}
                    style={[styles.categoryChip, { 
                      backgroundColor: selectedCategory === category.name.toLowerCase().replace(' ', '-') 
                        ? category.color 
                        : category.color + '20',
                      borderColor: category.color + '40'
                    }]}
                    onPress={() => toggleFilter(category.name.toLowerCase().replace(' ', '-'))}
                  >
                    <Text style={[styles.categoryChipText, { 
                      color: selectedCategory === category.name.toLowerCase().replace(' ', '-') 
                        ? 'white' 
                        : category.color 
                    }]}>
                      {category.name} ({category.count})
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
              
              {/* Visualizzazione a barre delle categorie */}
              <View style={styles.categoryBarsContainer}>
                {categoryStats.map((category, index) => (
                  <Pressable 
                    key={index} 
                    style={styles.categoryBarItem}
                    onPress={() => toggleFilter(category.name.toLowerCase().replace(' ', '-'))}
                  >
                    <View style={styles.categoryBarHeader}>
                      <Text style={[styles.categoryBarName, { color: colors.text }]}>{category.name}</Text>
                      <Text style={[styles.categoryBarCount, { color: colors.gray[600] }]}>{category.count}</Text>
                    </View>
                    <View style={[styles.categoryBarBackground, { backgroundColor: colors.gray[200] }]}>
                      <View 
                        style={[styles.categoryBarFill, { 
                          backgroundColor: category.color,
                          width: `${(category.count / favoriteMedications.length) * 100}%`
                        }]}
                      />
                    </View>
                  </Pressable>
                ))}
              </View>
            </View>
          )}
          
          {/* Lista dei farmaci preferiti */}
          <View style={[styles.medicationsCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.medicationsHeader}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                {filterActive ? `Farmaci ${formatCategory(selectedCategory)}` : 'Tutti i farmaci preferiti'}
              </Text>
              <Text style={[styles.medicationCount, { color: colors.gray[600] }]}>
                {filteredMedications.length} {filteredMedications.length === 1 ? 'farmaco' : 'farmaci'}
              </Text>
            </View>
            
            {filteredMedications.map(medication => (
              <MedicationCard key={medication.id} medication={medication} />
            ))}
          </View>
        </ScrollView>
      ) : (
        <EmptyState
          icon="Heart"
          title="Nessun farmaco preferito"
          description="Aggiungi farmaci ai preferiti per trovarli facilmente qui e visualizzare statistiche utili."
          actionLabel="Cerca farmaci"
          onAction={handleSearch}
        />
      )}
      
      <FloatingActionButton 
        onPress={handleSearch}
        icon={Search}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 16,
    marginLeft: 12,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 120, // Increased to account for floating button
  },
  statsCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  categoriesCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
  },
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  resetFilterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  resetFilterText: {
    fontSize: 12,
    fontWeight: '500',
  },
  categoryChipsContainer: {
    paddingBottom: 12,
  },
  categoryChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
  },
  categoryChipText: {
    fontSize: 12,
    fontWeight: '500',
  },
  categoryBarsContainer: {
    marginTop: 8,
  },
  categoryBarItem: {
    marginBottom: 12,
  },
  categoryBarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  categoryBarName: {
    fontSize: 14,
    fontWeight: '500',
  },
  categoryBarCount: {
    fontSize: 14,
  },
  categoryBarBackground: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  categoryBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  medicationsCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
  },
  medicationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  medicationCount: {
    fontSize: 14,
  },
});