import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, Linking } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useRouter } from 'expo-router';
import { 
  Info, 
  Mail, 
  Github, 
  Star, 
  FileText, 
  HelpCircle, 
  ChevronRight,
  BookOpen,
  AlertCircle,
  User
} from 'lucide-react-native';

export default function InfoScreen() {
  const colors = useThemeColors();
  const router = useRouter();
  
  const handleEmailPress = () => {
    Linking.openURL('mailto:support@ocufarma.com');
  };
  
  const handleRoadmapPress = () => {
    router.push('/features-roadmap');
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.headerTitle, { color: colors.text }]}>Informazioni</Text>
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={[styles.appInfoCard, { backgroundColor: colors.card }]}>
          <View style={[styles.logoContainer, { backgroundColor: colors.primary + '20' }]}>
            <Info size={32} color={colors.primary} />
          </View>
          
          <View style={styles.appInfoContent}>
            <Text style={[styles.appName, { color: colors.text }]}>OcuFarma</Text>
            <Text style={[styles.appVersion, { color: colors.gray[600] }]}>Versione 1.0.0</Text>
            <Text style={[styles.appDescription, { color: colors.gray[600] }]}>
              Un'app per la gestione dei farmaci oftalmologici
            </Text>
          </View>
        </View>
        
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Sviluppatore</Text>
          <View style={styles.developerContainer}>
            <View style={[styles.developerAvatar, { backgroundColor: colors.primary + '20' }]}>
              <User size={24} color={colors.primary} />
            </View>
            <View style={styles.developerInfo}>
              <Text style={[styles.developerName, { color: colors.text }]}>Matteo Mario Carlà</Text>
              <Text style={[styles.developerRole, { color: colors.gray[600] }]}>Oftalmologo</Text>
            </View>
          </View>
        </View>
        
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Fonti dei Dati</Text>
          <View style={styles.sourceItem}>
            <BookOpen size={20} color={colors.primary} style={styles.sourceIcon} />
            <View>
              <Text style={[styles.sourceName, { color: colors.text }]}>AIFA</Text>
              <Text style={[styles.sourceDescription, { color: colors.gray[600] }]}>
                Agenzia Italiana del Farmaco - Informazioni ufficiali sui farmaci autorizzati in Italia
              </Text>
            </View>
          </View>
          
          <View style={styles.sourceItem}>
            <BookOpen size={20} color={colors.primary} style={styles.sourceIcon} />
            <View>
              <Text style={[styles.sourceName, { color: colors.text }]}>CODIFA</Text>
              <Text style={[styles.sourceDescription, { color: colors.gray[600] }]}>
                Banca dati farmaceutica italiana - Informazioni tecniche e commerciali sui farmaci
              </Text>
            </View>
          </View>
          
          <View style={styles.sourceItem}>
            <BookOpen size={20} color={colors.primary} style={styles.sourceIcon} />
            <View>
              <Text style={[styles.sourceName, { color: colors.text }]}>My Personal Trainer</Text>
              <Text style={[styles.sourceDescription, { color: colors.gray[600] }]}>
                Portale di divulgazione scientifica con informazioni sui farmaci e patologie
              </Text>
            </View>
          </View>
        </View>
        
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Disclaimer</Text>
          <View style={styles.disclaimerContainer}>
            <AlertCircle size={20} color={colors.warning} style={styles.disclaimerIcon} />
            <Text style={[styles.disclaimerText, { color: colors.gray[600] }]}>
              Le informazioni contenute in questa app sono fornite a scopo informativo e non sostituiscono il parere medico professionale. Consultare sempre un medico o un farmacista prima di iniziare qualsiasi terapia.
            </Text>
          </View>
        </View>
        
        <View style={[styles.menuCard, { backgroundColor: colors.card }]}>
          <Pressable
            style={({ pressed }) => [
              styles.menuItem,
              pressed && styles.menuItemPressed,
            ]}
            onPress={handleEmailPress}
          >
            <View style={styles.menuItemLeft}>
              <Mail size={20} color={colors.primary} />
              <Text style={[styles.menuItemLabel, { color: colors.text }]}>
                Contattaci
              </Text>
            </View>
            <ChevronRight size={20} color={colors.gray[400]} />
          </Pressable>
          
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          
          <Pressable
            style={({ pressed }) => [
              styles.menuItem,
              pressed && styles.menuItemPressed,
            ]}
            onPress={handleRoadmapPress}
          >
            <View style={styles.menuItemLeft}>
              <FileText size={20} color={colors.primary} />
              <Text style={[styles.menuItemLabel, { color: colors.text }]}>
                Roadmap funzionalità
              </Text>
            </View>
            <ChevronRight size={20} color={colors.gray[400]} />
          </Pressable>
        </View>
        
        <Text style={[styles.copyright, { color: colors.gray[500] }]}>
          © 2023 OcuFarma. Tutti i diritti riservati.
        </Text>
      </ScrollView>
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
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  appInfoCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center',
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  appInfoContent: {
    alignItems: 'center',
  },
  appName: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  appVersion: {
    fontSize: 14,
    marginBottom: 8,
  },
  appDescription: {
    fontSize: 14,
    textAlign: 'center',
  },
  section: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  developerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  developerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  developerInfo: {
    flex: 1,
  },
  developerName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  developerRole: {
    fontSize: 14,
  },
  sourceItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  sourceIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  sourceName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  sourceDescription: {
    fontSize: 14,
  },
  disclaimerContainer: {
    flexDirection: 'row',
  },
  disclaimerIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  disclaimerText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  menuCard: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  menuItemPressed: {
    opacity: 0.7,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemLabel: {
    fontSize: 16,
    marginLeft: 12,
  },
  divider: {
    height: 1,
    marginHorizontal: 16,
  },
  copyright: {
    textAlign: 'center',
    marginBottom: 32,
    fontSize: 12,
  },
});