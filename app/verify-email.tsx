import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, Alert } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, CheckCircle, RefreshCw } from 'lucide-react-native';
import { useAuthStore } from '@/store/auth-store';
import { useThemeColors } from '@/hooks/useThemeColors';

export default function VerifyEmailScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  const { email } = useLocalSearchParams();
  const { verifyEmail, resendVerificationEmail } = useAuthStore();
  
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  
  const handleVerify = async () => {
    if (!verificationCode.trim()) {
      Alert.alert('Errore', 'Inserisci il codice di verifica');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await verifyEmail(String(email), verificationCode);
      
      if (success) {
        Alert.alert(
          'Verifica completata',
          'Il tuo account è stato verificato con successo. Ora puoi accedere.',
          [
            { text: 'OK', onPress: () => router.replace('/login') }
          ]
        );
      } else {
        Alert.alert('Errore', 'Codice di verifica non valido. Riprova.');
      }
    } catch (error) {
      Alert.alert('Errore', 'Si è verificato un errore durante la verifica');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleResendCode = async () => {
    setIsResending(true);
    
    try {
      await resendVerificationEmail(String(email));
    } catch (error) {
      Alert.alert('Errore', 'Si è verificato un errore durante l\'invio del codice');
    } finally {
      setIsResending(false);
    }
  };
  
  const handleBack = () => {
    router.back();
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen 
        options={{ 
          title: 'Verifica Email',
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleStyle: {
            color: colors.text,
          },
          headerTintColor: colors.primary,
          headerLeft: () => (
            <Pressable onPress={handleBack} style={styles.backButton}>
              <ArrowLeft size={24} color={colors.primary} />
            </Pressable>
          ),
        }} 
      />
      
      <View style={styles.content}>
        <CheckCircle size={64} color={colors.primary} style={styles.icon} />
        
        <Text style={[styles.title, { color: colors.text }]}>Verifica il tuo indirizzo email</Text>
        <Text style={[styles.subtitle, { color: colors.gray[600] }]}>
          Abbiamo inviato un codice di verifica a {email}
        </Text>
        
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={[styles.label, { color: colors.text }]}>Codice di verifica</Text>
            <TextInput
              style={[styles.input, { 
                backgroundColor: colors.gray[100], 
                color: colors.text 
              }]}
              value={verificationCode}
              onChangeText={setVerificationCode}
              placeholder="Inserisci il codice a 6 cifre"
              placeholderTextColor={colors.gray[400]}
              keyboardType="number-pad"
              maxLength={6}
            />
          </View>
          
          <Pressable 
            style={({ pressed }) => [
              styles.verifyButton,
              { backgroundColor: colors.primary },
              pressed && styles.buttonPressed,
              isLoading && styles.buttonDisabled
            ]}
            onPress={handleVerify}
            disabled={isLoading}
          >
            <Text style={styles.verifyButtonText}>
              {isLoading ? 'Verifica in corso...' : 'Verifica'}
            </Text>
          </Pressable>
        </View>
        
        <View style={styles.resendContainer}>
          <Text style={[styles.resendText, { color: colors.gray[600] }]}>Non hai ricevuto il codice? </Text>
          <Pressable 
            onPress={handleResendCode}
            disabled={isResending}
            style={styles.resendButton}
          >
            <Text style={[styles.resendButtonText, { color: colors.primary }]}>
              {isResending ? 'Invio in corso...' : 'Invia di nuovo'}
            </Text>
            {isResending && <RefreshCw size={14} color={colors.primary} style={styles.resendIcon} />}
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 4,
  },
  verifyButton: {
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  resendText: {
    fontSize: 14,
  },
  resendButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  resendIcon: {
    marginLeft: 4,
  },
  backButton: {
    padding: 8,
  },
});
