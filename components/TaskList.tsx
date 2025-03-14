import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TaskCard } from './TaskCard';
import { Task, TaskStatus } from '@/types/task';
import { colors } from '@/constants/colors';
import { useTaskStore } from '@/store/task-store';

interface TaskListProps {
  tasks: Task[];
  title?: string;
  emptyMessage?: string;
}

export const TaskList: React.FC<TaskListProps> = ({ 
  tasks, 
  title, 
  emptyMessage = "No tasks found" 
}) => {
  const { setTaskStatus } = useTaskStore();
  
  const handleStatusChange = (id: string, status: TaskStatus) => {
    setTaskStatus(id, status);
  };
  
  if (tasks.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{emptyMessage}</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard task={item} onStatusChange={handleStatusChange} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
    marginLeft: 4,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: colors.gray[500],
    textAlign: 'center',
  },
});