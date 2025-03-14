import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native';
import { colors } from '@/constants/colors';
import { Task, TaskPriority } from '@/types/task';
import { Calendar, Tag, X } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useTaskStore } from '@/store/task-store';

interface TaskFormProps {
  initialData?: Partial<Task>;
  onSubmit?: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ 
  initialData = {}, 
  onSubmit 
}) => {
  const router = useRouter();
  const { addTask, updateTask } = useTaskStore();
  
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [priority, setPriority] = useState<TaskPriority>(initialData.priority || 'medium');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState<string[]>(initialData.tags || []);
  
  const isEditing = !!initialData.id;
  
  const handleAddTag = () => {
    if (tag.trim() && !tags.includes(tag.trim())) {
      setTags([...tags, tag.trim()]);
      setTag('');
    }
  };
  
  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };
  
  const handleSubmit = () => {
    if (!title.trim()) return;
    
    const taskData = {
      title: title.trim(),
      description: description.trim() || undefined,
      priority,
      tags: tags.length > 0 ? tags : undefined,
      status: initialData.status || 'todo',
    };
    
    if (isEditing && initialData.id) {
      updateTask(initialData.id, taskData);
    } else {
      addTask(taskData);
    }
    
    if (onSubmit) {
      onSubmit();
    } else {
      router.back();
    }
  };
  
  const priorityOptions: TaskPriority[] = ['low', 'medium', 'high'];
  
  const getPriorityColor = (p: TaskPriority) => {
    switch (p) {
      case 'high': return colors.error;
      case 'medium': return colors.warning;
      case 'low': return colors.success;
      default: return colors.gray[500];
    }
  };
  
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.formGroup}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Task title"
          placeholderTextColor={colors.gray[400]}
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          placeholder="Add details about your task"
          placeholderTextColor={colors.gray[400]}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Priority</Text>
        <View style={styles.priorityContainer}>
          {priorityOptions.map((p) => (
            <Pressable
              key={p}
              style={[
                styles.priorityOption,
                priority === p && { 
                  backgroundColor: getPriorityColor(p) + '20',
                  borderColor: getPriorityColor(p)
                }
              ]}
              onPress={() => setPriority(p)}
            >
              <Text
                style={[
                  styles.priorityText,
                  priority === p && { color: getPriorityColor(p) }
                ]}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Tags</Text>
        <View style={styles.tagInputContainer}>
          <Tag size={16} color={colors.gray[500]} style={styles.tagIcon} />
          <TextInput
            style={styles.tagInput}
            value={tag}
            onChangeText={setTag}
            placeholder="Add a tag"
            placeholderTextColor={colors.gray[400]}
            onSubmitEditing={handleAddTag}
            returnKeyType="done"
          />
        </View>
        
        {tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {tags.map((t) => (
              <View key={t} style={styles.tag}>
                <Text style={styles.tagText}>{t}</Text>
                <Pressable onPress={() => handleRemoveTag(t)}>
                  <X size={14} color={colors.gray[600]} />
                </Pressable>
              </View>
            ))}
          </View>
        )}
      </View>
      
      <Pressable
        style={({ pressed }) => [
          styles.submitButton,
          pressed && styles.submitButtonPressed
        ]}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>
          {isEditing ? 'Update Task' : 'Create Task'}
        </Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.gray[100],
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: colors.text,
  },
  textArea: {
    minHeight: 100,
  },
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priorityOption: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: 'transparent',
  },
  priorityText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.gray[700],
  },
  tagInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray[100],
    borderRadius: 8,
    padding: 12,
  },
  tagIcon: {
    marginRight: 8,
  },
  tagInput: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray[200],
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 14,
    color: colors.gray[700],
    marginRight: 6,
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonPressed: {
    opacity: 0.9,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});