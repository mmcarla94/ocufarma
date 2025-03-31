import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, Alert, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useThemeColors } from '@/hooks/useThemeColors';
import { ArrowLeft, Shield, CheckCircle, X, AlertTriangle } from 'lucide-react-native';
import { usePremiumStore } from '@/store/premium-store';
import { useAuthStore } from '@/store/auth-store';

export default function SupportProjectScreen() {
  const colors = useThemeColors();
  const router = useRouter();
  const { isLoggedIn } = useAuthStore();
  const { isPremium, setPremium, getRemainingPremiumDays } = usePremiumStore();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const remainingDays = getRemainingPremiumDays();
  
  const handleBack = () => {
    router.back();
  };
  
  const handleSubscribe = () => {
    if (!isLoggedIn) {
      Alert.alert(
        "Accesso richiesto",
        "Per sottoscrivere un abbonamento premium devi prima accedere al tuo account.",
        [
          { text: "Annulla", style: "cancel" },
          { text: "Accedi", onPress: () => router.push('/login') }
        ]
      );
      return;
    }
    
    // Simulazione del processo di pagamento
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      
      // Calcola la data di scadenza (1 anno da oggi)
      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      
      // Imposta l'utente come premium
      setPremium(true, expiryDate.toISOString());
      
      Alert.alert(
        "Abbonamento attivato!",
        "Grazie per il tuo supporto! Il tuo abbonamento premium è stato attivato con successo.",
        [{ text: "OK" }]
      );
    }, 2000);
  };
  
  // Safe rendering of back button to avoid SVG issues on web
  const renderBackButton = () => {
    return (
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <View style={{ pointerEvents: 'none' }}>
          <ArrowLeft size={24} color={colors.primary} />
        </View>
      </TouchableOpacity>
    );
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen 
        options={{
          title: 'Sostieni il Progetto',
          headerTitleStyle: { 
            fontWeight: '600',
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerShadowVisible: false,
          headerLeft: () => renderBackButton(),
        }}
      />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={[styles.headerSection, { backgroundColor: colors.primary + '15' }]}>
          <Shield size={48} color={colors.primary} style={styles.headerIcon} />
          <Text style={[styles.headerTitle, { color: colors.text }]}>OcuFarma Premium</Text>
          <Text style={[styles.headerSubtitle, { color: colors.gray[600] }]}>
            Supporta lo sviluppo dell'app e goditi un'esperienza senza pubblicità
          </Text>
        </View>
        
        {isPremium ? (
          <View style={[styles.premiumActiveCard, { backgroundColor: colors.success + '15', borderColor: colors.success }]}>
            <CheckCircle size={24} color={colors.success} style={styles.premiumActiveIcon} />
            <Text style={[styles.premiumActiveTitle, { color: colors.success }]}>Abbonamento Premium Attivo</Text>
            <Text style={[styles.premiumActiveText, { color: colors.text }]}>
              {remainingDays === 1 ? 
                "Il tuo abbonamento scade domani." : 
                `Il tuo abbonamento scade tra ${remainingDays} giorni.`}
            </Text>
          </View>
        ) : (
          <View style={[styles.pricingCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.pricingTitle, { color: colors.text }]}>Abbonamento Premium</Text>
            <Text style={[styles.price, { color: colors.primary }]}>€4,99</Text>
            <Text style={[styles.pricePeriod, { color: colors.gray[600] }]}>all'anno</Text>
            
            <View style={styles.benefitsContainer}>
              <View style={styles.benefitItem}>
                <CheckCircle size={20} color={colors.success} style={styles.benefitIcon} />
                <Text style={[styles.benefitText, { color: colors.text }]}>Nessuna pubblicità</Text>
              </View>
              
              <View style={styles.benefitItem}>
                <CheckCircle size={20} color={colors.success} style={styles.benefitIcon} />
                <Text style={[styles.benefitText, { color: colors.text }]}>Supporta lo sviluppo dell'app</Text>
              </View>
              
              <View style={styles.benefitItem}>
                <CheckCircle size={20} color={colors.success} style={styles.benefitIcon} />
                <Text style={[styles.benefitText, { color: colors.text }]}>Accesso a tutte le funzionalità future</Text>
              </View>
            </View>
            
            <Pressable 
              style={[styles.subscribeButton, { backgroundColor: colors.primary }]}
              onPress={handleSubscribe}
              disabled={isProcessing}
            >
              <Text style={styles.subscribeButtonText}>
                {isProcessing ? "Elaborazione..." : "Abbonati Ora"}
              </Text>
            </Pressable>
          </View>
        )}
        
        <View style={[styles.infoCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.infoTitle, { color: colors.text }]}>Perché abbonarsi?</Text>
          <Text style={[styles.infoText, { color: colors.gray[600] }]}>
            OcuFarma è un'app sviluppata per aiutare pazienti e medici nella gestione delle terapie oftalmiche. 
            Il tuo supporto ci permette di continuare a migliorare l'app e aggiungere nuove funzionalità.
          </Text>
        </View>
        
        <View style={[styles.infoCard, { backgroundColor: colors.warning + '15', borderColor: colors.warning }]}>
          <View style={styles.warningHeader}>
            <AlertTriangle size={20} color={colors.warning} style={styles.warningIcon} />
            <Text style={[styles.warningTitle, { color: colors.warning }]}>Importante</Text>
          </View>
          <Text style={[styles.infoText, { color: colors.gray[600] }]}>
            Questo è un ambiente di test. Nessun pagamento reale verrà processato. 
            In un'app di produzione, qui verrebbe integrato un sistema di pagamento sicuro.
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
  backButton: {
    marginRight: 10,
    padding: 8,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  headerSection: {
    alignItems: 'center',
    padding: 24,
    borderRadius: 12,
    marginBottom: 16,
  },
  headerIcon: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  pricingCard: {
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 1,
  },
  pricingTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  price: {
    fontSize: 36,
    fontWeight: '700',
  },
  pricePeriod: {
    fontSize: 16,
    marginBottom: 24,
  },
  benefitsContainer: {
    width: '100%',
    marginBottom: 24,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  benefitIcon: {
    marginRight: 12,
  },
  benefitText: {
    fontSize: 16,
  },
  subscribeButton: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  subscribeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  infoCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
  },
  premiumActiveCard: {
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 1,
  },
  premiumActiveIcon: {
    marginBottom: 16,
  },
  premiumActiveTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  premiumActiveText: {
    fontSize: 16,
    textAlign: 'center',
  },
  warningHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  warningIcon: {
    marginRight: 8,
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
});