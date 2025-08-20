import React, { useState } from 'react';
import styles from './CalendarModal.module.css';
import arrowIcon from '../../../assets/svg/arrow-right-icon.svg'

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  onClose,
  selectedDate,
  onDateSelect
}) => {
  const [currentDate, setCurrentDate] = useState(selectedDate || new Date());

  if (!isOpen) return null;

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

 
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  
  const totalCells = 42; 
  const daysFromNextMonth = totalCells - (firstDayOfMonth + daysInMonth);

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(month - 1);
    } else {
      newDate.setMonth(month + 1);
    }
    setCurrentDate(newDate);
  };

  const handleDateClick = (day: number, monthType: 'current' | 'prev' | 'next') => {
    let clickedDate: Date;
    
    if (monthType === 'current') {
      clickedDate = new Date(year, month, day);
    } else if (monthType === 'prev') {
      clickedDate = new Date(year, month - 1, day);
    } else {
      clickedDate = new Date(year, month + 1, day);
    }
    
    onDateSelect?.(clickedDate);
  };

  const isSelectedDate = (day: number, monthType: 'current' | 'prev' | 'next') => {
    if (!selectedDate) return false;
    
    let checkDate: Date;
    if (monthType === 'current') {
      checkDate = new Date(year, month, day);
    } else if (monthType === 'prev') {
      checkDate = new Date(year, month - 1, day);
    } else {
      checkDate = new Date(year, month + 1, day);
    }
    
    return selectedDate.toDateString() === checkDate.toDateString();
  };

  const renderCalendarDays = () => {
    const days = [];

    
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      days.push(
        <button
          key={`prev-${day}`}
          className={`${styles.dayButton} ${styles.otherMonth} ${
            isSelectedDate(day, 'prev') ? styles.selected : ''
          }`}
          onClick={() => handleDateClick(day, 'prev')}
        >
          {day}
        </button>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <button
          key={`current-${day}`}
          className={`${styles.dayButton} ${styles.currentMonth} ${
            isSelectedDate(day, 'current') ? styles.selected : ''
          }`}
          onClick={() => handleDateClick(day, 'current')}
        >
          {day}
        </button>
      );
    }

    // Next month days
    for (let day = 1; day <= daysFromNextMonth; day++) {
      days.push(
        <button
          key={`next-${day}`}
          className={`${styles.dayButton} ${styles.otherMonth} ${
            isSelectedDate(day, 'next') ? styles.selected : ''
          }`}
          onClick={() => handleDateClick(day, 'next')}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <button className={styles.backButton} onClick={onClose}>
           <img src={arrowIcon} alt="" />
          </button>
          <h2 className={styles.title}>Calendar</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.calendarHeader}>
          <button className={styles.navButton} onClick={() => navigateMonth('prev')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <h3 className={styles.monthYear}>
            {monthNames[month]} {year}
          </h3>
          
          <button className={styles.navButton} onClick={() => navigateMonth('next')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.weekDays}>
          {dayNames.map((day) => (
            <div key={day} className={styles.weekDay}>
              {day}
            </div>
          ))}
        </div>

        <div className={styles.calendarGrid}>
          {renderCalendarDays()}
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;