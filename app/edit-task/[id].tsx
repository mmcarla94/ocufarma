import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { useTaskStore } from '@/store/task-store';
import { TaskForm } from '@/components/TaskForm';

export default function EditTaskScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { tasks } = useTaskStore();
  
  const task = tasks.find(t => t.id === id);
  
  if (!task) {
    router.back();
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          title: 'Edit Task',
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerShadowVisible: false,
        }} 
      />
      <TaskForm initialData={task} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});