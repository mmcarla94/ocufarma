import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useRouter } from 'expo-router';
import { ArrowLeft, FileText, Shield, Lock, AlertTriangle } from 'lucide-react-native';

export default function TermsScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  
  const handleBack = () => {
    router.back();
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Pressable onPress={handleBack} style={styles.backButton}>
          <ArrowLeft size={24} color={colors.primary} />
        </Pressable>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Termini e Condizioni</Text>
      </View>
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={[styles.introCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <FileText size={32} color={colors.primary} style={styles.introIcon} />
          <Text style={[styles.introTitle, { color: colors.text }]}>Termini e Condizioni d'Uso</Text>
          <Text style={[styles.introText, { color: colors.gray[600] }]}>
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </Text>
        </View>
        
        <View style={[styles.sectionCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>1. Introduzione</Text>
          </View>
          <Text style={[styles.paragraph, { color: colors.gray[700] }]}>
            Benvenuto in OcuFarma ("l'App"). Utilizzando questa applicazione, accetti di essere vincolato dai seguenti termini e condizioni ("Termini"). Ti preghiamo di leggerli attentamente prima di utilizzare l'App.
          </Text>
          <Text style={[styles.paragraph, { color: colors.gray[700] }]}>
            OcuFarma è un'applicazione progettata per aiutare gli utenti a gestire le terapie oftalmologiche. L'App non sostituisce il parere medico professionale e non deve essere utilizzata per diagnosi o trattamenti senza consultare un professionista sanitario qualificato.
          </Text>
        </View>
        
        <View style={[styles.sectionCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>2. Utilizzo dell'App</Text>
          </View>
          <Text style={[styles.paragraph, { color: colors.gray[700] }]}>
            L'utente si impegna a utilizzare l'App solo per scopi legittimi e in conformità con questi Termini. È vietato utilizzare l'App in modo da danneggiare, disabilitare, sovraccaricare o compromettere i nostri sistemi.
          </Text>
          <Text style={[styles.paragraph, { color: colors.gray[700] }]}>
            L'utente è responsabile della precisione e della completezza delle informazioni inserite nell'App. Non ci assumiamo alcuna responsabilità per errori o omissioni nelle informazioni fornite dall'utente.
          </Text>
        </View>
        
        <View style={[styles.sectionCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.sectionHeader}>
            <View style={[styles.iconContainer, { backgroundColor: colors.primary + '15' }]}>
              <Shield size={20} color={colors.primary} />
            </View>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>3. Privacy e Protezione dei Dati</Text>
          </View>
          <Text style={[styles.paragraph, { color: colors.gray[700] }]}>
            La nostra Informativa sulla Privacy descrive come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali. Utilizzando l'App, acconsenti alla raccolta e all'utilizzo delle tue informazioni in conformità con la nostra Informativa sulla Privacy.
          </Text>
          <Text style={[styles.paragraph, { color: colors.gray[700] }]}>
            Ci impegniamo a proteggere la tua privacy e a mantenere sicuri i tuoi dati personali. Tuttavia, nessuna trasmissione di dati su Internet o sistema di archiviazione elettronica è completamente sicuro, e non possiamo garantire la sicurezza assoluta dei tuoi dati.
          </Text>
        </View>
        
        <View style={[styles.sectionCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.sectionHeader}>
            <View style={[styles.iconContainer, { backgroundColor: colors.primary + '15' }]}>
              <Lock size={20} color={colors.primary} />
            </View>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>4. Account e Sicurezza</Text>
          </View>
          <Text style={[styles.paragraph, { color: colors.gray[700] }]}>
            Se crei un account, sei responsabile di mantenere la riservatezza delle tue credenziali di accesso e di tutte le attività che si verificano sotto il tuo account. Ti impegni a notificarci immediatamente di qualsiasi utilizzo non autorizzato del tuo account.
          </Text>
          <Text style={[styles.paragraph, { color: colors.gray[700] }]}>
            Ci riserviamo il diritto di disabilitare qualsiasi account, in qualsiasi momento, se riteniamo che tu abbia violato questi Termini o che rappresenti un rischio per noi o per altri utenti dell'App.
          </Text>
        </View>
        
        <View style={[styles.sectionCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.sectionHeader}>
            <View style={[styles.iconContainer, { backgroundColor: colors.warning + '15' }]}>
              <AlertTriangle size={20} color={colors.warning} />
            </View>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>5. Limitazione di Responsabilità</Text>
          </View>
          <Text style={[styles.paragraph, { color: colors.gray[700] }]}>
            L'App è fornita "così com'è" e "come disponibile", senza garanzie di alcun tipo, esplicite o implicite. Non garantiamo che l'App sarà sempre disponibile, priva di errori o sicura.
          </Text>
          <Text style={[styles.paragraph, { color: colors.gray[700] }]}>
            In nessun caso saremo responsabili per danni diretti, indiretti, incidentali, speciali o consequenziali derivanti dall'uso o dall'impossibilità di utilizzare l'App, inclusi ma non limitati a perdita di profitti, dati o altre perdite intangibili.
          </Text>
          <Text style={[styles.paragraph, { color: colors.gray[700] }]}>
            L'App non è destinata a sostituire il parere medico professionale. Consulta sempre un medico qualificato per diagnosi, trattamenti e altre questioni mediche.
          </Text>
        </View>
        
        <View style={[styles.sectionCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>6. Modifiche ai Termini</Text>
          </View>
          <Text style={[styles.paragraph, { color: colors.gray[700] }]}>
            Ci riserviamo il diritto di modificare questi Termini in qualsiasi momento. Le modifiche entreranno in vigore immediatamente dopo la pubblicazione dei Termini aggiornati nell'App. L'uso continuato dell'App dopo tali modifiche costituirà il tuo consenso ai nuovi Termini.
          </Text>
        </View>
        
        <View style={[styles.sectionCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>7. Contatti</Text>
          </View>
          <Text style={[styles.paragraph, { color: colors.gray[700] }]}>
            Per domande o commenti su questi Termini, contattaci all'indirizzo ocufarma.app@gmail.com.
          </Text>
        </View>
        
        <View style={[styles.acceptanceCard, { backgroundColor: colors.primary + '10', borderColor: colors.primary + '30' }]}>
          <Text style={[styles.acceptanceTitle, { color: colors.primary }]}>Accettazione dei Termini</Text>
          <Text style={[styles.acceptanceText, { color: colors.gray[700] }]}>
            Utilizzando l'App OcuFarma, confermi di aver letto, compreso e accettato questi Termini e Condizioni.
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
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  acceptanceCard: {
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    borderWidth: 1,
  },
  acceptanceTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  acceptanceText: {
    fontSize: 14,
    lineHeight: 20,
  },
});