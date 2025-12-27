/**
 * Calendar utility functions
 * These pure functions handle all calendar date calculations and formatting
 */

/**
 * Gets the number of days in a given month
 */
export const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
};

/**
 * Gets the day of the week for the first day of the month (0 = Sunday, 6 = Saturday)
 */
export const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
};

/**
 * Gets the month name from a month index (0-11)
 */
export const getMonthName = (month: number): string => {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month];
};

/**
 * Gets abbreviated day names for the calendar header
 */
export const getDayNames = (): string[] => {
    return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
};

/**
 * Generates a 2D array representing the calendar grid
 * Each week is an array of numbers (dates) or null (empty cells)
 */
export const generateCalendarGrid = (year: number, month: number): (number | null)[][] => {
    const firstDay = getFirstDayOfMonth(year, month);
    const daysInMonth = getDaysInMonth(year, month);

    const grid: (number | null)[][] = [];
    let currentWeek: (number | null)[] = [];

    // Add empty cells for days before the first of the month
    for (let i = 0; i < firstDay; i++) {
        currentWeek.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        currentWeek.push(day);

        // If we've completed a week (7 days), start a new week
        if (currentWeek.length === 7) {
            grid.push(currentWeek);
            currentWeek = [];
        }
    }

    // Add the last partial week if it exists
    if (currentWeek.length > 0) {
        // Fill remaining cells with null to complete the week
        while (currentWeek.length < 7) {
            currentWeek.push(null);
        }
        grid.push(currentWeek);
    }

    return grid;
};

/**
 * Checks if two dates represent the same day
 */
export const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
};

/**
 * Formats a date as YYYY-MM-DD for accessibility labels
 */
export const formatDateForA11y = (year: number, month: number, day: number): string => {
    const paddedMonth = String(month + 1).padStart(2, '0');
    const paddedDay = String(day).padStart(2, '0');
    return `${year}-${paddedMonth}-${paddedDay}`;
};
