import React from 'react';
import { View, StyleSheet, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import TherapyForm from '@/components/TherapyForm';
import { useThemeColors } from '@/hooks/useThemeColors';
import { ArrowLeft } from 'lucide-react-native';

export default function NewTherapyScreen() {
  const colors = useThemeColors();
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // Recupera i parametri passati dalla pagina del farmaco
  const medicationId = params.medicationId as string;
  const medicationName = params.medicationName as string;
  
  const handleBack = () => {
    router.back();
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
          title: 'Aggiungi Farmaco',
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
      
      <View style={styles.formContainer}>
        <TherapyForm 
          initialValues={medicationId ? { medicationId } : null} 
          onSubmit={() => {
            // Navigate back to therapies tab after successful submission
            router.push('/(tabs)/therapies');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
  },
  backButton: {
    marginRight: 10,
    padding: 8, // Increased padding for better touch target
  }
});