import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task, TaskPriority, TaskStatus } from '@/types/task';
import { mockTasks } from '@/mocks/tasks';

interface TaskState {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
  
  // Actions
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (id: string, updates: Partial<Omit<Task, 'id' | 'createdAt' | 'updatedAt'>>) => void;
  deleteTask: (id: string) => void;
  setTaskStatus: (id: string, status: TaskStatus) => void;
  setTaskPriority: (id: string, priority: TaskPriority) => void;
  
  // Filters
  filterByStatus: (status: TaskStatus | 'all') => Task[];
  filterByPriority: (priority: TaskPriority | 'all') => Task[];
  filterByTag: (tag: string | null) => Task[];
  searchTasks: (query: string) => Task[];
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set, get) => ({
      tasks: mockTasks,
      isLoading: false,
      error: null,
      
      addTask: (taskData) => {
        const now = new Date();
        const newTask: Task = {
          id: Date.now().toString(),
          ...taskData,
          createdAt: now,
          updatedAt: now,
        };
        
        set((state) => ({
          tasks: [newTask, ...state.tasks],
        }));
      },
      
      updateTask: (id, updates) => {
        set((state) => ({
          tasks: state.tasks.map((task) => 
            task.id === id 
              ? { ...task, ...updates, updatedAt: new Date() } 
              : task
          ),
        }));
      },
      
      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));
      },
      
      setTaskStatus: (id, status) => {
        set((state) => ({
          tasks: state.tasks.map((task) => 
            task.id === id 
              ? { ...task, status, updatedAt: new Date() } 
              : task
          ),
        }));
      },
      
      setTaskPriority: (id, priority) => {
        set((state) => ({
          tasks: state.tasks.map((task) => 
            task.id === id 
              ? { ...task, priority, updatedAt: new Date() } 
              : task
          ),
        }));
      },
      
      filterByStatus: (status) => {
        const { tasks } = get();
        if (status === 'all') return tasks;
        return tasks.filter((task) => task.status === status);
      },
      
      filterByPriority: (priority) => {
        const { tasks } = get();
        if (priority === 'all') return tasks;
        return tasks.filter((task) => task.priority === priority);
      },
      
      filterByTag: (tag) => {
        const { tasks } = get();
        if (!tag) return tasks;
        return tasks.filter((task) => task.tags?.includes(tag));
      },
      
      searchTasks: (query) => {
        const { tasks } = get();
        if (!query.trim()) return tasks;
        
        const lowercaseQuery = query.toLowerCase();
        return tasks.filter((task) => 
          task.title.toLowerCase().includes(lowercaseQuery) || 
          task.description?.toLowerCase().includes(lowercaseQuery) ||
          task.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
        );
      },
    }),
    {
      name: 'task-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);