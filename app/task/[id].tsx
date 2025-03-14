import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { useTaskStore } from '@/store/task-store';
import { Calendar, Clock, Tag, Trash, Edit, CheckCircle, Circle, AlertCircle } from 'lucide-react-native';

export default function TaskDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { tasks, deleteTask, setTaskStatus } = useTaskStore();
  
  const task = tasks.find(t => t.id === id);
  
  if (!task) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Task not found</Text>
        <Pressable 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }
  
  const formatDate = (date?: Date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  const getPriorityColor = (priority: string) => {
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
  
  const getStatusText = () => {
    switch (task.status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      default: return 'To Do';
    }
  };
  
  const handleStatusToggle = () => {
    let newStatus;
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
    
    setTaskStatus(task.id, newStatus);
  };
  
  const handleEdit = () => {
    router.push(`/edit-task/${task.id}`);
  };
  
  const handleDelete = () => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Delete", 
          onPress: () => {
            deleteTask(task.id);
            router.back();
          },
          style: "destructive"
        }
      ]
    );
  };
  
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          title: 'Task Details',
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerShadowVisible: false,
        }} 
      />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>{task.title}</Text>
          
          <Pressable 
            style={styles.statusButton}
            onPress={handleStatusToggle}
          >
            <View style={styles.statusContainer}>
              {getStatusIcon()}
              <Text style={styles.statusText}>{getStatusText()}</Text>
            </View>
          </Pressable>
        </View>
        
        {task.description ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{task.description}</Text>
          </View>
        ) : null}
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Details</Text>
          
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <View style={styles.detailIconContainer}>
                <Calendar size={16} color={colors.gray[600]} />
              </View>
              <View>
                <Text style={styles.detailLabel}>Created</Text>
                <Text style={styles.detailValue}>{formatDate(task.createdAt)}</Text>
              </View>
            </View>
            
            {task.dueDate ? (
              <View style={styles.detailItem}>
                <View style={styles.detailIconContainer}>
                  <Clock size={16} color={colors.gray[600]} />
                </View>
                <View>
                  <Text style={styles.detailLabel}>Due Date</Text>
                  <Text style={styles.detailValue}>{formatDate(task.dueDate)}</Text>
                </View>
              </View>
            ) : null}
            
            <View style={styles.detailItem}>
              <View style={[
                styles.priorityIndicator, 
                { backgroundColor: getPriorityColor(task.priority) }
              ]} />
              <View>
                <Text style={styles.detailLabel}>Priority</Text>
                <Text style={[
                  styles.priorityValue, 
                  { color: getPriorityColor(task.priority) }
                ]}>
                  {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                </Text>
              </View>
            </View>
          </View>
        </View>
        
        {task.tags && task.tags.length > 0 ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tags</Text>
            <View style={styles.tagsContainer}>
              {task.tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <Tag size={14} color={colors.gray[600]} style={styles.tagIcon} />
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : null}
      </ScrollView>
      
      <View style={styles.actionsContainer}>
        <Pressable 
          style={[styles.actionButton, styles.editButton]}
          onPress={handleEdit}
        >
          <Edit size={20} color={colors.primary} style={styles.actionIcon} />
          <Text style={styles.editButtonText}>Edit</Text>
        </Pressable>
        
        <Pressable 
          style={[styles.actionButton, styles.deleteButton]}
          onPress={handleDelete}
        >
          <Trash size={20} color={colors.error} style={styles.actionIcon} />
          <Text style={styles.deleteButtonText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 16,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  statusButton: {
    alignSelf: 'flex-start',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray[100],
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.gray[700],
    marginLeft: 6,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: colors.gray[700],
    lineHeight: 24,
  },
  detailsContainer: {
    gap: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.gray[100],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  detailLabel: {
    fontSize: 14,
    color: colors.gray[500],
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 16,
    color: colors.text,
  },
  priorityIndicator: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  priorityValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray[100],
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  tagIcon: {
    marginRight: 6,
  },
  tagText: {
    fontSize: 14,
    color: colors.gray[700],
  },
  actionsContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
    backgroundColor: colors.card,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  actionIcon: {
    marginRight: 8,
  },
  editButton: {
    backgroundColor: colors.primary + '10',
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  deleteButton: {
    backgroundColor: colors.error + '10',
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.error,
  },
  notFoundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  notFoundText: {
    fontSize: 18,
    color: colors.gray[600],
    marginBottom: 16,
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});