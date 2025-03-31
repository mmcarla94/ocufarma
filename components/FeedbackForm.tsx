import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { sendFeedbackEmail } from '@/utils/emailjs';

interface FeedbackFormProps {
  onSubmit: (feedback: { message: string }) => void;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const colors = useThemeColors();
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) {
      Alert.alert('Errore', 'Per favore inserisci un messaggio di feedback');
      return;
    }

    setIsSending(true);
    try {
      await sendFeedbackEmail(message.trim());
      onSubmit({ message: message.trim() });
      setMessage('');
      Alert.alert('Successo', 'Il tuo feedback è stato inviato con successo');
    } catch (error) {
      Alert.alert('Errore', 'Si è verificato un errore durante l\'invio del feedback');
      console.error('Feedback submission error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colors.text }]}>
        Il tuo feedback
      </Text>
      <TextInput
        style={[
          styles.input,
          { 
            color: colors.text,
            backgroundColor: colors.card,
            borderColor: colors.border 
          }
        ]}
        value={message}
        onChangeText={setMessage}
        placeholder="Scrivi il tuo feedback qui..."
        placeholderTextColor={colors.gray[400]}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        editable={!isSending}
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: colors.primary },
          pressed && styles.buttonPressed,
          isSending && styles.buttonDisabled
        ]}
        onPress={handleSubmit}
        disabled={isSending}
      >
        <Text style={styles.buttonText}>
          {isSending ? 'Invio in corso...' : 'Invia Feedback'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 120,
  },
  button: {
    marginTop: 16,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});