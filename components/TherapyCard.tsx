import React from 'react';
import { View, Text, StyleSheet, Pressable, Switch, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useThemeColors } from '@/hooks/useThemeColors';
import { Eye, Clock, Calendar, Edit2, Trash2 } from 'lucide-react-native';
import { useTherapyStore } from '@/store/therapy-store';
import { EyeSelection } from '@/types/medication';

export const TherapyCard = ({ therapy, showDate = true }) => {
  const router = useRouter();
  const colors = useThemeColors();
  const { toggleTherapyActive, deleteTherapy } = useTherapyStore();
  
  const handleToggleActive = () => {
    toggleTherapyActive(therapy.id, !therapy.isActive);
  };
  
  const handleEdit = () => {
    router.push(`/edit-therapy/${therapy.id}`);
  };
  
  const handleDelete = () => {
    Alert.alert(
      'Conferma eliminazione',
      'Sei sicuro di voler eliminare questa terapia?',
      [
        {
          text: 'Annulla',
          style: 'cancel',
        },
        {
          text: 'Elimina',
          onPress: () => {
            deleteTherapy(therapy.id);
          },
          style: 'destructive',
        },
      ]
    );
  };
  
  const handlePress = () => {
    router.push(`/therapy/${therapy.id}`);
  };
  
  // Format date to Italian format (DD/MM/YYYY)
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };
  
  // Get eye text
  const getEyeText = (eye: EyeSelection) => {
    switch (eye) {
      case 'left':
        return "Occhio sinistro";
      case 'right':
        return "Occhio destro";
      case 'both':
        return "Entrambi gli occhi";
      default:
        return "Occhi";
    }
  };
  
  return (
    <Pressable 
      style={[
        styles.container, 
        { 
          backgroundColor: colors.card,
          borderColor: therapy.isActive ? colors.primary + '30' : colors.gray[300]
        }
      ]}
      onPress={handlePress}
    >
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Eye size={18} color={colors.primary} style={styles.icon} />
          <Text style={[styles.title, { color: colors.text }]}>{therapy.medicationName}</Text>
        </View>
        
        <Switch
          value={therapy.isActive}
          onValueChange={handleToggleActive}
          trackColor={{ false: colors.gray[300], true: colors.primary + '70' }}
          thumbColor={therapy.isActive ? colors.primary : colors.gray[400]}
        />
      </View>
      
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Eye size={16} color={colors.gray[600]} style={styles.detailIcon} />
          <Text style={[styles.detailText, { color: colors.text }]}>{getEyeText(therapy.eye)}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Clock size={16} color={colors.gray[600]} style={styles.detailIcon} />
          <Text style={[styles.detailText, { color: colors.text }]}>
            {therapy.times && therapy.times.length > 0 
              ? therapy.times.join(', ') 
              : 'Nessun orario specificato'}
          </Text>
        </View>
        
        {showDate && (
          <View style={styles.detailRow}>
            <Calendar size={16} color={colors.gray[600]} style={styles.detailIcon} />
            <Text style={[styles.detailText, { color: colors.text }]}>
              {formatDate(therapy.startDate)}
              {therapy.endDate ? ` - ${formatDate(therapy.endDate)}` : ' - Continua'}
            </Text>
          </View>
        )}
        
        <Text style={[styles.frequencyText, { color: colors.primary }]}>
          {therapy.frequency}
        </Text>
      </View>
      
      <View style={styles.actionsContainer}>
        <Pressable 
          style={[styles.actionButton, { backgroundColor: colors.gray[200] }]}
          onPress={handleEdit}
        >
          <Edit2 size={16} color={colors.gray[700]} />
          <Text style={[styles.actionText, { color: colors.gray[700] }]}>Modifica</Text>
        </Pressable>
        
        <Pressable 
          style={[styles.actionButton, { backgroundColor: colors.danger + '15' }]}
          onPress={handleDelete}
        >
          <Trash2 size={16} color={colors.danger} />
          <Text style={[styles.actionText, { color: colors.danger }]}>Elimina</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  detailsContainer: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailIcon: {
    marginRight: 8,
  },
  detailText: {
    fontSize: 14,
  },
  frequencyText: {
    fontSize: 15,
    fontWeight: '500',
    marginTop: 4,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E7',
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
});