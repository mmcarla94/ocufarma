import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { Search } from 'lucide-react-native';
import { useRouter } from 'expo-router';

interface FloatingActionButtonProps {
  onPress?: () => void;
  icon?: React.ComponentType<{ size: number; color: string }>;
  label?: string;
}

export function FloatingActionButton({
  onPress,
  icon: IconComponent = Search,
  label,
}: FloatingActionButtonProps) {
  const colors = useThemeColors();
  const router = useRouter();
  
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.push('/search');
    }
  };
  
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: colors.primary },
          pressed && styles.buttonPressed,
          label ? styles.buttonWithLabel : null,
        ]}
        onPress={handlePress}
      >
        <IconComponent size={24} color="white" />
        {label && <Text style={styles.label}>{label}</Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 80, // Increased from 20 to 80 to position above the tab bar
    right: 24,
    zIndex: 10,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonWithLabel: {
    flexDirection: 'row',
    width: 'auto',
    paddingHorizontal: 20,
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.96 }],
  },
  label: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 8,
  },
});