import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView, Alert, ActivityIndicator, Linking, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { ArrowLeft, Send, AlertTriangle } from 'lucide-react-native';
import { useThemeColors } from '@/hooks/useThemeColors';

export default function FeedbackScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorReport, setIsErrorReport] = useState(false);
  
  const handleBack = () => {
    router.back();
  };
  
  const getDeviceInfo = () => {
    // Utilizziamo solo Platform che è incluso in React Native
    const deviceInfo = `
    
    --------------------
    Informazioni dispositivo:
    - App: OcuFarma
    - Piattaforma: ${Platform.OS}
    - Versione: ${Platform.Version}
    - Data: ${new Date().toLocaleString()}
    `;
    
    return deviceInfo;
  };
  
  const handleSendFeedback = async () => {
    if (!subject.trim() || !message.trim()) {
      Alert.alert('Errore', 'Compila tutti i campi');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const fullMessage = message + (isErrorReport ? getDeviceInfo() : '');
      const emailSubject = isErrorReport ? `[Errore] ${subject}` : `[Feedback] ${subject}`;
      
      // Utilizziamo Linking per aprire l'app di posta predefinita
      const url = `mailto:ocufarma.app@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(fullMessage)}`;
      
      const canOpen = await Linking.canOpenURL(url);
      
      if (canOpen) {
        await Linking.openURL(url);
        
        Alert.alert(
          'Grazie!',
          isErrorReport 
            ? 'La tua segnalazione è stata preparata. Completa l\'invio nell\'app di posta elettronica.'
            : 'Il tuo feedback è stato preparato. Completa l\'invio nell\'app di posta elettronica.',
          [{ text: 'OK', onPress: () => router.back() }]
        );
      } else {
        Alert.alert(
          'Errore',
          'Non è possibile inviare email da questo dispositivo. Contattaci direttamente all\'indirizzo ocufarma.app@gmail.com'
        );
      }
    } catch (error) {
      console.error('Errore nell\'invio del feedback:', error);
      Alert.alert('Errore', 'Si è verificato un errore durante l\'invio. Riprova più tardi.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen 
        options={{ 
          title: isErrorReport ? 'Segnala un errore' : 'Invia feedback',
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleStyle: {
            color: colors.onSurface,
          },
          headerTintColor: colors.primary,
          headerLeft: () => (
            <Pressable onPress={handleBack} style={styles.backButton}>
              <ArrowLeft size={24} color={colors.primary} />
            </Pressable>
          ),
        }} 
      />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.headerContainer}>
          {isErrorReport ? (
            <AlertTriangle size={48} color={colors.error} style={styles.icon} />
          ) : (
            <Send size={48} color={colors.primary} style={styles.icon} />
          )}
          
          <Text style={[styles.title, { color: colors.onSurface }]}>
            {isErrorReport ? 'Segnala un errore' : 'Invia feedback'}
          </Text>
          
          <Text style={[styles.subtitle, { color: colors.onSurfaceVariant }]}>
            {isErrorReport 
              ? 'Aiutaci a migliorare OcuFarma segnalando eventuali errori o problemi riscontrati.'
              : 'Il tuo feedback è importante per noi! Raccontaci la tua esperienza con OcuFarma.'}
          </Text>
        </View>
        
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={[styles.label, { color: colors.onSurface }]}>Oggetto</Text>
            <TextInput
              style={[styles.input, { 
                backgroundColor: colors.surfaceVariant, 
                color: colors.onSurface 
              }]}
              value={subject}
              onChangeText={setSubject}
              placeholder="Inserisci l'oggetto"
              placeholderTextColor={colors.onSurfaceVariant}
            />
          </View>
          
          <View style={styles.formGroup}>
            <Text style={[styles.label, { color: colors.onSurface }]}>Messaggio</Text>
            <TextInput
              style={[styles.textArea, { 
                backgroundColor: colors.surfaceVariant, 
                color: colors.onSurface 
              }]}
              value={message}
              onChangeText={setMessage}
              placeholder={isErrorReport 
                ? "Descrivi il problema riscontrato. Includi i passaggi per riprodurlo, se possibile."
                : "Scrivi qui il tuo feedback..."}
              placeholderTextColor={colors.onSurfaceVariant}
              multiline
              textAlignVertical="top"
              numberOfLines={8}
            />
          </View>
          
          <Pressable 
            style={({ pressed }) => [
              styles.toggleButton,
              { 
                backgroundColor: isErrorReport ? colors.errorContainer : colors.surfaceVariant,
                borderColor: isErrorReport ? colors.error : colors.outline,
              },
              pressed && styles.buttonPressed
            ]}
            onPress={() => setIsErrorReport(!isErrorReport)}
          >
            <AlertTriangle 
              size={20} 
              color={isErrorReport ? colors.onErrorContainer : colors.onSurfaceVariant} 
              style={styles.toggleIcon}
            />
            <Text 
              style={[
                styles.toggleText, 
                { 
                  color: isErrorReport ? colors.onErrorContainer : colors.onSurfaceVariant,
                  fontWeight: isErrorReport ? '600' : '400'
                }
              ]}
            >
              {isErrorReport 
                ? 'Sto segnalando un errore' 
                : 'Clicca qui per segnalare un errore'}
            </Text>
          </Pressable>
          
          <Pressable 
            style={({ pressed }) => [
              styles.sendButton,
              { backgroundColor: colors.primary },
              pressed && styles.buttonPressed,
              isLoading && styles.buttonDisabled
            ]}
            onPress={handleSendFeedback}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <>
                <Send size={20} color={colors.onPrimary} style={styles.sendIcon} />
                <Text style={[styles.sendButtonText, { color: colors.onPrimary }]}>
                  Invia
                </Text>
              </>
            )}
          </Pressable>
        </View>
        
        <Text style={[styles.noteText, { color: colors.onSurfaceVariant }]}>
          {isErrorReport 
            ? 'Nota: Verranno incluse automaticamente informazioni sul dispositivo per aiutarci a diagnosticare il problema.'
            : 'Grazie per il tuo contributo a migliorare OcuFarma!'}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
    flexGrow: 1,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  icon: {
    marginBottom: 16,
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
    marginBottom: 8,
  },
  form: {
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
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
  },
  textArea: {
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    minHeight: 150,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
  },
  toggleIcon: {
    marginRight: 8,
  },
  toggleText: {
    fontSize: 14,
  },
  sendButton: {
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  sendIcon: {
    marginRight: 8,
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  noteText: {
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  backButton: {
    padding: 8,
  },
});
