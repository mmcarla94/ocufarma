import React from 'react';
import { Tabs } from 'expo-router';
import { useThemeColors } from '@/hooks/useThemeColors';
import { Home, Heart, Eye, Calendar, User, Info } from 'lucide-react-native';

export default function TabLayout() {
  const colors = useThemeColors();

  const tabBarLabelStyle = {
    paddingLeft: 8, // Add padding to move the label to the right
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarShowLabel: false, // Hide labels
        tabBarIconStyle: {
          marginBottom: 0,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home size={size+4} color={color} />,
          headerTitleStyle: tabBarLabelStyle,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Preferiti',
          tabBarIcon: ({ color, size }) => <Heart size={size+4} color={color} />,
          headerTitleStyle: tabBarLabelStyle,
        }}
      />
      <Tabs.Screen
        name="therapies"
        options={{
          title: 'Terapie',
          tabBarIcon: ({ color, size }) => <Eye size={size+4} color={color} />,
          headerTitleStyle: tabBarLabelStyle,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendario',
          tabBarIcon: ({ color, size }) => <Calendar size={size+4} color={color} />,
          headerTitleStyle: tabBarLabelStyle,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profilo',
          tabBarIcon: ({ color, size }) => <User size={size+4} color={color} />,
          headerTitleStyle: tabBarLabelStyle,
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: 'Info',
          tabBarIcon: ({ color, size }) => <Info size={size+4} color={color} />,
          headerTitleStyle: tabBarLabelStyle,
        }}
      />
    </Tabs>
  );
}