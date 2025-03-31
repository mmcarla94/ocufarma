import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, Dimensions } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useRouter } from 'expo-router';
import { ArrowLeft, User, Calendar, CheckCircle, AlertCircle, Clock, Eye, PieChart as PieChartIcon } from 'lucide-react-native';
import { useTherapyStore } from '@/store/therapy-store';
import { useAuthStore } from '@/store/auth-store';

// Importa componenti per i grafici
import { PieChart, BarChart, LineChart } from 'react-native-chart-kit';

export default function AccountInfoScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  const { user } = useAuthStore();
  const { therapies } = useTherapyStore();
  const screenWidth = Dimensions.get('window').width - 40; // Larghezza dello schermo meno padding
  
  // Renderizza il pulsante indietro
  const renderBackButton = () => {
    return (
      <Pressable onPress={() => router.back()} style={{ marginRight: 10 }}>
        <ArrowLeft size={24} color={colors.primary} />
      </Pressable>
    );
  };
  
  // Non è più necessario impostare il titolo tramite setParams
  // poiché lo impostiamo direttamente nel componente Stack.Screen
  
  // Stati per i dati dei grafici
  const [adherenceData, setAdherenceData] = useState({ completed: 0, skipped: 0, postponed: 0 });
  const [weeklyAdherence, setWeeklyAdherence] = useState([]);
  const [medicationUsage, setMedicationUsage] = useState([]);
  const [eyeDistribution, setEyeDistribution] = useState({ left: 0, right: 0, both: 0 });
  
  const handleBack = () => {
    router.back();
  };
  
  // Calcola le statistiche di aderenza alla terapia
  useEffect(() => {
    if (therapies.length === 0) return;
    
    // Calcola l'aderenza complessiva
    let completed = 0;
    let skipped = 0;
    let postponed = 0;
    
    // Conteggio per occhio
    let leftEye = 0;
    let rightEye = 0;
    let bothEyes = 0;
    
    // Mappa per contare l'uso dei farmaci
    const medicationCount = {};
    
    // Dati settimanali
    const weeklyData = Array(7).fill(0);
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = domenica, 6 = sabato
    
    therapies.forEach(therapy => {
      // Conteggio per occhio
      if (therapy.eye === 'left') leftEye++;
      else if (therapy.eye === 'right') rightEye++;
      else if (therapy.eye === 'both') bothEyes++;
      
      // Conteggio per farmaco
      if (medicationCount[therapy.medicationName]) {
        medicationCount[therapy.medicationName]++;
      } else {
        medicationCount[therapy.medicationName] = 1;
      }
      
      // Conteggio dosi completate/saltate/posticipate
      if (therapy.completedDoses && therapy.completedDoses.length > 0) {
        therapy.completedDoses.forEach(dose => {
          if (dose.status === 'completed') {
            completed++;
            
            // Aggiungi al conteggio settimanale
            const doseDate = new Date(dose.date);
            const dayDiff = Math.floor((today - doseDate) / (1000 * 60 * 60 * 24));
            if (dayDiff >= 0 && dayDiff < 7) {
              const index = (dayOfWeek - dayDiff + 7) % 7;
              weeklyData[index]++;
            }
          } else if (dose.status === 'skipped') {
            skipped++;
          } else if (dose.status === 'postponed') {
            postponed++;
          }
        });
      }
    });
    
    setAdherenceData({ completed, skipped, postponed });
    setEyeDistribution({ left: leftEye, right: rightEye, both: bothEyes });
    
    // Prepara i dati per il grafico a barre dei farmaci
    const medicationData = Object.entries(medicationCount)
      .map(([name, count]) => ({
        name: name.length > 10 ? name.substring(0, 10) + '...' : name,
        count: count,
        color: getRandomColor(colors),
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5); // Prendi solo i primi 5 farmaci più usati
    
    setMedicationUsage(medicationData);
    
    // Prepara i dati per il grafico settimanale
    const days = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
    const weekLabels = [];
    
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      weekLabels.push(days[d.getDay()]);
    }
    
    const weekData = {
      labels: weekLabels,
      datasets: [{
        data: [...weeklyData].reverse(), // Inverti l'array per mostrare i giorni in ordine cronologico
      }]
    };
    
    setWeeklyAdherence(weekData);
  }, [therapies]);
  
  // Funzione per generare colori casuali
  const getRandomColor = (colors) => {
    const colorOptions = [
      colors.primary,
      colors.secondary,
      colors.success,
      colors.warning,
      colors.info,
      colors.error,
    ];
    return colorOptions[Math.floor(Math.random() * colorOptions.length)];
  };
  
  // Calcola la percentuale di aderenza
  const calculateAdherencePercentage = () => {
    const total = adherenceData.completed + adherenceData.skipped + adherenceData.postponed;
    if (total === 0) return 0;
    return Math.round((adherenceData.completed / total) * 100);
  };
  
  // Dati per il grafico a torta dell'aderenza
  const pieChartData = [
    {
      name: 'Completate',
      population: adherenceData.completed,
      color: colors.success,
      legendFontColor: colors.text,
    },
    {
      name: 'Saltate',
      population: adherenceData.skipped,
      color: colors.error,
      legendFontColor: colors.text,
    },
    {
      name: 'Posticipate',
      population: adherenceData.postponed,
      color: colors.warning,
      legendFontColor: colors.text,
    },
  ];
  
  // Dati per il grafico a torta della distribuzione degli occhi
  const eyeChartData = [
    {
      name: 'Sinistro',
      population: eyeDistribution.left,
      color: colors.primary,
      legendFontColor: colors.text,
    },
    {
      name: 'Destro',
      population: eyeDistribution.right,
      color: colors.secondary,
      legendFontColor: colors.text,
    },
    {
      name: 'Entrambi',
      population: eyeDistribution.both,
      color: colors.info,
      legendFontColor: colors.text,
    },
  ];
  
  // Configurazione del grafico
  const chartConfig = {
    backgroundGradientFrom: colors.card,
    backgroundGradientTo: colors.card,
    color: (opacity = 1) => colors.primary + opacity.toString(16).padStart(2, '0'),
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
    labelColor: () => colors.text,
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={[styles.profileCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={[styles.avatarContainer, { backgroundColor: colors.primary + '20' }]}>
            <User size={32} color={colors.primary} />
          </View>
          
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, { color: colors.text }]}>
              {user?.name || 'Utente'}
            </Text>
            <Text style={[styles.profileEmail, { color: colors.gray[600] }]}>
              {user?.email || 'utente@example.com'}
            </Text>
          </View>
        </View>
        
        {/* Sezione Aderenza alla Terapia */}
        <View style={[styles.sectionCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.sectionHeader}>
            <View style={[styles.iconContainer, { backgroundColor: colors.success + '15' }]}>
              <CheckCircle size={20} color={colors.success} />
            </View>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Aderenza alla Terapia</Text>
          </View>
          
          <View style={styles.adherenceStats}>
            <View style={[styles.adherenceCircle, { borderColor: colors.success }]}>
              <Text style={[styles.adherencePercentage, { color: colors.success }]}>
                {calculateAdherencePercentage()}%
              </Text>
              <Text style={[styles.adherenceLabel, { color: colors.gray[600] }]}>Aderenza</Text>
            </View>
            
            <View style={styles.adherenceDetails}>
              <View style={styles.adherenceItem}>
                <View style={[styles.adherenceDot, { backgroundColor: colors.success }]} />
                <Text style={[styles.adherenceItemText, { color: colors.text }]}>
                  {adherenceData.completed} dosi completate
                </Text>
              </View>
              
              <View style={styles.adherenceItem}>
                <View style={[styles.adherenceDot, { backgroundColor: colors.error }]} />
                <Text style={[styles.adherenceItemText, { color: colors.text }]}>
                  {adherenceData.skipped} dosi saltate
                </Text>
              </View>
              
              <View style={styles.adherenceItem}>
                <View style={[styles.adherenceDot, { backgroundColor: colors.warning }]} />
                <Text style={[styles.adherenceItemText, { color: colors.text }]}>
                  {adherenceData.postponed} dosi posticipate
                </Text>
              </View>
            </View>
          </View>
          
          {adherenceData.completed + adherenceData.skipped + adherenceData.postponed > 0 && (
            <View style={styles.chartContainer}>
              <PieChart
                data={pieChartData}
                width={screenWidth - 32}
                height={180}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
              />
            </View>
          )}
        </View>
        
        {/* Sezione Attività Settimanale */}
        {weeklyAdherence.labels && weeklyAdherence.datasets && (
          <View style={[styles.sectionCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.iconContainer, { backgroundColor: colors.primary + '15' }]}>
                <Calendar size={20} color={colors.primary} />
              </View>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>Attività Settimanale</Text>
            </View>
            
            <View style={styles.chartContainer}>
              <LineChart
                data={weeklyAdherence}
                width={screenWidth - 32}
                height={220}
                chartConfig={{
                  ...chartConfig,
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: colors.primary
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />
            </View>
          </View>
        )}
        
        {/* Sezione Distribuzione Occhi */}
        {(eyeDistribution.left > 0 || eyeDistribution.right > 0 || eyeDistribution.both > 0) && (
          <View style={[styles.sectionCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.iconContainer, { backgroundColor: colors.info + '15' }]}>
                <Eye size={20} color={colors.info} />
              </View>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>Distribuzione Trattamenti</Text>
            </View>
            
            <View style={styles.chartContainer}>
              <PieChart
                data={eyeChartData}
                width={screenWidth - 32}
                height={180}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
              />
            </View>
          </View>
        )}
        
        {/* Sezione Farmaci Più Utilizzati */}
        {medicationUsage.length > 0 && (
          <View style={[styles.sectionCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.sectionHeader}>
              <View style={[styles.iconContainer, { backgroundColor: colors.secondary + '15' }]}>
                <PieChartIcon size={20} color={colors.secondary} />
              </View>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>Farmaci Più Utilizzati</Text>
            </View>
            
            <View style={styles.medicationList}>
              {medicationUsage.map((med, index) => (
                <View key={index} style={styles.medicationItem}>
                  <View style={[styles.medicationBar, { width: `${(med.count / Math.max(...medicationUsage.map(m => m.count))) * 100}%`, backgroundColor: med.color }]} />
                  <Text style={[styles.medicationName, { color: colors.text }]}>{med.name}</Text>
                  <Text style={[styles.medicationCount, { color: colors.gray[600] }]}>{med.count}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
  },
  sectionCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  adherenceStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  adherenceCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adherencePercentage: {
    fontSize: 20,
    fontWeight: '700',
  },
  adherenceLabel: {
    fontSize: 12,
  },
  adherenceDetails: {
    marginLeft: 16,
    flex: 1,
  },
  adherenceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  adherenceDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  adherenceItemText: {
    fontSize: 14,
  },
  chartContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  medicationList: {
    marginTop: 8,
  },
  medicationItem: {
    marginBottom: 12,
    position: 'relative',
  },
  medicationBar: {
    height: 30,
    borderRadius: 6,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
  },
  medicationName: {
    fontSize: 14,
    fontWeight: '500',
    paddingLeft: 12,
    paddingTop: 6,
    zIndex: 2,
  },
  medicationCount: {
    position: 'absolute',
    right: 12,
    top: 6,
    fontSize: 14,
    fontWeight: '500',
    zIndex: 2,
  },
});