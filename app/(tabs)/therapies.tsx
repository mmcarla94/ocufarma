import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Pressable } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useTherapyStore } from '@/store/therapy-store';
import { TherapyCard } from '@/components/TherapyCard';
import { EmptyState } from '@/components/EmptyState';
import { Plus, PlusCircle } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function TherapiesScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  const { therapies } = useTherapyStore();
  
  const handleAddTherapy = () => {
    router.push('/new-therapy');
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Terapie</Text>
      <Text style={[styles.subtitle, { color: colors.gray[600] }]}>Gestisci i tuoi programmi di farmaci</Text>
      
      {therapies.length === 0 ? (
        <View style={styles.emptyContainer}>
          <EmptyState
            title="Nessuna terapia"
            message="Aggiungi i tuoi programmi di farmaci per ricevere promemoria"
          />
          
          <Pressable 
            style={[styles.addButton, { backgroundColor: colors.primary }]}
            onPress={handleAddTherapy}
          >
            <PlusCircle size={20} color="white" style={styles.addIcon} />
            <Text style={styles.addButtonText}>Aggiungi Nuova Terapia</Text>
          </Pressable>
        </View>
      ) : (
        <>
          <FlatList
            data={therapies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TherapyCard therapy={item} />}
            contentContainerStyle={styles.listContent}
          />
          
          <View style={styles.fabContainer}>
            <Pressable 
              style={({ pressed }) => [
                styles.fab,
                { backgroundColor: colors.primary },
                pressed && styles.fabPressed
              ]}
              onPress={handleAddTherapy}
            >
              <Plus size={24} color="white" />
            </Pressable>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 6,
    marginLeft: 12,
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 16,
    marginLeft: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
  },
  addIcon: {
    marginRight: 8,
  },
  addButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },
  listContent: {
    paddingBottom: 80,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 80,
    right: 24,
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fabPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.96 }],
  },
});