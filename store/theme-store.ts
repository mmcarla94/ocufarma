import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeState {
  isDarkMode: boolean;
  useSystemTheme: boolean;
  notificationsEnabled: boolean;
  setTheme: (isDark: boolean) => void;
  toggleTheme: () => void;
  setUseSystemTheme: (useSystem: boolean) => void;
  toggleNotifications: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      useSystemTheme: true,
      notificationsEnabled: true,
      setTheme: (isDark) => set({ isDarkMode: isDark }),
      toggleTheme: () => set((state) => ({ 
        isDarkMode: !state.isDarkMode,
        useSystemTheme: false // Disable system theme when manually toggling
      })),
      setUseSystemTheme: (useSystem) => set({ useSystemTheme: useSystem }),
      toggleNotifications: () => set((state) => ({ notificationsEnabled: !state.notificationsEnabled })),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);