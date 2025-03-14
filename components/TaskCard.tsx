import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Task } from '@/types/task';
import { colors } from '@/constants/colors';
import { Calendar, Tag, CheckCircle, Circle, AlertCircle } from 'lucide-react-native';
import { useRouter } from 'expo-router';

interface TaskCardProps {
  task: Task;
  onStatusChange?: (id: string, status: Task['status']) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onStatusChange }) => {
  const router = useRouter();
  
  const formatDate = (date?: Date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return colors.error;
      case 'medium': return colors.warning;
      case 'low': return colors.success;
      default: return colors.gray[500];
    }
  };
  
  const getStatusIcon = () => {
    switch (task.status) {
      case 'completed':
        return <CheckCircle size={20} color={colors.success} />;
      case 'in-progress':
        return <AlertCircle size={20} color={colors.warning} />;
      default:
        return <Circle size={20} color={colors.gray[400]} />;
    }
  };
  
  const handleStatusToggle = () => {
    if (!onStatusChange) return;
    
    let newStatus: Task['status'];
    switch (task.status) {
      case 'todo':
        newStatus = 'in-progress';
        break;
      case 'in-progress':
        newStatus = 'completed';
        break;
      case 'completed':
        newStatus = 'todo';
        break;
      default:
        newStatus = 'todo';
    }
    
    onStatusChange(task.id, newStatus);
  };
  
  const handlePress = () => {
    router.push(`/task/${task.id}`);
  };
  
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed
      ]}
      onPress={handlePress}
    >
      <Pressable onPress={handleStatusToggle} style={styles.statusButton}>
        {getStatusIcon()}
      </Pressable>
      
      <View style={styles.content}>
        <Text 
          style={[
            styles.title, 
            task.status === 'completed' && styles.completedTitle
          ]}
          numberOfLines={1}
        >
          {task.title}
        </Text>
        
        {task.description ? (
          <Text style={styles.description} numberOfLines={2}>
            {task.description}
          </Text>
        ) : null}
        
        <View style={styles.footer}>
          {task.dueDate ? (
            <View style={styles.footerItem}>
              <Calendar size={14} color={colors.gray[500]} />
              <Text style={styles.footerText}>{formatDate(task.dueDate)}</Text>
            </View>
          ) : null}
          
          {task.tags && task.tags.length > 0 ? (
            <View style={styles.footerItem}>
              <Tag size={14} color={colors.gray[500]} />
              <Text style={styles.footerText} numberOfLines={1}>
                {task.tags.join(', ')}
              </Text>
            </View>
          ) : null}
          
          <View style={[
            styles.priorityBadge, 
            { backgroundColor: getPriorityColor(task.priority) + '20' }
          ]}>
            <Text style={[
              styles.priorityText, 
              { color: getPriorityColor(task.priority) }
            ]}>
              {task.priority}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  statusButton: {
    marginRight: 12,
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: colors.gray[400],
  },
  description: {
    fontSize: 14,
    color: colors.gray[600],
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  footerText: {
    fontSize: 12,
    color: colors.gray[500],
    marginLeft: 4,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 'auto',
  },
  priorityText: {
    fontSize: 12,
    fontWeight: '500',
  },
});