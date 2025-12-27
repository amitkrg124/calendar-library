import React from 'react';

/**
 * Type definitions for the Calendar component
 */
/**
 * Props for the Calendar component
 */
interface CalendarProps {
    /**
     * The date to display in the calendar
     * This date determines which month/year is shown and which date is highlighted
     */
    date: Date;
}

/**
 * Calendar component - A reusable calendar that displays a month view
 * with a highlighted date
 *
 * @param {CalendarProps} props - Component props
 * @param {Date} props.date - The date to display and highlight in the calendar
 *
 * @example
 * ```tsx
 * <Calendar date={new Date(2022, 9, 3)} />
 * ```
 */
declare const Calendar: React.FC<CalendarProps>;

/**
 * Calendar utility functions
 * These pure functions handle all calendar date calculations and formatting
 */
/**
 * Gets the number of days in a given month
 */
declare const getDaysInMonth: (year: number, month: number) => number;
/**
 * Gets the month name from a month index (0-11)
 */
declare const getMonthName: (month: number) => string;
/**
 * Checks if two dates represent the same day
 */
declare const isSameDay: (date1: Date, date2: Date) => boolean;
/**
 * Formats a date as YYYY-MM-DD for accessibility labels
 */
declare const formatDateForA11y: (year: number, month: number, day: number) => string;

export { Calendar, type CalendarProps, formatDateForA11y, getDaysInMonth, getMonthName, isSameDay };
