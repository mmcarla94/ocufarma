import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useTherapyStore } from '@/store/therapy-store';
import { TherapyCard } from '@/components/TherapyCard';
import { EmptyState } from '@/components/EmptyState';
import { Calendar as CalendarIcon, Plus, ChevronLeft, ChevronRight } from 'lucide-react-native';

export default function CalendarScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  const { therapies } = useTherapyStore();
  
  // State for calendar
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);
  const [therapiesForSelectedDate, setTherapiesForSelectedDate] = useState([]);
  
  // Get day name in Italian
  const getDayName = (date) => {
    const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
    return days[date.getDay()];
  };
  
  // Format date to Italian format (DD/MM/YYYY)
  const formatDate = (date) => {
    return `${date.getDate()} ${getMonthName(date.getMonth())} ${date.getFullYear()}`;
  };
  
  // Get month name in Italian
  const getMonthName = (monthIndex) => {
    const months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    return months[monthIndex];
  };
  
  // Format date to YYYY-MM-DD string
  const formatDateToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  // Check if a date has therapies
  const hasTherapiesOnDate = (date) => {
    const dateString = formatDateToYYYYMMDD(date);
    
    return therapies.some(therapy => {
      if (!therapy.isActive) return false;
      
      const startDate = new Date(therapy.startDate);
      startDate.setHours(0, 0, 0, 0);
      
      const endDate = therapy.endDate ? new Date(therapy.endDate) : new Date(2099, 11, 31);
      endDate.setHours(23, 59, 59, 999);
      
      const checkDate = new Date(dateString);
      checkDate.setHours(12, 0, 0, 0); // Set to noon to avoid timezone issues
      
      return checkDate >= startDate && checkDate <= endDate;
    });
  };
  
  // Generate calendar days for the current month
  useEffect(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // Get the first day of the month
    const firstDay = new Date(year, month, 1);
    // Get the last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    // Get the day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfWeek = firstDay.getDay();
    
    // Calculate days from previous month to show
    const daysFromPrevMonth = firstDayOfWeek;
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    const days = [];
    
    // Add days from previous month
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, prevMonthLastDay - i);
      days.push({
        date,
        isCurrentMonth: false,
        hasTherapies: hasTherapiesOnDate(date)
      });
    }
    
    // Add days from current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i);
      days.push({
        date,
        isCurrentMonth: true,
        hasTherapies: hasTherapiesOnDate(date)
      });
    }
    
    // Add days from next month to complete the calendar grid (6 rows x 7 days = 42 cells)
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i);
      days.push({
        date,
        isCurrentMonth: false,
        hasTherapies: hasTherapiesOnDate(date)
      });
    }
    
    setCalendarDays(days);
  }, [currentMonth, therapies]);
  
  // Update therapies for selected date when date changes
  useEffect(() => {
    const selectedDateString = formatDateToYYYYMMDD(selectedDate);
    
    const selectedTherapies = therapies.filter(therapy => {
      if (!therapy.isActive) return false;
      
      const startDate = new Date(therapy.startDate);
      startDate.setHours(0, 0, 0, 0);
      
      const endDate = therapy.endDate ? new Date(therapy.endDate) : new Date(2099, 11, 31);
      endDate.setHours(23, 59, 59, 999);
      
      const selectedDateObj = new Date(selectedDateString);
      selectedDateObj.setHours(12, 0, 0, 0); // Set to noon to avoid timezone issues
      
      return selectedDateObj >= startDate && selectedDateObj <= endDate;
    });
    
    // Sort therapies by time
    const sortedTherapies = [...selectedTherapies].sort((a, b) => {
      const timeA = a.times && a.times.length > 0 ? a.times[0] : '23:59';
      const timeB = b.times && b.times.length > 0 ? b.times[0] : '23:59';
      return timeA.localeCompare(timeB);
    });
    
    setTherapiesForSelectedDate(sortedTherapies);
  }, [selectedDate, therapies]);
  
  // Go to previous month
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  // Go to next month
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  // Check if a date is today
  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };
  
  // Check if a date is selected
  const isSelected = (date) => {
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen 
        options={{
          title: 'Calendario',
          headerTitleStyle: { fontWeight: '600' },
        }}
      />
      
      <View style={styles.titleContainer}>
        <Text style={[styles.screenTitle, { color: colors.text }]}>Calendario</Text>
      </View>
      
      <View style={[styles.calendarContainer, { backgroundColor: colors.card }]}>
        <View style={styles.calendarHeader}>
          <TouchableOpacity onPress={goToPreviousMonth} style={styles.calendarNavButton}>
            <ChevronLeft size={24} color={colors.primary} />
          </TouchableOpacity>
          
          <Text style={[styles.calendarMonthTitle, { color: colors.text }]}>
            {getMonthName(currentMonth.getMonth())} {currentMonth.getFullYear()}
          </Text>
          
          <TouchableOpacity onPress={goToNextMonth} style={styles.calendarNavButton}>
            <ChevronRight size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.calendarDaysHeader}>
          {['D', 'L', 'M', 'M', 'G', 'V', 'S'].map((day, index) => (
            <Text key={index} style={[styles.calendarDayHeaderText, { color: colors.gray[600] }]}>
              {day}
            </Text>
          ))}
        </View>
        
        <View style={styles.calendarGrid}>
          {calendarDays.map((day, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.calendarDay,
                isSelected(day.date) && [styles.calendarDaySelected, { backgroundColor: colors.primary }],
                !day.isCurrentMonth && styles.calendarDayOtherMonth
              ]}
              onPress={() => setSelectedDate(day.date)}
            >
              <Text
                style={[
                  styles.calendarDayText,
                  { color: day.isCurrentMonth ? colors.text : colors.gray[400] },
                  isToday(day.date) && [styles.calendarDayToday, { color: colors.primary }],
                  isSelected(day.date) && { color: 'white' }
                ]}
              >
                {day.date.getDate()}
              </Text>
              
              {day.hasTherapies && (
                <View
                  style={[
                    styles.calendarDayDot,
                    { backgroundColor: isSelected(day.date) ? 'white' : colors.primary }
                  ]}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <View style={[styles.selectedDateContainer, { backgroundColor: colors.card }]}>
        <View style={styles.selectedDateContent}>
          <CalendarIcon size={20} color={colors.primary} style={styles.selectedDateIcon} />
          <Text style={[styles.selectedDateText, { color: colors.text }]}>
            {getDayName(selectedDate)} {formatDate(selectedDate)}
          </Text>
        </View>
      </View>
      
      <View style={styles.therapiesContainer}>
        <View style={styles.therapiesHeader}>
          <Text style={[styles.therapiesTitle, { color: colors.text }]}>
            Terapie del giorno
          </Text>
          
          <Pressable 
            style={[styles.addButton, { backgroundColor: colors.primary }]}
            onPress={() => router.push('/new-therapy')}
          >
            <Plus size={16} color="white" style={styles.addButtonIcon} />
            <Text style={styles.addButtonText}>Aggiungi</Text>
          </Pressable>
        </View>
        
        {therapiesForSelectedDate.length > 0 ? (
          <ScrollView style={styles.therapiesList}>
            {therapiesForSelectedDate.map((therapy) => (
              <TherapyCard 
                key={therapy.id} 
                therapy={therapy} 
                showDate={false}
              />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.emptyStateContainer}>
            <EmptyState
              icon="Calendar"
              title="Nessuna terapia per questa data"
              description="Non hai terapie programmate per questa data."
              actionLabel="Aggiungi terapia"
              onAction={() => router.push('/new-therapy')}
              compact={true}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
  calendarContainer: {
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  calendarNavButton: {
    padding: 4,
  },
  calendarMonthTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  calendarDaysHeader: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  calendarDayHeaderText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarDay: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  calendarDaySelected: {
    borderRadius: 8,
  },
  calendarDayOtherMonth: {
    opacity: 0.5,
  },
  calendarDayText: {
    fontSize: 14,
    fontWeight: '500',
  },
  calendarDayToday: {
    fontWeight: '700',
  },
  calendarDayDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 2,
  },
  selectedDateContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.22,
    elevation: 3,
  },
  selectedDateContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedDateIcon: {
    marginRight: 8,
  },
  selectedDateText: {
    fontSize: 16,
    fontWeight: '500',
  },
  therapiesContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  therapiesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  therapiesTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addButtonIcon: {
    marginRight: 4,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  therapiesList: {
    flex: 1,
  },
  emptyStateContainer: {
    flex: 1,
    maxHeight: 200, // Limit the height to make it more compact
  }
});