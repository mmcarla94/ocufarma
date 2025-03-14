import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, Switch } from 'react-native';
import { Settings, LogOut, User, Bell, Moon, HelpCircle } from 'lucide-react-native';
import { useThemeStore } from '@/store/theme-store';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/store/auth-store';

export default function ProfileScreen() {
  const colors = useThemeColors();
  const router = useRouter();
  const { isDarkMode, toggleDarkMode, notificationsEnabled, toggleNotifications } = useThemeStore();
  const { isLoggedIn, logout, user } = useAuthStore();
  
  const handleLogout = () => {
    logout();
    router.replace('/');
  };
  
  const handleLogin = () => {
    router.push('/login');
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Profilo</Text>
      </View>
      
      <View style={[styles.profileSection, { backgroundColor: colors.card }]}>
        <View style={[styles.profileImageContainer, { backgroundColor: colors.gray[200] }]}>
          <User size={40} color={colors.gray[400]} />
        </View>
        
        <View style={styles.profileInfo}>
          {isLoggedIn ? (
            <>
              <Text style={[styles.profileName, { color: colors.text }]}>{user?.name || 'Utente'}</Text>
              <Text style={[styles.profileEmail, { color: colors.gray[600] }]}>{user?.email || 'utente@esempio.com'}</Text>
            </>
          ) : (
            <>
              <Text style={[styles.profileName, { color: colors.text }]}>Ospite</Text>
              <Pressable onPress={handleLogin}>
                <Text style={[styles.loginText, { color: colors.primary }]}>Accedi o registrati</Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
      
      <View style={styles.settingsContainer}>
        <Text style={[styles.settingsTitle, { color: colors.text }]}>Impostazioni</Text>
        
        <View style={[styles.settingItem, { backgroundColor: colors.card }]}>
          <View style={[styles.settingIconContainer, { backgroundColor: colors.gray[100] }]}>
            <Moon size={20} color={colors.gray[600]} />
          </View>
          <View style={styles.settingTextContainer}>
            <Text style={[styles.settingTitle, { color: colors.text }]}>Tema Scuro</Text>
            <Text style={[styles.settingSubtitle, { color: colors.gray[600] }]}>Cambia l'aspetto dell'app</Text>
          </View>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: colors.gray[300], true: colors.primaryLight }}
            thumbColor={isDarkMode ? colors.primary : colors.gray[100]}
          />
        </View>
        
        <View style={[styles.settingItem, { backgroundColor: colors.card }]}>
          <View style={[styles.settingIconContainer, { backgroundColor: colors.gray[100] }]}>
            <Bell size={20} color={colors.gray[600]} />
          </View>
          <View style={styles.settingTextContainer}>
            <Text style={[styles.settingTitle, { color: colors.text }]}>Notifiche</Text>
            <Text style={[styles.settingSubtitle, { color: colors.gray[600] }]}>Attiva/disattiva le notifiche</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
            trackColor={{ false: colors.gray[300], true: colors.primaryLight }}
            thumbColor={notificationsEnabled ? colors.primary : colors.gray[100]}
          />
        </View>
        
        <Pressable style={[styles.settingItem, { backgroundColor: colors.card }]}>
          <View style={[styles.settingIconContainer, { backgroundColor: colors.gray[100] }]}>
            <HelpCircle size={20} color={colors.gray[600]} />
          </View>
          <View style={styles.settingTextContainer}>
            <Text style={[styles.settingTitle, { color: colors.text }]}>Aiuto e Supporto</Text>
            <Text style={[styles.settingSubtitle, { color: colors.gray[600] }]}>FAQ e contatta il supporto</Text>
          </View>
        </Pressable>
        
        <Pressable style={[styles.settingItem, { backgroundColor: colors.card }]}>
          <View style={[styles.settingIconContainer, { backgroundColor: colors.gray[100] }]}>
            <Settings size={20} color={colors.gray[600]} />
          </View>
          <View style={styles.settingTextContainer}>
            <Text style={[styles.settingTitle, { color: colors.text }]}>Impostazioni App</Text>
            <Text style={[styles.settingSubtitle, { color: colors.gray[600] }]}>Preferenze e impostazioni account</Text>
          </View>
        </Pressable>
      </View>
      
      {isLoggedIn && (
        <Pressable 
          style={[styles.logoutButton, { backgroundColor: colors.error + '10' }]}
          onPress={handleLogout}
        >
          <LogOut size={20} color={colors.error} style={styles.logoutIcon} />
          <Text style={[styles.logoutText, { color: colors.error }]}>Disconnetti</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    paddingTop: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  profileImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
  },
  loginText: {
    fontSize: 14,
    fontWeight: '500',
  },
  settingsContainer: {
    padding: 16,
  },
  settingsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  settingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  settingSubtitle: {
    fontSize: 14,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 'auto',
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
  },
  logoutIcon: {
    marginRight: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
  },
});