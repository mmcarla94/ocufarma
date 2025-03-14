import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, Pressable } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useMedicationStore } from '@/store/medication-store';
import { MedicationCard } from '@/components/MedicationCard';
import { SearchBar } from '@/components/SearchBar';
import { EmptyState } from '@/components/EmptyState';
import { ArrowLeft, Search } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function SearchScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  const { medications } = useMedicationStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMedications, setFilteredMedications] = useState([]);
  
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredMedications([]);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const results = medications.filter(med => 
      med.name.toLowerCase().includes(query) || 
      med.activeIngredient.toLowerCase().includes(query) ||
      med.category.toLowerCase().includes(query) ||
      (med.subcategory && med.subcategory.toLowerCase().includes(query))
    );
    
    setFilteredMedications(results);
  }, [searchQuery, medications]);
  
  const handleBack = () => {
    router.back();
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Pressable onPress={handleBack} style={styles.backButton}>
          <ArrowLeft size={24} color={colors.text} />
        </Pressable>
        
        <View style={styles.searchBarContainer}>
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Cerca farmaci, principi attivi..."
            autoFocus
          />
        </View>
      </View>
      
      {searchQuery.trim() === '' ? (
        <View style={styles.emptyContainer}>
          <EmptyState
            title="Cerca farmaci"
            message="Inserisci il nome di un farmaco, principio attivo o categoria"
            icon={<Search size={48} color={colors.gray[300]} />}
          />
        </View>
      ) : filteredMedications.length === 0 ? (
        <View style={styles.emptyContainer}>
          <EmptyState
            title="Nessun risultato"
            message={`Nessun farmaco trovato per "${searchQuery}"`}
            icon={<Search size={48} color={colors.gray[300]} />}
          />
        </View>
      ) : (
        <FlatList
          data={filteredMedications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MedicationCard medication={item} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  searchBarContainer: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});