import React from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { Search, X } from 'lucide-react-native';
import { useThemeColors } from '@/hooks/useThemeColors';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  style?: any;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Cerca...',
  autoFocus = false,
  style,
}) => {
  const colors = useThemeColors();
  
  const handleClear = () => {
    onChangeText('');
  };
  
  return (
    <View style={[
      styles.container, 
      { 
        backgroundColor: colors.gray[50],
        borderColor: colors.gray[200],
        shadowColor: colors.text
      },
      style
    ]}>
      <View style={styles.searchIconContainer}>
        <Search size={18} color={colors.primary} />
      </View>
      <TextInput
        style={[styles.input, { color: colors.text }]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.gray[500]}
        autoFocus={autoFocus}
        clearButtonMode="never"
      />
      {value.length > 0 && (
        <Pressable onPress={handleClear} style={styles.clearButton}>
          <X size={18} color={colors.gray[500]} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    height: 48,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  searchIconContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: '100%',
  },
  clearButton: {
    padding: 12,
  },
});