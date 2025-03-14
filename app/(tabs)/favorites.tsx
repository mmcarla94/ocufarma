import React from 'react';
import { Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { MedicationCard } from '@/components/MedicationCard';
import { EmptyState } from '@/components/EmptyState';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useMedicationStore } from '@/store/medication-store';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { Search } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function FavoritesScreen() {
  const colors = useThemeColors();
  const router = useRouter();
  const { getFavorites } = useMedicationStore();
  const favoriteMedications = getFavorites();
  
  const handleSearch = () => {
    router.push('/search');
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.headerTitle, { color: colors.text }]}>Preferiti</Text>
      
      {favoriteMedications.length > 0 ? (
        <FlatList
          data={favoriteMedications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MedicationCard medication={item} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <EmptyState
          title="Nessun farmaco preferito"
          message="Aggiungi farmaci ai preferiti per trovarli facilmente qui."
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
  listContent: {
    paddingBottom: 120, // Increased to account for floating button
  },
});