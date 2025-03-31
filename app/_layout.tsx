import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Platform, useColorScheme } from "react-native";
import * as Notifications from 'expo-notifications';
import { useThemeStore } from "@/store/theme-store";
import { useThemeColors } from "@/hooks/useThemeColors";
import { useTherapyStore } from "@/store/therapy-store";
import NotificationManager from "@/components/NotificationManager";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Configure notifications
if (Platform.OS !== 'web') {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
}

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });
  
  const colorScheme = useColorScheme();
  const { useSystemTheme, setTheme } = useThemeStore();
  const colors = useThemeColors();

  // Inizializza il sistema di notifiche all'avvio dell'app
  // Non estraiamo più la funzione loadTherapies, lasciamo che sia il NotificationManager a gestirla
  const therapyStore = useTherapyStore();
  
  useEffect(() => {
    // Non facciamo nulla qui, la gestione delle notifiche è delegata al NotificationManager
  }, []);

  // Sincronizza il tema di sistema con lo store solo se useSystemTheme è true
  useEffect(() => {
    if (useSystemTheme && colorScheme) {
      setTheme(colorScheme === 'dark');
    }
  }, [colorScheme, useSystemTheme]);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NotificationManager />
      <RootLayoutNav />
    </>
  );
}

function RootLayoutNav() {
  const colors = useThemeColors();
  
  // Common header styles for consistency
  const commonHeaderStyle = {
    backgroundColor: colors.background,
  };
  
  const commonHeaderTitleStyle = {
    color: colors.text,
    fontWeight: '600',
    fontSize: 18,
  };
  
  return (
    <Stack screenOptions={{
      headerStyle: commonHeaderStyle,
      headerTitleStyle: commonHeaderTitleStyle,
      headerTintColor: colors.primary,
      contentStyle: {
        backgroundColor: colors.background,
      },
      headerShadowVisible: false,
    }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen 
        name="medication/[id]" 
        options={{ 
          title: "Dettagli Farmaco",
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="category/[id]" 
        options={{ 
          title: "Categoria",
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="therapy/[id]" 
        options={{ 
          title: "Dettagli Terapia",
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="new-therapy" 
        options={{ 
          title: "Aggiungi Farmaco",
          headerShown: true
        }} 
      />
      <Stack.Screen 
        name="edit-therapy/[id]" 
        options={{ 
          title: "Modifica Terapia",
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="search" 
        options={{ 
          title: "Cerca",
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="login" 
        options={{ 
          title: "Accedi",
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="register" 
        options={{ 
          title: "Registrati",
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="barcode-scan" 
        options={{ 
          title: "Scansiona Codice",
          headerTransparent: true,
          headerTintColor: 'white',
          headerShown: false
        }} 
      />
    </Stack>
  );
}