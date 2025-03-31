import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Image, TouchableOpacity } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { ExternalLink, BookOpen, Shield, AlertCircle, User, Mail } from 'lucide-react-native';

export default function InfoScreen() {
  const colors = useThemeColors();
  
  const openLink = (url: string) => {
    Linking.openURL(url);
  };
  
  const openEmail = () => {
    Linking.openURL('mailto:ocufarma.app@gmail.com?subject=Feedback%20OcuFarma');
  };
  
  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={[styles.header, { backgroundColor: colors.card }]}>
        <View style={styles.iconContainer}>
          <Image 
            source={{ uri: 'https://i.imgur.com/REPLACE_WITH_ACTUAL_URL.png' }} 
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <Text style={[styles.title, { color: colors.text }]}>Informazioni sull'App</Text>
        <Text style={[styles.subtitle, { color: colors.gray[600] }]}>
          Guida completa ai farmaci oftalmologici
        </Text>
      </View>
      
      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Autori</Text>
        <View style={styles.authorContainer}>
          <View style={[styles.authorImageContainer, { backgroundColor: colors.primary + '20' }]}>
            <User size={24} color={colors.primary} />
          </View>
          <View style={styles.authorInfo}>
            <Text style={[styles.authorName, { color: colors.text }]}>Matteo Mario Carlà</Text>
            <Text style={[styles.authorRole, { color: colors.gray[600] }]}>Oftalmologo</Text>
          </View>
        </View>
        
        <View style={[styles.authorContainer, { marginTop: 16 }]}>
          <View style={[styles.authorImageContainer, { backgroundColor: colors.primary + '20' }]}>
            <User size={24} color={colors.primary} />
          </View>
          <View style={styles.authorInfo}>
            <Text style={[styles.authorName, { color: colors.text }]}>Stanislao Rizzo</Text>
            <Text style={[styles.authorRole, { color: colors.gray[600] }]}>Sviluppatore</Text>
          </View>
        </View>
      </View>
      
      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Fonti dei Dati</Text>
        <Text style={[styles.sectionText, { color: colors.gray[600] }]}>
          Tutte le informazioni sui farmaci presenti in questa applicazione sono state raccolte da fonti ufficiali e affidabili:
        </Text>
        
        <View style={styles.sourceItem}>
          <BookOpen size={20} color={colors.primary} style={styles.sourceIcon} />
          <Text style={[styles.sourceName, { color: colors.text }]}>AIFA</Text>
        </View>
        <Text style={[styles.sourceDescription, { color: colors.gray[600] }]}>
          Agenzia Italiana del Farmaco - Informazioni ufficiali sui farmaci autorizzati in Italia.
        </Text>
        
        <View style={styles.sourceItem}>
          <BookOpen size={20} color={colors.primary} style={styles.sourceIcon} />
          <Text style={[styles.sourceName, { color: colors.text }]}>CODIFA</Text>
        </View>
        <Text style={[styles.sourceDescription, { color: colors.gray[600] }]}>
          Banca dati farmaceutica italiana - Informazioni tecniche e commerciali sui farmaci.
        </Text>
        
        <View style={styles.sourceItem}>
          <BookOpen size={20} color={colors.primary} style={styles.sourceIcon} />
          <Text style={[styles.sourceName, { color: colors.text }]}>My Personal Trainer</Text>
        </View>
        <Text style={[styles.sourceDescription, { color: colors.gray[600] }]}>
          Portale di divulgazione scientifica con informazioni sui farmaci e patologie.
        </Text>
      </View>
      
      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Contattaci</Text>
        <TouchableOpacity 
          style={[styles.contactButton, { backgroundColor: colors.primary }]} 
          onPress={openEmail}
        >
          <Mail size={20} color="white" style={styles.contactIcon} />
          <Text style={styles.contactButtonText}>Invia email a ocufarma.app@gmail.com</Text>
        </TouchableOpacity>
        <Text style={[styles.contactText, { color: colors.gray[600] }]}>
          Per domande, suggerimenti o segnalazioni, non esitare a contattarci.
        </Text>
      </View>
      
      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Disclaimer</Text>
        <View style={styles.disclaimerContainer}>
          <AlertCircle size={20} color={colors.warning} style={styles.disclaimerIcon} />
          <Text style={[styles.disclaimerText, { color: colors.gray[600] }]}>
            Le informazioni contenute in questa app sono fornite a scopo informativo e non sostituiscono il parere medico professionale. Consultare sempre un medico o un farmacista prima di iniziare qualsiasi terapia o modificare un trattamento esistente.
          </Text>
        </View>
      </View>
      
      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Privacy e Sicurezza</Text>
        <View style={styles.privacyItem}>
          <Shield size={20} color={colors.success} style={styles.privacyIcon} />
          <Text style={[styles.privacyText, { color: colors.gray[600] }]}>
            I dati personali e le terapie salvate sono memorizzati localmente sul dispositivo.
          </Text>
        </View>
        <View style={styles.privacyItem}>
          <Shield size={20} color={colors.success} style={styles.privacyIcon} />
          <Text style={[styles.privacyText, { color: colors.gray[600] }]}>
            Non condividiamo i tuoi dati con terze parti.
          </Text>
        </View>
      </View>
      
      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Versione</Text>
        <Text style={[styles.versionText, { color: colors.gray[600] }]}>
          Versione 1.1.2
        </Text>
      </View>
      
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: colors.gray[500] }]}>
          © 2025 Tutti i diritti riservati
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    padding: 24,
    borderRadius: 12,
    marginBottom: 16,
  },
  iconContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  section: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  authorInitials: {
    fontSize: 20,
    fontWeight: '600',
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  authorRole: {
    fontSize: 14,
  },
  sourceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 4,
  },
  sourceIcon: {
    marginRight: 8,
  },
  sourceName: {
    fontSize: 16,
    fontWeight: '600',
  },
  sourceDescription: {
    fontSize: 14,
    marginLeft: 28,
    marginBottom: 12,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  contactButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  contactIcon: {
    marginRight: 8,
  },
  contactText: {
    fontSize: 14,
    lineHeight: 20,
  },
  disclaimerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  disclaimerIcon: {
    marginRight: 8,
    marginTop: 2,
  },
  disclaimerText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  privacyItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  privacyIcon: {
    marginRight: 8,
    marginTop: 2,
  },
  privacyText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  versionText: {
    fontSize: 14,
  },
  footer: {
    marginTop: 8,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
  },
});