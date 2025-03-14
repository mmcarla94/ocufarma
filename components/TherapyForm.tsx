import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, Alert, Modal, Switch, TouchableOpacity, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useThemeColors } from '@/hooks/useThemeColors';
import { ChevronDown, Search, AlertTriangle, Clock, Bell, Eye, Plus, Trash2, Barcode } from 'lucide-react-native';
import { mockMedications } from '@/mocks/medications';
import { MedicationSearchModal } from '@/components/MedicationSearchModal';
import { useTherapyStore } from '@/store/therapy-store';
import { EyeSelection } from '@/types/medication';
import DateTimePicker from '@react-native-community/datetimepicker';

// Import Calendar icon separately to handle web platform issues
import { Calendar } from 'lucide-react-native';

export const TherapyForm = ({ initialValues, onSubmit: parentOnSubmit }) => {
  const router = useRouter();
  const colors = useThemeColors();
  const { addTherapy, updateTherapy, checkInteractions } = useTherapyStore();
  
  const [medication, setMedication] = useState(initialValues?.medicationId || '');
  const [eye, setEye] = useState<EyeSelection>(initialValues?.eye || 'both');
  const [frequency, setFrequency] = useState(initialValues?.frequency || '');
  const [startDate, setStartDate] = useState(initialValues?.startDate || new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(initialValues?.endDate || '');
  const [notes, setNotes] = useState(initialValues?.notes || '');
  const [times, setTimes] = useState<string[]>(initialValues?.times || ['09:00']);
  const [enableNotifications, setEnableNotifications] = useState(
    initialValues?.enableNotifications !== undefined ? initialValues.enableNotifications : true
  );
  
  const [showFrequencyPicker, setShowFrequencyPicker] = useState(false);
  const [showMedicationSearch, setShowMedicationSearch] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [currentEditingTime, setCurrentEditingTime] = useState('');
  const [currentEditingIndex, setCurrentEditingIndex] = useState(-1);
  
  const [interactions, setInteractions] = useState<string[]>([]);
  
  // Date picker states
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [startDateObj, setStartDateObj] = useState(new Date());
  const [endDateObj, setEndDateObj] = useState(new Date());
  
  // Initialize date objects from string dates
  useEffect(() => {
    if (startDate) {
      const [year, month, day] = startDate.split('-').map(Number);
      setStartDateObj(new Date(year, month - 1, day));
    }
    
    if (endDate) {
      const [year, month, day] = endDate.split('-').map(Number);
      setEndDateObj(new Date(year, month - 1, day));
    } else {
      // Set default end date to 7 days from start date
      const defaultEndDate = new Date(startDateObj);
      defaultEndDate.setDate(defaultEndDate.getDate() + 7);
      setEndDateObj(defaultEndDate);
    }
  }, []);
  
  // Check for interactions when medication changes
  useEffect(() => {
    if (medication) {
      const medicationInteractions = checkInteractions(medication);
      setInteractions(medicationInteractions);
    } else {
      setInteractions([]);
    }
  }, [medication, checkInteractions]);
  
  const frequencyOptions = [
    { label: 'Una volta al giorno', value: 'Una volta al giorno' },
    { label: 'Due volte al giorno', value: 'Due volte al giorno' },
    { label: 'Tre volte al giorno', value: 'Tre volte al giorno' },
    { label: 'Quattro volte al giorno', value: 'Quattro volte al giorno' },
    { label: 'Ogni 2 ore', value: 'Ogni 2 ore' },
    { label: 'Ogni 4 ore', value: 'Ogni 4 ore' },
    { label: 'Ogni 6 ore', value: 'Ogni 6 ore' },
    { label: 'Al bisogno', value: 'Al bisogno' },
    { label: 'Prima di dormire', value: 'Prima di dormire' },
  ];
  
  // Format date to Italian format (DD/MM/YYYY)
  const formatDateToItalian = (dateString) => {
    if (!dateString) return '';
    
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };
  
  // Format date from Date object to YYYY-MM-DD string
  const formatDateToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  const handleStartDateChange = (event, selectedDate) => {
    setShowStartDatePicker(false);
    if (selectedDate) {
      setStartDateObj(selectedDate);
      setStartDate(formatDateToYYYYMMDD(selectedDate));
    }
  };
  
  const handleEndDateChange = (event, selectedDate) => {
    setShowEndDatePicker(false);
    if (selectedDate) {
      setEndDateObj(selectedDate);
      setEndDate(formatDateToYYYYMMDD(selectedDate));
    }
  };
  
  const handleEndDateInput = (text) => {
    // Allow manual input of date in DD/MM/YYYY format
    if (text.length <= 10) {
      // Store the raw input temporarily
      const rawInput = text;
      
      // Try to parse the date if it's in the correct format
      if (/^\d{2}\/\d{2}\/\d{4}$/.test(text)) {
        const [day, month, year] = text.split('/').map(Number);
        const dateObj = new Date(year, month - 1, day);
        
        if (!isNaN(dateObj.getTime())) {
          setEndDateObj(dateObj);
          setEndDate(formatDateToYYYYMMDD(dateObj));
        }
      }
    }
  };
  
  const handleSubmit = async () => {
    if (!medication || !eye || !frequency || times.length === 0) {
      Alert.alert('Errore', 'Per favore compila tutti i campi obbligatori');
      return;
    }
    
    const therapyData = {
      medicationId: medication,
      medicationName: getSelectedMedicationName(),
      eye,
      frequency,
      startDate,
      endDate,
      notes,
      times,
      enableNotifications,
    };
    
    if (interactions.length > 0) {
      Alert.alert(
        "Attenzione: Possibili Interazioni",
        "Questo farmaco potrebbe interagire con altri farmaci che stai assumendo. Consulta il tuo medico prima di iniziare questa terapia.",
        [
          { text: "Annulla", style: "cancel" },
          { 
            text: "Continua comunque", 
            onPress: async () => {
              try {
                if (initialValues?.id) {
                  // Update existing therapy
                  await updateTherapy(initialValues.id, therapyData);
                } else {
                  // Add new therapy
                  await addTherapy(therapyData);
                }
                
                // Call parent onSubmit if provided
                if (typeof parentOnSubmit === 'function') {
                  parentOnSubmit(therapyData);
                }
                
                // Navigate back to the therapies tab
                router.push('/(tabs)/therapies');
              } catch (error) {
                console.error('Error saving therapy:', error);
                Alert.alert('Errore', 'Si è verificato un errore durante il salvataggio della terapia');
              }
            }
          }
        ]
      );
    } else {
      try {
        if (initialValues?.id) {
          // Update existing therapy
          await updateTherapy(initialValues.id, therapyData);
        } else {
          // Add new therapy
          await addTherapy(therapyData);
        }
        
        // Call parent onSubmit if provided
        if (typeof parentOnSubmit === 'function') {
          parentOnSubmit(therapyData);
        }
        
        // Navigate back to the therapies tab
        router.push('/(tabs)/therapies');
      } catch (error) {
        console.error('Error saving therapy:', error);
        Alert.alert('Errore', 'Si è verificato un errore durante il salvataggio della terapia');
      }
    }
  };
  
  const handleCancel = () => {
    router.push('/(tabs)/therapies');
  };
  
  const getSelectedMedicationName = () => {
    if (!medication) return '';
    const selectedMed = mockMedications.find(med => med.id === medication);
    return selectedMed ? selectedMed.name : '';
  };
  
  const handleAddTime = () => {
    setCurrentEditingTime('');
    setCurrentEditingIndex(-1);
    setShowTimePicker(true);
  };
  
  const handleEditTime = (time: string, index: number) => {
    setCurrentEditingTime(time);
    setCurrentEditingIndex(index);
    setShowTimePicker(true);
  };
  
  const handleSaveTime = () => {
    if (!currentEditingTime) {
      Alert.alert('Errore', 'Per favore inserisci un orario valido');
      return;
    }
    
    if (currentEditingIndex >= 0) {
      // Edit existing time
      const newTimes = [...times];
      newTimes[currentEditingIndex] = currentEditingTime;
      setTimes(newTimes);
    } else {
      // Add new time
      setTimes([...times, currentEditingTime]);
    }
    
    setShowTimePicker(false);
  };
  
  const handleRemoveTime = (index: number) => {
    const newTimes = [...times];
    newTimes.splice(index, 1);
    setTimes(newTimes);
  };

  const handleBarcodeScan = () => {
    router.push('/barcode-scan');
  };

  // Render calendar icon based on platform - fixed to avoid SVG issues on web
  const renderCalendarIcon = () => {
    return (
      <View style={{ pointerEvents: 'none' }}>
        <Calendar size={20} color={colors.gray[500]} />
      </View>
    );
  };
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.formGroup}>
        <View style={styles.medicationSearchContainer}>
          <Pressable 
            style={[styles.inputContainer, { backgroundColor: colors.card, borderColor: colors.border, flex: 1 }]}
            onPress={() => setShowMedicationSearch(true)}
          >
            <Text style={[styles.inputText, { color: medication ? colors.text : colors.gray[500] }]}>
              {getSelectedMedicationName() || 'Cerca e seleziona un farmaco'}
            </Text>
            <Search size={20} color={colors.gray[500]} />
          </Pressable>
          
          <TouchableOpacity
            style={[styles.barcodeButton, { backgroundColor: colors.primary }]}
            onPress={handleBarcodeScan}
          >
            <Barcode size={20} color="white" />
          </TouchableOpacity>
        </View>
        
        <MedicationSearchModal
          visible={showMedicationSearch}
          onClose={() => setShowMedicationSearch(false)}
          onSelect={setMedication}
          selectedMedicationId={medication}
        />
      </View>
      
      {interactions.length > 0 && (
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
      
      <View style={styles.formGroup}>
        <Text style={[styles.label, { color: colors.text }]}>Occhio*</Text>
        <View style={styles.eyeSelectionContainer}>
          <TouchableOpacity
            style={[
              styles.eyeOption,
              eye === 'left' && [styles.eyeOptionSelected, { backgroundColor: colors.primary + '20', borderColor: colors.primary }]
            ]}
            onPress={() => setEye('left')}
          >
            <Eye size={20} color={eye === 'left' ? colors.primary : colors.gray[500]} />
            <Text style={[
              styles.eyeOptionText, 
              { color: eye === 'left' ? colors.primary : colors.text }
            ]}>
              Sinistro
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.eyeOption,
              eye === 'both' && [styles.eyeOptionSelected, { backgroundColor: colors.primary + '20', borderColor: colors.primary }]
            ]}
            onPress={() => setEye('both')}
          >
            <Eye size={20} color={eye === 'both' ? colors.primary : colors.gray[500]} />
            <Text style={[
              styles.eyeOptionText, 
              { color: eye === 'both' ? colors.primary : colors.text }
            ]}>
              Entrambi
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.eyeOption,
              eye === 'right' && [styles.eyeOptionSelected, { backgroundColor: colors.primary + '20', borderColor: colors.primary }]
            ]}
            onPress={() => setEye('right')}
          >
            <Eye size={20} color={eye === 'right' ? colors.primary : colors.gray[500]} />
            <Text style={[
              styles.eyeOptionText, 
              { color: eye === 'right' ? colors.primary : colors.text }
            ]}>
              Destro
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={[styles.label, { color: colors.text }]}>Frequenza*</Text>
        <Pressable 
          style={[styles.inputContainer, { backgroundColor: colors.card, borderColor: colors.border }]}
          onPress={() => setShowFrequencyPicker(true)}
        >
          <Text style={[styles.inputText, { color: frequency ? colors.text : colors.gray[500] }]}>
            {frequency || 'Seleziona una frequenza'}
          </Text>
          <ChevronDown size={20} color={colors.gray[500]} />
        </Pressable>
        
        {/* Frequency Picker Modal */}
        <Modal
          visible={showFrequencyPicker}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowFrequencyPicker(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={[styles.modalContainer, { backgroundColor: colors.card }]}>
              <Text style={[styles.modalTitle, { color: colors.text }]}>Seleziona Frequenza</Text>
              
              <ScrollView style={styles.modalScrollView}>
                {frequencyOptions.map((option) => (
                  <Pressable
                    key={option.value}
                    style={[
                      styles.modalOption,
                      frequency === option.value && { backgroundColor: colors.primaryLight + '20' }
                    ]}
                    onPress={() => {
                      setFrequency(option.value);
                      setShowFrequencyPicker(false);
                    }}
                  >
                    <Text style={[styles.modalOptionText, { color: colors.text }]}>
                      {option.label}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
              
              <Pressable
                style={[styles.modalCloseButton, { backgroundColor: colors.primary }]}
                onPress={() => setShowFrequencyPicker(false)}
              >
                <Text style={styles.modalCloseButtonText}>Chiudi</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={[styles.label, { color: colors.text }]}>Orari*</Text>
        <View style={styles.timesContainer}>
          {times.map((time, index) => (
            <View key={index} style={[styles.timeItem, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Clock size={16} color={colors.primary} style={styles.timeIcon} />
              <Text style={[styles.timeText, { color: colors.text }]}>{time}</Text>
              <View style={styles.timeActions}>
                <TouchableOpacity 
                  style={styles.timeEditButton}
                  onPress={() => handleEditTime(time, index)}
                >
                  <Text style={[styles.timeEditText, { color: colors.primary }]}>Modifica</Text>
                </TouchableOpacity>
                {times.length > 1 && (
                  <TouchableOpacity 
                    style={styles.timeRemoveButton}
                    onPress={() => handleRemoveTime(index)}
                  >
                    <Trash2 size={16} color={colors.danger} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
          
          <TouchableOpacity 
            style={[styles.addTimeButton, { borderColor: colors.primary, borderStyle: 'dashed' }]}
            onPress={handleAddTime}
          >
            <Plus size={20} color={colors.primary} />
            <Text style={[styles.addTimeText, { color: colors.primary }]}>Aggiungi orario</Text>
          </TouchableOpacity>
        </View>
        
        {/* Time Picker Modal */}
        <Modal
          visible={showTimePicker}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowTimePicker(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={[styles.modalContainer, { backgroundColor: colors.card }]}>
              <Text style={[styles.modalTitle, { color: colors.text }]}>
                {currentEditingIndex >= 0 ? 'Modifica orario' : 'Aggiungi orario'}
              </Text>
              
              <View style={[styles.timeInputContainer, { backgroundColor: colors.background, borderColor: colors.border }]}>
                <TextInput
                  style={[styles.timeInput, { color: colors.text }]}
                  value={currentEditingTime}
                  onChangeText={setCurrentEditingTime}
                  placeholder="HH:MM"
                  placeholderTextColor={colors.gray[500]}
                  keyboardType="numbers-and-punctuation"
                />
                <Clock size={20} color={colors.gray[500]} />
              </View>
              
              <Text style={[styles.timeInputHelp, { color: colors.gray[600] }]}>
                Inserisci l'orario nel formato 24 ore (es. 09:00, 14:30)
              </Text>
              
              <View style={styles.timePickerButtons}>
                <Pressable
                  style={[styles.timePickerButton, { backgroundColor: colors.gray[300] }]}
                  onPress={() => setShowTimePicker(false)}
                >
                  <Text style={[styles.timePickerButtonText, { color: colors.gray[700] }]}>Annulla</Text>
                </Pressable>
                
                <Pressable
                  style={[styles.timePickerButton, { backgroundColor: colors.primary }]}
                  onPress={handleSaveTime}
                >
                  <Text style={styles.timePickerButtonText}>Salva</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={[styles.label, { color: colors.text }]}>Data di inizio*</Text>
        <Pressable 
          style={[styles.inputContainer, { backgroundColor: colors.card, borderColor: colors.border }]}
          onPress={() => setShowStartDatePicker(true)}
        >
          <Text style={[styles.inputText, { color: startDate ? colors.text : colors.gray[500] }]}>
            {startDate ? formatDateToItalian(startDate) : 'Seleziona data di inizio'}
          </Text>
          {renderCalendarIcon()}
        </Pressable>
        
        {showStartDatePicker && (
          Platform.OS === 'web' ? (
            <Modal
              visible={showStartDatePicker}
              transparent={true}
              animationType="fade"
              onRequestClose={() => setShowStartDatePicker(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={[styles.modalContainer, { backgroundColor: colors.card }]}>
                  <Text style={[styles.modalTitle, { color: colors.text }]}>Seleziona data di inizio</Text>
                  
                  <View style={[styles.dateInputContainer, { backgroundColor: colors.background, borderColor: colors.border }]}>
                    <TextInput
                      style={[styles.dateInput, { color: colors.text }]}
                      value={startDate ? formatDateToItalian(startDate) : ''}
                      onChangeText={(text) => {
                        // Handle date input in DD/MM/YYYY format
                        if (/^\d{2}\/\d{2}\/\d{4}$/.test(text)) {
                          const [day, month, year] = text.split('/').map(Number);
                          const dateObj = new Date(year, month - 1, day);
                          
                          if (!isNaN(dateObj.getTime())) {
                            setStartDateObj(dateObj);
                            setStartDate(formatDateToYYYYMMDD(dateObj));
                          }
                        }
                      }}
                      placeholder="GG/MM/AAAA"
                      placeholderTextColor={colors.gray[500]}
                      keyboardType="numbers-and-punctuation"
                    />
                    {renderCalendarIcon()}
                  </View>
                  
                  <Text style={[styles.dateInputHelp, { color: colors.gray[600] }]}>
                    Inserisci la data nel formato GG/MM/AAAA (es. 15/06/2023)
                  </Text>
                  
                  <View style={styles.datePickerButtons}>
                    <Pressable
                      style={[styles.datePickerButton, { backgroundColor: colors.gray[300] }]}
                      onPress={() => setShowStartDatePicker(false)}
                    >
                      <Text style={[styles.datePickerButtonText, { color: colors.gray[700] }]}>Annulla</Text>
                    </Pressable>
                    
                    <Pressable
                      style={[styles.datePickerButton, { backgroundColor: colors.primary }]}
                      onPress={() => setShowStartDatePicker(false)}
                    >
                      <Text style={styles.datePickerButtonText}>Conferma</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
          ) : (
            <DateTimePicker
              value={startDateObj}
              mode="date"
              display="default"
              onChange={handleStartDateChange}
            />
          )
        )}
      </View>
      
      <View style={styles.formGroup}>
        <Text style={[styles.label, { color: colors.text }]}>Data di fine (opzionale)</Text>
        <Pressable 
          style={[styles.inputContainer, { backgroundColor: colors.card, borderColor: colors.border }]}
          onPress={() => setShowEndDatePicker(true)}
        >
          <Text style={[styles.inputText, { color: endDate ? colors.text : colors.gray[500] }]}>
            {endDate ? formatDateToItalian(endDate) : 'Seleziona data di fine'}
          </Text>
          {renderCalendarIcon()}
        </Pressable>
        
        {showEndDatePicker && (
          Platform.OS === 'web' ? (
            <Modal
              visible={showEndDatePicker}
              transparent={true}
              animationType="fade"
              onRequestClose={() => setShowEndDatePicker(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={[styles.modalContainer, { backgroundColor: colors.card }]}>
                  <Text style={[styles.modalTitle, { color: colors.text }]}>Seleziona data di fine</Text>
                  
                  <View style={[styles.dateInputContainer, { backgroundColor: colors.background, borderColor: colors.border }]}>
                    <TextInput
                      style={[styles.dateInput, { color: colors.text }]}
                      value={endDate ? formatDateToItalian(endDate) : ''}
                      onChangeText={handleEndDateInput}
                      placeholder="GG/MM/AAAA"
                      placeholderTextColor={colors.gray[500]}
                      keyboardType="numbers-and-punctuation"
                    />
                    {renderCalendarIcon()}
                  </View>
                  
                  <Text style={[styles.dateInputHelp, { color: colors.gray[600] }]}>
                    Inserisci la data nel formato GG/MM/AAAA (es. 15/06/2023)
                  </Text>
                  
                  <View style={styles.datePickerButtons}>
                    <Pressable
                      style={[styles.datePickerButton, { backgroundColor: colors.gray[300] }]}
                      onPress={() => setShowEndDatePicker(false)}
                    >
                      <Text style={[styles.datePickerButtonText, { color: colors.gray[700] }]}>Annulla</Text>
                    </Pressable>
                    
                    <Pressable
                      style={[styles.datePickerButton, { backgroundColor: colors.primary }]}
                      onPress={() => setShowEndDatePicker(false)}
                    >
                      <Text style={styles.datePickerButtonText}>Conferma</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
          ) : (
            <DateTimePicker
              value={endDateObj}
              mode="date"
              display="default"
              onChange={handleEndDateChange}
            />
          )
        )}
      </View>
      
      <View style={styles.formGroup}>
        <Text style={[styles.label, { color: colors.text }]}>Note (opzionale)</Text>
        <View style={[styles.textAreaContainer, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <TextInput
            style={[styles.textArea, { color: colors.text }]}
            value={notes}
            onChangeText={setNotes}
            placeholder="Aggiungi note o istruzioni speciali..."
            placeholderTextColor={colors.gray[500]}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>
      </View>
      
      <View style={[styles.notificationContainer, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={styles.notificationContent}>
          <Bell size={20} color={colors.primary} style={styles.notificationIcon} />
          <View style={styles.notificationTextContainer}>
            <Text style={[styles.notificationTitle, { color: colors.text }]}>
              Ricevi notifiche all'orario della terapia
            </Text>
            <Text style={[styles.notificationDescription, { color: colors.gray[600] }]}>
              Riceverai un promemoria per ogni orario programmato
            </Text>
          </View>
        </View>
        <Switch
          value={enableNotifications}
          onValueChange={setEnableNotifications}
          trackColor={{ false: colors.gray[300], true: colors.primary + '70' }}
          thumbColor={enableNotifications ? colors.primary : colors.gray[400]}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Pressable 
          style={[styles.button, styles.cancelButton, { backgroundColor: colors.gray[300] }]}
          onPress={handleCancel}
        >
          <Text style={[styles.buttonText, { color: colors.gray[700] }]}>Annulla</Text>
        </Pressable>
        
        <Pressable 
          style={[styles.button, styles.submitButton, { backgroundColor: colors.primary }]}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Salva</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  formGroup: {
    marginBottom: 16,
    position: 'relative',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  medicationSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 50,
  },
  barcodeButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  input: {
    flex: 1,
    height: 50,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
  },
  textAreaContainer: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
  },
  textArea: {
    height: 100,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 40,
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    marginRight: 8,
  },
  submitButton: {
    marginLeft: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    width: '100%',
    borderRadius: 12,
    padding: 16,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalScrollView: {
    maxHeight: 300,
  },
  modalOption: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E7',
  },
  modalOptionText: {
    fontSize: 16,
  },
  modalCloseButton: {
    marginTop: 16,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  // Interactions warning styles
  interactionsWarning: {
    marginBottom: 16,
    padding: 12,
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
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  interactionText: {
    fontSize: 14,
    marginBottom: 4,
  },
  interactionsNote: {
    fontSize: 12,
    marginTop: 8,
    fontStyle: 'italic',
  },
  // Eye selection styles
  eyeSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eyeOption: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E5E7',
    borderRadius: 12,
    marginHorizontal: 4,
  },
  eyeOptionSelected: {
    borderWidth: 1,
  },
  eyeOptionText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  // Times styles
  timesContainer: {
    marginBottom: 8,
  },
  timeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 8,
  },
  timeIcon: {
    marginRight: 8,
  },
  timeText: {
    flex: 1,
    fontSize: 16,
  },
  timeActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeEditButton: {
    marginRight: 12,
  },
  timeEditText: {
    fontSize: 14,
    fontWeight: '500',
  },
  timeRemoveButton: {
    padding: 4,
  },
  addTimeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  addTimeText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  timeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 8,
  },
  timeInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  timeInputHelp: {
    fontSize: 12,
    marginBottom: 16,
  },
  timePickerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timePickerButton: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  timePickerButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  // Date picker styles
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 8,
  },
  dateInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  dateInputHelp: {
    fontSize: 12,
    marginBottom: 16,
  },
  datePickerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datePickerButton: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  datePickerButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  // Notification toggle styles
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 24,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  notificationIcon: {
    marginRight: 12,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  notificationDescription: {
    fontSize: 12,
  },
});

export default TherapyForm;