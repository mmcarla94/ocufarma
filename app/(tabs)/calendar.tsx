import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useTherapyStore } from '@/store/therapy-store';
import { TherapyCard } from '@/components/TherapyCard';
import { EmptyState } from '@/components/EmptyState';
import { Calendar as CalendarIcon, Plus, ChevronLeft, ChevronRight } from 'lucide-react-native';
import { colors } from '@/constants/colors';

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
  
  // Check if a date has therapies and get their status
  const getTherapyStatusForDate = (date) => {
    const dateString = formatDateToYYYYMMDD(date);
    let hasTherapies = false;
    let hasCompleted = false;
    let hasSkipped = false;
    let hasPostponed = false;
    
    therapies.forEach(therapy => {
      if (!therapy.isActive) return;
      
      const startDate = new Date(therapy.startDate);
      startDate.setHours(0, 0, 0, 0);
      
      const endDate = therapy.endDate ? new Date(therapy.endDate) : new Date(2099, 11, 31);
      endDate.setHours(23, 59, 59, 999);
      
      const checkDate = new Date(dateString);
      checkDate.setHours(12, 0, 0, 0); // Set to noon to avoid timezone issues
      
      if (checkDate >= startDate && checkDate <= endDate) {
        hasTherapies = true;
        
        // Check completed doses for this date
        if (therapy.completedDoses && therapy.completedDoses.length > 0) {
          therapy.completedDoses.forEach(dose => {
            if (dose.date === dateString) {
              if (dose.status === 'completed') hasCompleted = true;
              if (dose.status === 'skipped') hasSkipped = true;
              if (dose.status === 'postponed') hasPostponed = true;
            }
          });
        }
      }
    });
    
    return {
      hasTherapies,
      hasCompleted,
      hasSkipped,
      hasPostponed
    };
  };
  
  // Check if a date has therapies
  const hasTherapiesOnDate = (date) => {
    return getTherapyStatusForDate(date).hasTherapies;
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
      <Text style={[styles.title, { color: colors.text }]}>Calendario</Text>
      <Text style={[styles.subtitle, { color: colors.gray[600] }]}>Gestisci il calendario della tua terapia oculistica</Text>
      
      <View style={styles.calendarContainer}>
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
      
      <View style={[styles.selectedDateContainer, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
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
          
          <TouchableOpacity
            style={[styles.addTherapyButton, { backgroundColor: colors.primary }]}
            onPress={() => router.push('/new-therapy')}
          >
            <Plus size={20} color="white" />
          </TouchableOpacity>
        </View>
        
        <ScrollView style={styles.therapiesList}>
          {therapiesForSelectedDate.length > 0 ? (
            therapiesForSelectedDate.map((therapy, index) => (
              <TherapyCard
                key={index}
                therapy={therapy}
                onPress={() => router.push(`/therapy/${therapy.id}`)}
              />
            ))
          ) : (
            <EmptyState
              icon={<CalendarIcon size={48} color={colors.gray[400]} />}
              title="Nessuna terapia"
              message="Non hai terapie programmate per questa data"
              actionLabel="Aggiungi terapia"
              onAction={() => router.push('/new-therapy')}
            />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 24,
  },
  calendarContainer: {
    marginBottom: 16,
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  calendarNavButton: {
    padding: 8,
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
    fontSize: 14,
    fontWeight: '500',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarDay: {
    width: '14.28%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  calendarDayText: {
    fontSize: 14,
    fontWeight: '500',
  },
  calendarDaySelected: {
    backgroundColor: '#007AFF',
  },
  calendarDayToday: {
    fontWeight: '700',
  },
  calendarDayOtherMonth: {
    opacity: 0.5,
  },
  calendarDayDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 2,
  },
  selectedDateContainer: {
    borderRadius: 12,
    marginBottom: 16,
  },
  selectedDateContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  selectedDateIcon: {
    marginRight: 12,
  },
  selectedDateText: {
    fontSize: 16,
    fontWeight: '600',
  },
  therapiesContainer: {
    flex: 1,
  },
  therapiesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  therapiesTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  addTherapyButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  therapiesList: {
    flex: 1,
  },
});
