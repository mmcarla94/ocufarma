import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { colors } from '@/constants/colors';
import { TaskPriority, TaskStatus } from '@/types/task';

interface FilterOption<T> {
  value: T;
  label: string;
}

interface TaskFilterProps {
  selectedStatus: TaskStatus | 'all';
  onStatusChange: (status: TaskStatus | 'all') => void;
  selectedPriority: TaskPriority | 'all';
  onPriorityChange: (priority: TaskPriority | 'all') => void;
}

export const TaskFilter: React.FC<TaskFilterProps> = ({
  selectedStatus,
  onStatusChange,
  selectedPriority,
  onPriorityChange,
}) => {
  const statusOptions: FilterOption<TaskStatus | 'all'>[] = [
    { value: 'all', label: 'All' },
    { value: 'todo', label: 'To Do' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
  ];

  const priorityOptions: FilterOption<TaskPriority | 'all'>[] = [
    { value: 'all', label: 'All' },
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.filterSection}>
        <Text style={styles.filterLabel}>Status</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.optionsContainer}
        >
          {statusOptions.map((option) => (
            <Pressable
              key={option.value}
              style={[
                styles.filterOption,
                selectedStatus === option.value && styles.selectedOption,
              ]}
              onPress={() => onStatusChange(option.value)}
            >
              <Text
                style={[
                  styles.filterOptionText,
                  selectedStatus === option.value && styles.selectedOptionText,
                ]}
              >
                {option.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.filterSection}>
        <Text style={styles.filterLabel}>Priority</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.optionsContainer}
        >
          {priorityOptions.map((option) => (
            <Pressable
              key={option.value}
              style={[
                styles.filterOption,
                selectedPriority === option.value && styles.selectedOption,
              ]}
              onPress={() => onPriorityChange(option.value)}
            >
              <Text
                style={[
                  styles.filterOptionText,
                  selectedPriority === option.value && styles.selectedOptionText,
                ]}
              >
                {option.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  filterSection: {
    marginBottom: 12,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray[700],
    marginBottom: 8,
    marginLeft: 4,
  },
  optionsContainer: {
    paddingHorizontal: 4,
  },
  filterOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.gray[100],
    marginRight: 8,
  },
  selectedOption: {
    backgroundColor: colors.primary,
  },
  filterOptionText: {
    fontSize: 14,
    color: colors.gray[700],
  },
  selectedOptionText: {
    color: 'white',
    fontWeight: '500',
  },
});