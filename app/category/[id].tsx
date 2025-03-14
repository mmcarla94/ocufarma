import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { useMedicationStore } from '@/store/medication-store';
import { MedicationCard } from '@/components/MedicationCard';
import { EmptyState } from '@/components/EmptyState';
import { categories } from '@/mocks/categories';
import { Eye, Shield, Flame, Flower, CircleDot, Droplets, Pill, AlertCircle, Syringe, Spray, Microscope, Search } from 'lucide-react-native';
import { SearchBar } from '@/components/SearchBar';
import { subcategories } from '@/constants/subcategories';
import { useThemeColors } from '@/hooks/useThemeColors';
import { MedicationCharacteristic } from '@/types/medication';
import { FloatingActionButton } from '@/components/FloatingActionButton';

// Categories that shouldn't show characteristic filters
const CATEGORIES_WITHOUT_CHARACTERISTICS = [
  'supplements',
  'diagnostic',
  'anesthetic',
  'intravitreal',
  'mydriatic-cycloplegic'
];

export default function CategoryScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const colors = useThemeColors();
  const { filterByCategory, medications } = useMedicationStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedCharacteristics, setSelectedCharacteristics] = useState<MedicationCharacteristic[]>([]);
  
  const category = categories.find(cat => cat.id === id);
  const categoryMedications = filterByCategory(id as string);
  
  // Available characteristics for filtering
  const characteristics = [
    { id: 'preservative-free', name: 'Senza conservanti' },
    { id: 'single-dose', name: 'Monodose' },
    { id: 'gel', name: 'Gel' },
    { id: 'ointment', name: 'Pomata oftalmica' }
  ];
  
  // Check if we should show characteristic filters
  const shouldShowCharacteristics = !CATEGORIES_WITHOUT_CHARACTERISTICS.includes(id as string);
  
  const toggleCharacteristic = (characteristic: MedicationCharacteristic) => {
    if (selectedCharacteristics.includes(characteristic)) {
      setSelectedCharacteristics(selectedCharacteristics.filter(c => c !== characteristic));
    } else {
      setSelectedCharacteristics([...selectedCharacteristics, characteristic]);
    }
  };
  
  // Filter medications based on search, subcategory, and characteristics
  const filteredMedications = categoryMedications.filter(med => {
    const matchesSearch = searchQuery.trim() === '' || 
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      med.activeIngredient.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSubcategory = selectedSubcategory === null || med.subcategory === selectedSubcategory;
    
    const matchesCharacteristics = selectedCharacteristics.length === 0 || 
      selectedCharacteristics.every(c => med.characteristics?.includes(c));
    
    return matchesSearch && matchesSubcategory && matchesCharacteristics;
  });
  
  const getCategoryIcon = () => {
    if (!category) return <Pill size={48} color={colors.gray[300]} />;
    
    switch (category.icon) {
      case Eye:
        return <Eye size={48} color={category.color} />;
      case Shield:
        return <Shield size={48} color={category.color} />;
      case Flame:
        return <Flame size={48} color={category.color} />;
      case Flower:
        return <Flower size={48} color={category.color} />;
      case CircleDot:
        return <CircleDot size={48} color={category.color} />;
      case Droplets:
        return <Droplets size={48} color={category.color} />;
      case Pill:
        return <Pill size={48} color={category.color} />;
      case Spray:
        return <Spray size={48} color={category.color} />;
      case AlertCircle:
        return <AlertCircle size={48} color={category.color} />;
      case Syringe:
        return <Syringe size={48} color={category.color} />;
      case Microscope:
        return <Microscope size={48} color={category.color} />;
      default:
        return <Pill size={48} color={category.color} />;
    }
  };
  
  const categorySubcategories = subcategories[id as any] || [];

  const handleSearchPress = () => {
    router.push({
      pathname: '/search',
      params: { category: id }
    });
  };
  
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen 
        options={{ 
          title: category?.name || 'Categoria',
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleStyle: {
            color: colors.text,
            fontSize: 26, // Increased to match other section titles
            fontWeight: '700',
          },
          headerTintColor: colors.primary,
        }} 
      />
      
      <View style={styles.searchContainer}>
        <SearchBar 
          value={searchQuery} 
          onChangeText={setSearchQuery} 
          placeholder={`Cerca in ${category?.name || 'questa categoria'}...`}
        />
      </View>
      
      <View style={styles.filtersContainer}>
        {categorySubcategories.length > 0 && (
          <View style={styles.filterSection}>
            <Text style={[styles.filterTitle, { color: colors.text }]}>Sottocategorie</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.subcategoriesScrollContent}
            >
              <Pressable
                style={[
                  styles.subcategoryChip,
                  { backgroundColor: selectedSubcategory === null ? colors.primary : colors.gray[100] },
                ]}
                onPress={() => setSelectedSubcategory(null)}
              >
                <Text 
                  style={[
                    styles.subcategoryText,
                    { color: selectedSubcategory === null ? 'white' : colors.gray[700] }
                  ]}
                >
                  Tutti
                </Text>
              </Pressable>
              
              {categorySubcategories.map((subcategory) => (
                <Pressable
                  key={subcategory.id}
                  style={[
                    styles.subcategoryChip,
                    { 
                      backgroundColor: selectedSubcategory === subcategory.id ? 
                        colors.primary : colors.gray[100] 
                    }
                  ]}
                  onPress={() => setSelectedSubcategory(
                    selectedSubcategory === subcategory.id ? null : subcategory.id
                  )}
                >
                  <Text 
                    style={[
                      styles.subcategoryText,
                      { 
                        color: selectedSubcategory === subcategory.id ? 
                          'white' : colors.gray[700] 
                      }
                    ]}
                  >
                    {subcategory.name}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        )}
        
        {shouldShowCharacteristics && (
          <View style={styles.filterSection}>
            <Text style={[styles.filterTitle, { color: colors.text }]}>Caratteristiche</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.characteristicsScrollContent}
            >
              {characteristics.map((characteristic) => (
                <Pressable
                  key={characteristic.id}
                  style={[
                    styles.characteristicChip,
                    { 
                      backgroundColor: selectedCharacteristics.includes(characteristic.id as MedicationCharacteristic) ? 
                        colors.primary : colors.gray[100] 
                    }
                  ]}
                  onPress={() => toggleCharacteristic(characteristic.id as MedicationCharacteristic)}
                >
                  <Text 
                    style={[
                      styles.characteristicText,
                      { 
                        color: selectedCharacteristics.includes(characteristic.id as MedicationCharacteristic) ? 
                          'white' : colors.gray[700] 
                      }
                    ]}
                  >
                    {characteristic.name}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
      
      {filteredMedications.length === 0 ? (
        <EmptyState
          title="Nessun farmaco trovato"
          message={searchQuery.trim() !== '' || selectedSubcategory !== null || selectedCharacteristics.length > 0
            ? "Nessun risultato per i filtri selezionati"
            : "Non ci sono farmaci in questa categoria"}
          icon={getCategoryIcon()}
        />
      ) : (
        <FlatList
          data={filteredMedications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MedicationCard medication={item} />}
          contentContainerStyle={[styles.listContent, { paddingBottom: 120 }]} // Increased padding for floating button
        />
      )}
      
      {/* Add floating search button */}
      <FloatingActionButton 
        onPress={handleSearchPress}
        icon={Search}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
    paddingBottom: 8,
  },
  filtersContainer: {
    paddingBottom: 8,
  },
  filterSection: {
    marginBottom: 12,
  },
  filterTitle: {
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 16,
    marginBottom: 8,
  },
  subcategoriesScrollContent: {
    paddingHorizontal: 16,
  },
  subcategoryChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  subcategoryText: {
    fontSize: 13,
  },
  characteristicsScrollContent: {
    paddingHorizontal: 16,
  },
  characteristicChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  characteristicText: {
    fontSize: 13,
  },
  listContent: {
    padding: 16,
  },
});