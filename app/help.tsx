import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useRouter } from 'expo-router';
import { ArrowLeft, HelpCircle, Bell, PlusCircle, Search, Calendar, User, Eye } from 'lucide-react-native';

export default function HelpScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  
  const handleBack = () => {
    router.back();
  };
  
  const helpSections = [
    {
      title: 'Gestione delle Terapie',
      icon: PlusCircle,
      items: [
        'Per aggiungere una nuova terapia, premi il pulsante "+" nella schermata principale o nella sezione "Terapie".',
        'Seleziona il farmaco, l\'occhio da trattare e imposta gli orari di somministrazione.',
        'Puoi modificare o eliminare una terapia in qualsiasi momento dalla schermata di dettaglio.',
        'Le terapie attive genereranno notifiche agli orari impostati.'
      ]
    },
    {
      title: 'Sistema di Notifiche',
      icon: Bell,
      items: [
        'Riceverai notifiche agli orari impostati per ogni terapia.',
        'Puoi confermare l\'assunzione del farmaco, posticipare la notifica o segnare la dose come non assunta.',
        'Dalla sezione "Notifiche" puoi attivare o disattivare le notifiche per tutte le terapie.',
        'Per disattivare le notifiche per una singola terapia, modifica la terapia specifica.'
      ]
    },
    {
      title: 'Ricerca Farmaci',
      icon: Search,
      items: [
        'Utilizza la barra di ricerca nella schermata principale per trovare rapidamente i farmaci.',
        'Puoi cercare per nome del farmaco, principio attivo o categoria.',
        'Tocca su un farmaco per visualizzarne i dettagli completi.',
        'Dalla scheda del farmaco puoi aggiungere direttamente una nuova terapia.'
      ]
    },
    {
      title: 'Calendario e Promemoria',
      icon: Calendar,
      items: [
        'Nella sezione "Calendario" puoi visualizzare tutte le somministrazioni programmate.',
        'Le somministrazioni completate sono contrassegnate in verde, quelle saltate in rosso.',
        'Tocca su un giorno per vedere i dettagli delle somministrazioni previste.',
        'Puoi filtrare la visualizzazione per farmaco o per occhio.'
      ]
    },
    {
      title: 'Profilo e Statistiche',
      icon: User,
      items: [
        'Nella sezione "Profilo" puoi visualizzare le tue statistiche di utilizzo.',
        'Le statistiche mostrano l\'aderenza alla terapia e lo storico dei farmaci assunti.',
        'Puoi personalizzare le impostazioni dell\'app, incluso il tema e le notifiche.',
        'Per assistenza, consulta questa sezione di aiuto o contatta il supporto.'
      ]
    },
    {
      title: 'Gestione Occhi',
      icon: Eye,
      items: [
        'Puoi specificare quale occhio trattare per ogni terapia (sinistro, destro o entrambi).',
        'Le statistiche tengono traccia separatamente dei trattamenti per ciascun occhio.',
        'Le notifiche specificheranno quale occhio trattare per ogni somministrazione.',
        'Puoi filtrare le terapie per occhio nella sezione "Terapie".'
      ]
    }
  ];
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Pressable onPress={handleBack} style={styles.backButton}>
          <ArrowLeft size={24} color={colors.primary} />
        </Pressable>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Aiuto</Text>
      </View>
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={[styles.introCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <HelpCircle size={32} color={colors.primary} style={styles.introIcon} />
          <Text style={[styles.introTitle, { color: colors.text }]}>Come possiamo aiutarti?</Text>
          <Text style={[styles.introText, { color: colors.gray[600] }]}>
            Consulta le sezioni qui sotto per trovare risposte alle domande più frequenti sull'utilizzo di OcuFarma.
          </Text>
        </View>
        
        {helpSections.map((section, index) => {
          const Icon = section.icon;
          
          return (
            <View key={index} style={[styles.sectionCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.sectionHeader}>
                <View style={[styles.iconContainer, { backgroundColor: colors.primary + '15' }]}>
                  <Icon size={20} color={colors.primary} />
                </View>
                <Text style={[styles.sectionTitle, { color: colors.text }]}>{section.title}</Text>
              </View>
              
              <View style={styles.sectionContent}>
                {section.items.map((item, itemIndex) => (
                  <View key={itemIndex} style={styles.helpItem}>
                    <View style={[styles.bulletPoint, { backgroundColor: colors.primary }]} />
                    <Text style={[styles.helpText, { color: colors.gray[700] }]}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
          );
        })}
        
        <View style={[styles.contactCard, { backgroundColor: colors.primary + '10', borderColor: colors.primary + '30' }]}>
          <Text style={[styles.contactTitle, { color: colors.primary }]}>Hai ancora domande?</Text>
          <Text style={[styles.contactText, { color: colors.gray[700] }]}>
            Se hai bisogno di ulteriore assistenza, contattaci all'indirizzo ocufarma.app@gmail.com
          </Text>
        </View>
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
  introCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 1,
  },
  introIcon: {
    marginBottom: 12,
  },
  introTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  introText: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
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
    marginBottom: 12,
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
  sectionContent: {
    marginLeft: 8,
  },
  helpItem: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 7,
    marginRight: 8,
  },
  helpText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  contactCard: {
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    borderWidth: 1,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 14,
    lineHeight: 20,
  },
});