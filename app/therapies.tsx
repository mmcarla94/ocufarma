import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Pressable } from 'react-native';
import { useTherapyStore } from '@/store/therapy-store';
import { TherapyCard } from '@/components/TherapyCard';
import { EmptyState } from '@/components/EmptyState';
import { Droplets, Plus } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useThemeColors } from '@/hooks/useThemeColors';

export default function TherapiesScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  const { therapies } = useTherapyStore();
  
  const handleAddTherapy = () => {
    router.push('/new-therapy');
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Terapie</Text>
        <Text style={[styles.subtitle, { color: colors.gray[600] }]}>Gestisci i tuoi programmi di farmaci</Text>
      </View>
      
      {therapies.length === 0 ? (
        <View style={styles.emptyContainer}>
          <EmptyState
            title="Nessuna terapia"
            message="Aggiungi i tuoi programmi di farmaci per ricevere promemoria"
            icon={<Droplets size={48} color={colors.gray[300]} />}
          />
          
          <Pressable 
            style={[styles.addButton, { backgroundColor: colors.primary }]}
            onPress={handleAddTherapy}
          >
            <Plus size={20} color="white" style={styles.addIcon} />
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
  },
  header: {
    padding: 16,
    paddingTop: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
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
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  listContent: {
    padding: 16,
    paddingBottom: 80,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 24,
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