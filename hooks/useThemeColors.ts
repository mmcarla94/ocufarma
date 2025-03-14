import { useColorScheme } from 'react-native';
import { useThemeStore } from '@/store/theme-store';

export const useThemeColors = () => {
  const colorScheme = useColorScheme();
  const { isDarkMode, useSystemTheme } = useThemeStore();
  
  // Determine if we should use dark mode
  const shouldUseDarkMode = useSystemTheme ? colorScheme === 'dark' : isDarkMode;
  
  const lightColors = {
    primary: '#4C6EF5',
    primaryLight: '#748FFC',
    primaryDark: '#3B5BDB',
    secondary: '#20C997',
    background: '#F8F9FA',
    card: '#FFFFFF',
    text: '#212529',
    border: '#DEE2E6',
    notification: '#FA5252',
    error: '#FA5252',
    warning: '#FCC419',
    success: '#40C057',
    info: '#15AABF',
    gray: {
      100: '#F8F9FA',
      200: '#E9ECEF',
      300: '#DEE2E6',
      400: '#CED4DA',
      500: '#ADB5BD',
      600: '#6C757D',
      700: '#495057',
      800: '#343A40',
      900: '#212529',
    },
    category: {
      antiGlaucoma: '#4C6EF5',
      antiInfective: '#FA5252',
      antiInflammatory: '#FD7E14',
      antiAllergic: '#20C997',
      mydriatic: '#7950F2',
      artificialTears: '#15AABF',
      supplements: '#40C057',
      diagnostic: '#ADB5BD',
      anesthetic: '#7048E8',
      intravitreal: '#F783AC',
      antiseptic: '#FCC419',
    }
  };
  
  const darkColors = {
    primary: '#748FFC',
    primaryLight: '#91A7FF',
    primaryDark: '#5C7CFA',
    secondary: '#38D9A9',
    background: '#121212',
    card: '#1E1E1E',
    text: '#F8F9FA',
    border: '#343A40',
    notification: '#FF6B6B',
    error: '#FF6B6B',
    warning: '#FFD43B',
    success: '#51CF66',
    info: '#22B8CF',
    gray: {
      100: '#212529',
      200: '#343A40',
      300: '#495057',
      400: '#6C757D',
      500: '#ADB5BD',
      600: '#CED4DA',
      700: '#DEE2E6',
      800: '#E9ECEF',
      900: '#F8F9FA',
    },
    category: {
      antiGlaucoma: '#748FFC',
      antiInfective: '#FF6B6B',
      antiInflammatory: '#FF922B',
      antiAllergic: '#38D9A9',
      mydriatic: '#9775FA',
      artificialTears: '#22B8CF',
      supplements: '#51CF66',
      diagnostic: '#CED4DA',
      anesthetic: '#845EF7',
      intravitreal: '#F783AC',
      antiseptic: '#FFD43B',
    }
  };
  
  return shouldUseDarkMode ? darkColors : lightColors;
};