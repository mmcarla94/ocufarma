import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
  
  // Actions
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Mock users per demo
const mockUsers = [
  {
    id: '1',
    name: 'Utente Demo',
    email: 'demo@example.com',
    password: 'password123'
  }
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      user: null,
      token: null,
      
      login: async (email, password) => {
        // Simulazione di login
        const user = mockUsers.find(u => 
          u.email.toLowerCase() === email.toLowerCase() && 
          u.password === password
        );
        
        if (user) {
          set({ 
            isLoggedIn: true, 
            user: { 
              id: user.id, 
              name: user.name, 
              email: user.email 
            },
            token: 'mock-jwt-token'
          });
          return true;
        }
        
        return false;
      },
      
      register: async (name, email, password) => {
        // Verifica se l'email è già in uso
        const existingUser = mockUsers.find(u => 
          u.email.toLowerCase() === email.toLowerCase()
        );
        
        if (existingUser) {
          return false;
        }
        
        // Simulazione di registrazione
        const newUser = {
          id: (mockUsers.length + 1).toString(),
          name,
          email,
          password
        };
        
        mockUsers.push(newUser);
        
        set({ 
          isLoggedIn: true, 
          user: { 
            id: newUser.id, 
            name: newUser.name, 
            email: newUser.email 
          },
          token: 'mock-jwt-token'
        });
        
        return true;
      },
      
      logout: () => {
        set({ isLoggedIn: false, user: null, token: null });
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);