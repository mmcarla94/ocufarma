import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView, Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Eye, EyeOff, ArrowLeft, ChevronDown } from 'lucide-react-native';
import { useAuthStore } from '@/store/auth-store';
import { useThemeColors } from '@/hooks/useThemeColors';
import { UserRole } from '@/types/medication';

export default function RegisterScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  const { register } = useAuthStore();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<UserRole>('paziente');
  const [showRoleOptions, setShowRoleOptions] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  
  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Errore', 'Compila tutti i campi');
      return;
    }
    
    if (password !== confirmPassword) {
      Alert.alert('Errore', 'Le password non corrispondono');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await register(name, email, password, role);
      
      if (success) {
        setRegistrationComplete(true);
        Alert.alert(
          'Registrazione completata', 
          'Il tuo account è stato creato con successo. Ti abbiamo inviato un\'email di conferma all\'indirizzo fornito. Per favore, verifica la tua email per attivare il tuo account.',
          [{ text: 'OK', onPress: () => router.replace('/login') }]
        );
      }
      // I messaggi di errore sono gestiti all'interno della funzione register
    } catch (error) {
      Alert.alert('Errore', 'Si è verificato un errore durante la registrazione');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleLogin = () => {
    router.push('/login');
  };

  const handleBack = () => {
    router.back();
  };
  
  const toggleRoleOptions = () => {
    setShowRoleOptions(!showRoleOptions);
  };
  
  const selectRole = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setShowRoleOptions(false);
  };
  
  const getRoleLabel = (role: UserRole) => {
    return role === 'medico' ? 'Medico' : 'Paziente';
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen 
        options={{ 
          title: 'Registrati',
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
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Pressable onPress={handleBack} style={styles.backButtonInline}>
            <ArrowLeft size={24} color={colors.primary} />
          </Pressable>
          <Text style={[styles.title, { color: colors.text }]}>Crea un account</Text>
        </View>
        <Text style={[styles.subtitle, { color: colors.gray[600] }]}>Registrati per gestire le tue terapie</Text>
        
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={[styles.label, { color: colors.text }]}>Nome completo</Text>
            <TextInput
              style={[styles.input, { 
                backgroundColor: colors.gray[100], 
                color: colors.text 
              }]}
              value={name}
              onChangeText={setName}
              placeholder="Inserisci il tuo nome"
              placeholderTextColor={colors.gray[400]}
            />
          </View>
          
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
            <Text style={[styles.label, { color: colors.text }]}>Ruolo</Text>
            <View style={styles.roleSelectContainer}>
              <Pressable 
                style={[styles.roleSelect, { backgroundColor: colors.gray[100] }]}
                onPress={toggleRoleOptions}
              >
                <Text style={[styles.roleSelectText, { color: colors.text }]}>
                  {getRoleLabel(role)}
                </Text>
                <ChevronDown size={20} color={colors.gray[500]} />
              </Pressable>
              
              {showRoleOptions && (
                <View style={[styles.roleOptions, { backgroundColor: colors.gray[100] }]}>
                  <Pressable 
                    style={[
                      styles.roleOption,
                      role === 'medico' && { backgroundColor: colors.gray[200] }
                    ]}
                    onPress={() => selectRole('medico')}
                  >
                    <Text style={[styles.roleOptionText, { color: colors.text }]}>Medico</Text>
                  </Pressable>
                  <Pressable 
                    style={[
                      styles.roleOption,
                      role === 'paziente' && { backgroundColor: colors.gray[200] }
                    ]}
                    onPress={() => selectRole('paziente')}
                  >
                    <Text style={[styles.roleOptionText, { color: colors.text }]}>Paziente</Text>
                  </Pressable>
                </View>
              )}
            </View>
          </View>
          
          <View style={styles.formGroup}>
            <Text style={[styles.label, { color: colors.text }]}>Password</Text>
            <View style={[styles.passwordContainer, { backgroundColor: colors.gray[100] }]}>
              <TextInput
                style={[styles.passwordInput, { color: colors.text }]}
                value={password}
                onChangeText={setPassword}
                placeholder="Crea una password"
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
          
          <View style={styles.formGroup}>
            <Text style={[styles.label, { color: colors.text }]}>Conferma Password</Text>
            <View style={[styles.passwordContainer, { backgroundColor: colors.gray[100] }]}>
              <TextInput
                style={[styles.passwordInput, { color: colors.text }]}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Conferma la tua password"
                placeholderTextColor={colors.gray[400]}
                secureTextEntry={!showConfirmPassword}
              />
              <Pressable 
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.eyeButton}
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} color={colors.gray[500]} />
                ) : (
                  <Eye size={20} color={colors.gray[500]} />
                )}
              </Pressable>
            </View>
          </View>
          
          <Pressable 
            style={({ pressed }) => [
              styles.registerButton,
              { backgroundColor: colors.primary },
              pressed && styles.buttonPressed,
              isLoading && styles.buttonDisabled
            ]}
            onPress={handleRegister}
            disabled={isLoading}
          >
            <Text style={styles.registerButtonText}>
              {isLoading ? 'Registrazione in corso...' : 'Registrati'}
            </Text>
          </Pressable>
        </View>
        
        <View style={styles.loginContainer}>
          <Text style={[styles.loginText, { color: colors.gray[600] }]}>Hai già un account? </Text>
          <Pressable onPress={handleLogin}>
            <Text style={[styles.loginLink, { color: colors.primary }]}>Accedi</Text>
          </Pressable>
        </View>
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
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  backButtonInline: {
    marginRight: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
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
  roleSelectContainer: {
    position: 'relative',
    zIndex: 1,
  },
  roleSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 12,
  },
  roleSelectText: {
    fontSize: 16,
  },
  roleOptions: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    borderRadius: 8,
    marginTop: 4,
    overflow: 'hidden',
    zIndex: 2,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  roleOption: {
    padding: 12,
  },
  roleOptionText: {
    fontSize: 16,
  },
  registerButton: {
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
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  loginText: {
    fontSize: 14,
  },
  loginLink: {
    fontSize: 14,
    fontWeight: '500',
  },
  backButton: {
    padding: 8,
  },
});