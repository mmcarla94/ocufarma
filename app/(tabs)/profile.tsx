import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, Switch } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/store/auth-store';
import { useThemeStore } from '@/store/theme-store';
import { useTherapyStore } from '@/store/therapy-store';
import { useMedicationStore } from '@/store/medication-store';
import { 
  User, 
  LogOut, 
  Moon, 
  Bell, 
  Lock, 
  HelpCircle, 
  FileText, 
  ChevronRight,
  Settings,
  Search,
  PlusCircle,
  Barcode,
  Shield
} from 'lucide-react-native';

export default function ProfileScreen() {
  const colors = useThemeColors();
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const { isDarkMode, toggleTheme } = useThemeStore();
  const { stats: therapyStats } = useTherapyStore();
  const { stats: medicationStats } = useMedicationStore();
  
  // Stats for the user
  const searchedMedications = medicationStats.searchedCount;
  const addedTherapies = therapyStats.addedCount;
  const scannedMedications = medicationStats.scannedCount;
  
  const handleLogout = () => {
    logout();
    router.replace('/login');
  };
  
  const menuItems = [
    {
      title: 'Preferenze',
      items: [
        {
          icon: Moon,
          label: 'Tema scuro',
          action: 'toggle',
          value: isDarkMode,
          onToggle: toggleTheme,
        },
        {
          icon: Bell,
          label: 'Notifiche',
          action: 'navigate',
          route: '/notifications',
        },
      ],
    },
    {
      title: 'Account',
      items: [
        {
          icon: User,
          label: 'Informazioni personali',
          action: 'navigate',
          route: '/account-info',
        },
        {
          icon: Shield,
          label: 'Sostieni il progetto',
          action: 'navigate',
          route: '/support-project',
        },
      ],
    },
    {
      title: 'Supporto',
      items: [
        {
          icon: HelpCircle,
          label: 'Aiuto',
          action: 'navigate',
          route: '/help',
        },
        {
          icon: FileText,
          label: 'Termini e condizioni',
          action: 'navigate',
          route: '/terms',
        },
      ],
    },
  ];
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.headerTitle, { color: colors.text }]}>Profilo</Text>
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={[styles.profileCard, { backgroundColor: colors.card }]}>
          <View style={[styles.avatarContainer, { backgroundColor: colors.primary + '20' }]}>
            <User size={32} color={colors.primary} />
          </View>
          
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, { color: colors.text }]}>
              {user?.name || 'Utente'}
            </Text>
            <Text style={[styles.profileEmail, { color: colors.gray[600] }]}>
              {user?.email || 'utente@example.com'}
            </Text>
            <View style={[styles.roleTag, { backgroundColor: user?.role === 'medico' ? colors.primary + '20' : colors.success + '20' }]}>
              <Text style={[styles.roleText, { color: user?.role === 'medico' ? colors.primary : colors.success }]}>
                {user?.role === 'medico' ? 'Medico' : 'Paziente'}
              </Text>
            </View>
          </View>
        </View>
        
        {/* Stats Section */}
        <View style={[styles.statsCard, { backgroundColor: colors.card }]}>
          <Text style={[styles.statsTitle, { color: colors.text }]}>
            Le tue statistiche
          </Text>
          
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <View style={[styles.statIconContainer, { backgroundColor: colors.primary + '15' }]}>
                <Search size={20} color={colors.primary} />
              </View>
              <Text style={[styles.statValue, { color: colors.text }]}>{searchedMedications}</Text>
              <Text style={[styles.statLabel, { color: colors.gray[600] }]}>Farmaci cercati</Text>
            </View>
            
            <View style={styles.statItem}>
              <View style={[styles.statIconContainer, { backgroundColor: colors.success + '15' }]}>
                <PlusCircle size={20} color={colors.success} />
              </View>
              <Text style={[styles.statValue, { color: colors.text }]}>{addedTherapies}</Text>
              <Text style={[styles.statLabel, { color: colors.gray[600] }]}>Terapie aggiunte</Text>
            </View>
            
            <View style={styles.statItem}>
              <View style={[styles.statIconContainer, { backgroundColor: colors.secondary + '15' }]}>
                <Barcode size={20} color={colors.secondary} />
              </View>
              <Text style={[styles.statValue, { color: colors.text }]}>{scannedMedications}</Text>
              <Text style={[styles.statLabel, { color: colors.gray[600] }]}>Farmaci scansionati</Text>
            </View>
          </View>
        </View>
        
        {menuItems.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.gray[600] }]}>
              {section.title}
            </Text>
            
            <View style={[styles.menuCard, { backgroundColor: colors.card }]}>
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                
                return (
                  <React.Fragment key={itemIndex}>
                    {itemIndex > 0 && (
                      <View style={[styles.divider, { backgroundColor: colors.border }]} />
                    )}
                    
                    <Pressable
                      style={({ pressed }) => [
                        styles.menuItem,
                        pressed && item.action === 'navigate' && styles.menuItemPressed,
                      ]}
                      onPress={() => {
                        if (item.action === 'navigate' && item.route) {
                          router.push(item.route);
                        }
                      }}
                    >
                      <View style={styles.menuItemLeft}>
                        <Icon size={20} color={colors.primary} />
                        <Text style={[styles.menuItemLabel, { color: colors.text }]}>
                          {item.label}
                        </Text>
                      </View>
                      
                      {item.action === 'toggle' && (
                        <Switch
                          value={item.value}
                          onValueChange={item.onToggle}
                          trackColor={{ false: colors.gray[300], true: colors.primary + '80' }}
                          thumbColor={item.value ? colors.primary : colors.gray[100]}
                        />
                      )}
                      
                      {item.action === 'navigate' && (
                        <ChevronRight size={20} color={colors.gray[400]} />
                      )}
                    </Pressable>
                  </React.Fragment>
                );
              })}
            </View>
          </View>
        ))}
        
        <Pressable
          style={({ pressed }) => [
            styles.logoutButton,
            { backgroundColor: colors.error + '10', borderColor: colors.error + '30' },
            pressed && styles.logoutButtonPressed,
          ]}
          onPress={handleLogout}
        >
          <LogOut size={20} color={colors.error} />
          <Text style={[styles.logoutButtonText, { color: colors.error }]}>
            Logout
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 16,
    marginLeft: 12,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 100, // Increased to avoid content being hidden by tab bar
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E5E7',
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  roleTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  roleText: {
    fontSize: 12,
    fontWeight: '600',
  },
  // Stats styles
  statsCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E5E5E7',
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginLeft: 4,
  },
  menuCard: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E5E7',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  menuItemPressed: {
    opacity: 0.7,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemLabel: {
    fontSize: 16,
    marginLeft: 12,
  },
  divider: {
    height: 1,
    marginHorizontal: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 32,
    borderWidth: 1,
  },
  logoutButtonPressed: {
    opacity: 0.7,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});