import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useThemeColors } from '@/hooks/useThemeColors';
import { Category } from '@/types/medication';
import { Thermometer } from 'lucide-react-native';

interface CategoryCardProps {
  category: Category;
  fullWidth?: boolean;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, fullWidth = true }) => {
  const router = useRouter();
  const colors = useThemeColors();
  
  const handlePress = () => {
    router.push(`/category/${category.id}`);
  };
  
  // Render the icon - use Thermometer for antiseptics
  const renderIcon = (size: number, color: string) => {
    if (category.id === 'antiseptic' || category.name.toLowerCase() === 'antisettici') {
      return <Thermometer size={size} color={color} />;
    }
    
    if (category.icon) {
      return <category.icon size={size} color={color} />;
    }
    
    return null;
  };
  
  if (fullWidth) {
    return (
      <Pressable 
        style={[
          styles.fullWidthCard, 
          { 
            backgroundColor: category.color + '20', // Light colored background
            borderColor: colors.border,
            shadowColor: category.color,
          }
        ]}
        onPress={handlePress}
      >
        <View style={styles.fullWidthContent}>
          <View style={styles.iconColumn}>
            <View 
              style={[
                styles.fullWidthIconContainer, 
                { backgroundColor: category.color + '30' }
              ]}
            >
              {renderIcon(20, category.color)}
            </View>
          </View>
          <View style={styles.fullWidthTextContainer}>
            <Text 
              style={[styles.fullWidthTitle, { color: colors.text }]}
              numberOfLines={1}
            >
              {category.name}
            </Text>
            <Text 
              style={[styles.fullWidthDescription, { color: colors.gray[600] }]}
              numberOfLines={2}
            >
              {category.description}
            </Text>
            <Text 
              style={[styles.fullWidthCount, { color: category.color }]}
              numberOfLines={1}
            >
              {category.medicationCount} elementi
            </Text>
          </View>
        </View>
      </Pressable>
    );
  }
  
  return (
    <Pressable 
      style={[
        styles.card, 
        { 
          backgroundColor: category.color + '15', // More visible background color (15% opacity)
          borderColor: colors.border,
          shadowColor: category.color,
        }
      ]}
      onPress={handlePress}
    >
      <View style={styles.cardContent}>
        <View 
          style={[
            styles.iconContainer, 
            { backgroundColor: category.color + '30' } // More visible icon background (30% opacity)
          ]}
        >
          {renderIcon(15, category.color)}
        </View>
        <Text 
          style={[styles.title, { color: colors.text }]} 
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {category.name}
        </Text>
        {/* Description removed from grid view as requested */}
        <Text 
          style={[styles.count, { color: category.color }]}
          numberOfLines={1}
        >
          {category.medicationCount} elementi
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%', // Full width for small screens
    maxWidth: 160, // Maximum width to maintain design
    borderRadius: 12,
    padding: 16, // Increased padding
    marginBottom: 16,
    borderWidth: 1,
    height: 130, // Reduced height
    // 3D effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  cardContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', // This ensures symmetrical spacing
    height: '100%',
  },
  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 4,
    width: '100%',
  },
  count: {
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
  },
  fullWidthCard: {
    width: '100%',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    height: 110, // Reduced height
    // Enhanced 3D effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  fullWidthContent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  iconColumn: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  fullWidthIconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidthTextContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  fullWidthTitle: {
    fontSize: 16, // Reduced from 17 to 16
    fontWeight: '600',
  },
  fullWidthDescription: {
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'left',
  },
  fullWidthCount: {
    fontSize: 12,
    fontWeight: '500',
  },
});