/**
 * Material You Dynamic Color Utility
 * 
 * Implementa un sistema di colori dinamici ispirato a Material You di Google.
 * Genera una palette di colori completa a partire da un colore primario.
 */

// Funzione per convertire colore HEX in RGB
const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [0, 0, 0];
};

// Funzione per convertire RGB in HEX
const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// Funzione per schiarire un colore
const lighten = (hex: string, amount: number): string => {
  const [r, g, b] = hexToRgb(hex);
  const newR = Math.min(255, r + amount);
  const newG = Math.min(255, g + amount);
  const newB = Math.min(255, b + amount);
  return rgbToHex(Math.round(newR), Math.round(newG), Math.round(newB));
};

// Funzione per scurire un colore
const darken = (hex: string, amount: number): string => {
  const [r, g, b] = hexToRgb(hex);
  const newR = Math.max(0, r - amount);
  const newG = Math.max(0, g - amount);
  const newB = Math.max(0, b - amount);
  return rgbToHex(Math.round(newR), Math.round(newG), Math.round(newB));
};

// Funzione per calcolare il colore complementare
const getComplementaryColor = (hex: string): string => {
  const [r, g, b] = hexToRgb(hex);
  return rgbToHex(255 - r, 255 - g, 255 - b);
};

// Funzione per calcolare il colore analogico
const getAnalogousColor = (hex: string, degree: number): string => {
  const [r, g, b] = hexToRgb(hex);
  
  // Converti RGB in HSL
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  // Modifica l'angolo di tonalità
  h = (h * 360 + degree) % 360 / 360;

  // Converti HSL in RGB
  let r1, g1, b1;

  if (s === 0) {
    r1 = g1 = b1 = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r1 = hue2rgb(p, q, h + 1/3);
    g1 = hue2rgb(p, q, h);
    b1 = hue2rgb(p, q, h - 1/3);
  }

  return rgbToHex(Math.round(r1 * 255), Math.round(g1 * 255), Math.round(b1 * 255));
};

// Funzione per calcolare il contrasto di un colore
const getContrastColor = (hex: string): string => {
  const [r, g, b] = hexToRgb(hex);
  // Calcola la luminosità percepita (formula standard)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};

// Funzione principale per generare la palette Material You
export const dynamicColor = (primaryColor: string, isDarkMode: boolean) => {
  // Colori base
  const primary = primaryColor;
  const primaryDark = darken(primary, 30);
  const primaryLight = lighten(primary, 30);
  
  // Colori secondari e terziari
  const secondary = getAnalogousColor(primary, 30);
  const tertiary = getAnalogousColor(primary, 60);
  
  // Colore di errore
  const error = '#F44336'; // Rosso standard Material Design
  
  // Colori di sfondo e superficie
  const background = isDarkMode ? '#121212' : '#F8F9FA';
  const surface = isDarkMode ? '#1E1E1E' : '#FFFFFF';
  const surfaceVariant = isDarkMode ? '#2D2D2D' : '#E1E3E1';
  
  // Colori container
  const primaryContainer = isDarkMode ? darken(primary, 10) : lighten(primary, 80);
  const secondaryContainer = isDarkMode ? darken(secondary, 10) : lighten(secondary, 80);
  const tertiaryContainer = isDarkMode ? darken(tertiary, 10) : lighten(tertiary, 80);
  const errorContainer = isDarkMode ? darken(error, 10) : lighten(error, 80);
  
  // Colori di testo e icone
  const onPrimary = getContrastColor(primary);
  const onPrimaryContainer = getContrastColor(primaryContainer);
  const onSecondary = getContrastColor(secondary);
  const onSecondaryContainer = getContrastColor(secondaryContainer);
  const onTertiary = getContrastColor(tertiary);
  const onTertiaryContainer = getContrastColor(tertiaryContainer);
  const onError = getContrastColor(error);
  const onErrorContainer = getContrastColor(errorContainer);
  const onSurface = isDarkMode ? '#E1E1E1' : '#1D1B20';
  const onSurfaceVariant = isDarkMode ? '#C4C7C5' : '#49454F';
  
  // Colori di outline
  const outline = isDarkMode ? '#938F99' : '#79747E';
  
  // Colori di elevazione per il tema scuro
  const surfaceContainer = isDarkMode ? '#2D2D2D' : '#F5F5F5';
  const surfaceContainerLow = isDarkMode ? '#252525' : '#F9F9F9';
  const surfaceContainerHigh = isDarkMode ? '#353535' : '#ECECEC';
  const surfaceContainerHighest = isDarkMode ? '#424242' : '#E0E0E0';
  
  return {
    primary,
    primaryDark,
    primaryLight,
    onPrimary,
    primaryContainer,
    onPrimaryContainer,
    secondary,
    secondaryContainer,
    onSecondary,
    onSecondaryContainer,
    tertiary,
    tertiaryContainer,
    onTertiary,
    onTertiaryContainer,
    error,
    errorContainer,
    onError,
    onErrorContainer,
    background,
    surface,
    surfaceVariant,
    onSurface,
    onSurfaceVariant,
    outline,
    surfaceContainer,
    surfaceContainerLow,
    surfaceContainerHigh,
    surfaceContainerHighest
  };
};
