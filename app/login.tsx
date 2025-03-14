import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react-native';
import { useAuthStore } from '@/store/auth-store';
import { useThemeColors } from '@/hooks/useThemeColors';

export default function LoginScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  const { login } = useAuthStore();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Errore', 'Inserisci email e password');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      
      if (success) {
        router.replace('/');
      } else {
        Alert.alert('Errore di accesso', 'Email o password non validi');
      }
    } catch (error) {
      Alert.alert('Errore', 'Si è verificato un errore durante l\'accesso');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleRegister = () => {
    router.push('/register');
  };
  
  // Per demo, mostra credenziali di accesso
  const handleDemoLogin = () => {
    setEmail('demo@example.com');
    setPassword('password123');
  };

  const handleBack = () => {
    router.back();
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen 
        options={{ 
          title: 'Accedi',
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
        <Text style={[styles.title, { color: colors.text }]}>Benvenuto in OcuFarma</Text>
        <Text style={[styles.subtitle, { color: colors.gray[600] }]}>Accedi per gestire le tue terapie</Text>
        
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={[styles.label, { color: colors.text }]}>Email</Text>
            <TextInput
              style={[styles.input, { 
                backgroundColor: colors.gray[100], 
                color: colors.text 
              }]}
              value={email}
              onChangeText={setEmail}
              placeholder="Inserisci la tua email"
              placeholderTextColor={colors.gray[400]}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          
          <View style={styles.formGroup}>
            <Text style={[styles.label, { color: colors.text }]}>Password</Text>
            <View style={[styles.passwordContainer, { backgroundColor: colors.gray[100] }]}>
              <TextInput
                style={[styles.passwordInput, { color: colors.text }]}
                value={password}
                onChangeText={setPassword}
                placeholder="Inserisci la tua password"
                placeholderTextColor={colors.gray[400]}
                secureTextEntry={!showPassword}
              />
              <Pressable 
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
              >
                {showPassword ? (
                  <EyeOff size={20} color={colors.gray[500]} />
                ) : (
                  <Eye size={20} color={colors.gray[500]} />
                )}
              </Pressable>
            </View>
          </View>
          
          <Pressable style={styles.forgotPassword}>
            <Text style={[styles.forgotPasswordText, { color: colors.primary }]}>Password dimenticata?</Text>
          </Pressable>
          
          <Pressable 
            style={({ pressed }) => [
              styles.loginButton,
              { backgroundColor: colors.primary },
              pressed && styles.buttonPressed,
              isLoading && styles.buttonDisabled
            ]}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text style={styles.loginButtonText}>
              {isLoading ? 'Accesso in corso...' : 'Accedi'}
            </Text>
          </Pressable>
          
          <Pressable 
            style={({ pressed }) => [
              styles.demoButton,
              { borderColor: colors.primary },
              pressed && styles.buttonPressed
            ]}
            onPress={handleDemoLogin}
          >
            <Text style={[styles.demoButtonText, { color: colors.primary }]}>
              Usa credenziali demo
            </Text>
          </Pressable>
        </View>
        
        <View style={styles.registerContainer}>
          <Text style={[styles.registerText, { color: colors.gray[600] }]}>Non hai un account? </Text>
          <Pressable onPress={handleRegister}>
            <Text style={[styles.registerLink, { color: colors.primary }]}>Registrati</Text>
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
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
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
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  eyeButton: {
    padding: 12,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontSize: 14,
  },
  loginButton: {
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  demoButton: {
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  demoButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    fontSize: 14,
  },
  registerLink: {
    fontSize: 14,
    fontWeight: '500',
  },
  backButton: {
    padding: 8,
  },
});