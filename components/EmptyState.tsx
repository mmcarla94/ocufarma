import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { 
  Calendar, 
  Search, 
  Heart, 
  Pill, 
  Eye, 
  Clock, 
  AlertCircle, 
  FileText,
  User
} from 'lucide-react-native';

type EmptyStateProps = {
  icon: 'Calendar' | 'Search' | 'Heart' | 'Pill' | 'Eye' | 'Clock' | 'Alert' | 'Document' | 'User';
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  compact?: boolean; // New prop for compact mode
};

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  icon, 
  title, 
  description, 
  actionLabel, 
  onAction,
  compact = false
}) => {
  const colors = useThemeColors();
  
  const getIcon = () => {
    const iconSize = compact ? 40 : 60;
    const iconColor = colors.gray[400];
    
    switch (icon) {
      case 'Calendar':
        return <Calendar size={iconSize} color={iconColor} />;
      case 'Search':
        return <Search size={iconSize} color={iconColor} />;
      case 'Heart':
        return <Heart size={iconSize} color={iconColor} />;
      case 'Pill':
        return <Pill size={iconSize} color={iconColor} />;
      case 'Eye':
        return <Eye size={iconSize} color={iconColor} />;
      case 'Clock':
        return <Clock size={iconSize} color={iconColor} />;
      case 'Alert':
        return <AlertCircle size={iconSize} color={iconColor} />;
      case 'Document':
        return <FileText size={iconSize} color={iconColor} />;
      case 'User':
        return <User size={iconSize} color={iconColor} />;
      default:
        return <AlertCircle size={iconSize} color={iconColor} />;
    }
  };
  
  return (
    <View style={[
      styles.container, 
      compact && styles.compactContainer
    ]}>
      <View style={[
        styles.iconContainer, 
        { backgroundColor: colors.gray[100] },
        compact && styles.compactIconContainer
      ]}>
        {getIcon()}
      </View>
      
      <Text style={[
        styles.title, 
        { color: colors.text },
        compact && styles.compactTitle
      ]}>
        {title}
      </Text>
      
      <Text style={[
        styles.description, 
        { color: colors.gray[600] },
        compact && styles.compactDescription
      ]}>
        {description}
      </Text>
      
      {actionLabel && onAction && (
        <Pressable 
          style={[
            styles.actionButton, 
            { backgroundColor: colors.primary },
            compact && styles.compactActionButton
          ]}
          onPress={onAction}
        >
          <Text style={[
            styles.actionButtonText,
            compact && styles.compactActionButtonText
          ]}>
            {actionLabel}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  compactContainer: {
    padding: 10,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  compactIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  compactTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  compactDescription: {
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 18,
  },
  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  compactActionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  actionButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  compactActionButtonText: {
    fontSize: 14,
  }
});