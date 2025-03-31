import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { Search, Plus, Barcode, LogIn, UserPlus, X } from 'lucide-react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { categories } from '@/mocks/categories';
import { CategoryCard } from '@/components/CategoryCard';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { SearchBar } from '@/components/SearchBar';
import { useMedicationStore } from '@/store/medication-store';
import { MedicationCard } from '@/components/MedicationCard';
import { EmptyState } from '@/components/EmptyState';

export default function HomeScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  const [searchQuery, setSearchQuery] = useState('');
  const [layoutType, setLayoutType] = useState<'grid' | 'list'>('list'); // 'grid' for 2-column, 'list' for full width
  const { searchMedications } = useMedicationStore();
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  // Effetto per aggiornare i risultati della ricerca quando l'utente digita
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    
    setIsSearching(true);
    const results = searchMedications(searchQuery);
    setSearchResults(results);
  }, [searchQuery]);
  
  const handleSearch = () => {
    // Navigate to search screen without query to ensure keyboard appears
    router.push('/search');
  };
  
  const handleAddTherapy = () => {
    router.push('/new-therapy');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  const handleRegister = () => {
    router.push('/register');
  };

  const handleBarcodeScan = () => {
    router.push('/barcode-scan');
  };

  const toggleLayout = () => {
    setLayoutType(layoutType === 'grid' ? 'list' : 'grid');
  };
  
  const handleClearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <View>
          <Image
            source={require('@/assets/images/logo-home.png')}
            style={{
              width: 120,
              height: 120,
              resizeMode: 'contain'
            }}
          />
          <Text style={[styles.subtitle, { color: colors.gray[600] }]}>Farmaci Oftalmologici</Text>
        </View>
        <View style={styles.headerButtons}>
          <Pressable 
            style={[styles.headerButton, { backgroundColor: colors.primaryLight + '20' }]} 
            onPress={handleLogin}
          >
            <LogIn size={20} color={colors.primary} />
          </Pressable>
          <Pressable 
            style={[styles.headerButton, { backgroundColor: colors.primaryLight + '20' }]} 
            onPress={handleRegister}
          >
            <UserPlus size={20} color={colors.primary} />
          </Pressable>
          <Pressable 
            style={[styles.headerButton, { backgroundColor: colors.primaryLight + '20' }]} 
            onPress={handleBarcodeScan}
          >
            <Barcode size={20} color={colors.primary} />
          </Pressable>
        </View>
      </View>
      
      <View style={styles.searchContainer}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Cerca farmaci..."
          style={styles.searchBar}
          autoFocus={false}
        />
      </View>
      
      {isSearching ? (
        <View style={styles.searchResultsContainer}>
          <View style={styles.searchResultsHeader}>
            <Text style={[styles.searchResultsTitle, { color: colors.text }]}>
              Risultati per "{searchQuery}"
            </Text>
            <Pressable onPress={handleClearSearch} style={styles.clearButton}>
              <X size={20} color={colors.gray[500]} />
            </Pressable>
          </View>
          
          {searchResults.length === 0 ? (
            <View style={styles.emptyContainer}>
              <EmptyState
                title="Nessun risultato"
                message={`Nessun farmaco trovato per "${searchQuery}"`}
                icon={<Search size={48} color={colors.gray[300]} />}
              />
            </View>
          ) : (
            <FlatList
              data={searchResults}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <MedicationCard medication={item} />}
              contentContainerStyle={styles.searchResultsList}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      ) : (
        <ScrollView 
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Categorie</Text>
            <Pressable onPress={toggleLayout}>
              <Text style={[styles.layoutToggle, { color: colors.primary }]}>
                {layoutType === 'grid' ? 'Vista lista' : 'Vista griglia'}
              </Text>
            </Pressable>
          </View>
          
          <View style={[
            styles.categoriesContainer,
            layoutType === 'grid' ? styles.gridContainer : null
          ]}>
            {categories.map((category) => (
              <CategoryCard 
                key={category.id} 
                category={category} 
                fullWidth={layoutType === 'list'}
              />
            ))}
          </View>
          
          <Pressable 
            style={[styles.addTherapyButton, { backgroundColor: colors.primary }]}
            onPress={handleAddTherapy}
          >
            <Plus size={20} color="white" style={styles.addIcon} />
            <Text style={styles.addTherapyText}>Aggiungi Nuova Terapia</Text>
          </Pressable>
        </ScrollView>
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
  },
  header: {
    padding: 16,
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28, // Reverted from 36px back to 28px
    fontWeight: '700', // Reverted from 800 back to 700
    marginLeft: 12,
  },
  subtitle: {
    fontSize: 16,
    marginLeft: 12,
  },
  headerButtons: {
    flexDirection: 'row',
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchBar: {
    width: '100%',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingTop: 0,
    paddingBottom: 120, // Increased padding for the tab bar and floating button
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  layoutToggle: {
    fontSize: 14,
    fontWeight: '500',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridContainer: {
    paddingHorizontal: 2, // Reduced padding to give more space for the cards
  },
  addTherapyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
    marginBottom: 16,
  },
  addIcon: {
    marginRight: 8,
  },
  addTherapyText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  searchResultsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  searchResultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchResultsTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  clearButton: {
    padding: 8,
  },
  searchResultsList: {
    paddingBottom: 120, // Extra padding for the floating button
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});