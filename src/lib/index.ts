/**
 * React Calendar Library
 * A reusable, accessible calendar component.
 */

// Export the main component
export { Calendar } from './components/Calendar';

// Export types for consumers
export type { CalendarProps } from './types/calendar.types';

// Optional: Export utilities if consumers might need them
export {
    isSameDay,
    formatDateForA11y,
    getDaysInMonth,
    getMonthName
} from './utils/calendarUtils';
