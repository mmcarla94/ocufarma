import { Task } from '@/types/task';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Complete project proposal',
    description: 'Finish the draft and send it to the client for review',
    dueDate: new Date(Date.now() + 86400000 * 2), // 2 days from now
    priority: 'high',
    status: 'in-progress',
    createdAt: new Date(Date.now() - 86400000 * 2), // 2 days ago
    updatedAt: new Date(),
    tags: ['work', 'client']
  },
  {
    id: '2',
    title: 'Buy groceries',
    description: 'Milk, eggs, bread, and vegetables',
    dueDate: new Date(Date.now() + 86400000), // 1 day from now
    priority: 'medium',
    status: 'todo',
    createdAt: new Date(Date.now() - 86400000), // 1 day ago
    updatedAt: new Date(Date.now() - 86400000),
    tags: ['personal', 'shopping']
  },
  {
    id: '3',
    title: 'Schedule dentist appointment',
    priority: 'low',
    status: 'todo',
    createdAt: new Date(Date.now() - 86400000 * 3), // 3 days ago
    updatedAt: new Date(Date.now() - 86400000 * 3),
    tags: ['health']
  },
  {
    id: '4',
    title: 'Prepare presentation slides',
    description: 'Create slides for the team meeting on Friday',
    dueDate: new Date(Date.now() + 86400000 * 4), // 4 days from now
    priority: 'high',
    status: 'todo',
    createdAt: new Date(Date.now() - 86400000), // 1 day ago
    updatedAt: new Date(Date.now() - 86400000),
    tags: ['work', 'meeting']
  },
  {
    id: '5',
    title: 'Pay utility bills',
    dueDate: new Date(Date.now() + 86400000 * 7), // 7 days from now
    priority: 'medium',
    status: 'todo',
    createdAt: new Date(Date.now() - 86400000 * 2), // 2 days ago
    updatedAt: new Date(Date.now() - 86400000 * 2),
    tags: ['finance', 'home']
  },
  {
    id: '6',
    title: 'Call mom',
    priority: 'medium',
    status: 'completed',
    createdAt: new Date(Date.now() - 86400000 * 5), // 5 days ago
    updatedAt: new Date(Date.now() - 86400000),
    tags: ['personal', 'family']
  },
  {
    id: '7',
    title: 'Review code pull request',
    description: 'Check the new feature implementation and provide feedback',
    priority: 'high',
    status: 'completed',
    createdAt: new Date(Date.now() - 86400000 * 3), // 3 days ago
    updatedAt: new Date(Date.now() - 86400000),
    tags: ['work', 'development']
  }
];