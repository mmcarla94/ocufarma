import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, ActivityIndicator, Platform, TouchableOpacity } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import TherapyForm from '@/components/TherapyForm';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useTherapyStore } from '@/store/therapy-store';
import { ArrowLeft } from 'lucide-react-native';

export default function EditTherapyScreen() {
  const colors = useThemeColors();
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { getTherapyById } = useTherapyStore();
  const [therapy, setTherapy] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      const therapyData = getTherapyById(id.toString());
      setTherapy(therapyData);
      setLoading(false);
    }
  }, [id, getTherapyById]);
  
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
  
  if (loading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <Stack.Screen 
          options={{
            title: 'Modifica Terapia',
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
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </SafeAreaView>
    );
  }
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen 
        options={{
          title: 'Modifica Terapia',
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
          initialValues={therapy} 
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
    padding: 8, // Increased padding for better touch target
  }
});