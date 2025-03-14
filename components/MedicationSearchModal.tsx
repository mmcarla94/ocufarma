import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal, 
  FlatList, 
  Pressable, 
  TouchableOpacity 
} from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { SearchBar } from '@/components/SearchBar';
import { X } from 'lucide-react-native';
import { mockMedications } from '@/mocks/medications';

interface MedicationSearchModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (medicationId: string) => void;
  selectedMedicationId?: string;
}

export const MedicationSearchModal: React.FC<MedicationSearchModalProps> = ({
  visible,
  onClose,
  onSelect,
  selectedMedicationId
}) => {
  const colors = useThemeColors();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredMedications = mockMedications.filter(med => 
    med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    med.activeIngredient.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleSelect = (medicationId: string) => {
    onSelect(medicationId);
    onClose();
  };
  
  const getSelectedMedication = () => {
    if (!selectedMedicationId) return null;
    return mockMedications.find(med => med.id === selectedMedicationId);
  };
  
  const selectedMedication = getSelectedMedication();
  
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={[styles.modalOverlay, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
        <View style={[styles.modalContainer, { backgroundColor: colors.card }]}>
          <View style={styles.modalHeader}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>Seleziona Farmaco</Text>
            <TouchableOpacity onPress={onClose}>
              <X size={24} color={colors.text} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.searchContainer}>
            <SearchBar
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Cerca per nome o principio attivo..."
            />
          </View>
          
          <FlatList
            data={filteredMedications}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.medicationItem,
                  selectedMedicationId === item.id && { backgroundColor: colors.primaryLight + '20' }
                ]}
                onPress={() => handleSelect(item.id)}
              >
                <View>
                  <Text style={[styles.medicationName, { color: colors.text }]}>{item.name}</Text>
                  <Text style={[styles.medicationInfo, { color: colors.gray[600] }]}>
                    {item.activeIngredient} • {item.form}
                  </Text>
                </View>
              </Pressable>
            )}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={[styles.emptyText, { color: colors.gray[500] }]}>
                  Nessun farmaco trovato
                </Text>
              </View>
            }
          />
          
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, { backgroundColor: colors.primary }]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Chiudi</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    maxHeight: '80%',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E7',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  searchContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E7',
  },
  medicationItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E7',
  },
  medicationName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  medicationInfo: {
    fontSize: 14,
  },
  emptyContainer: {
    padding: 24,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E7',
  },
  button: {
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});