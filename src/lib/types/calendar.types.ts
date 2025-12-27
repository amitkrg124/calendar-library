/**
 * Type definitions for the Calendar component
 */

/**
 * Props for the Calendar component
 */
export interface CalendarProps {
    /**
     * The date to display in the calendar
     * This date determines which month/year is shown and which date is highlighted
     */
    date: Date;
}

/**
 * Props for the CalendarHeader component
 */
export interface CalendarHeaderProps {
    /**
     * The month name to display (e.g., "October")
     */
    monthName: string;

    /**
     * The year to display (e.g., 2022)
     */
    year: number;
}

/**
 * Props for the CalendarDayHeader component
 */
export interface CalendarDayHeaderProps {
    /**
     * Array of day abbreviations (e.g., ["Su", "Mo", "Tu", ...])
     */
    dayNames: string[];
}

/**
 * Props for the CalendarGrid component
 */
export interface CalendarGridProps {
    /**
     * 2D array representing the calendar grid
     * Each week is an array of numbers (dates) or null (empty cells)
     */
    grid: (number | null)[][];

    /**
     * The date that should be highlighted
     */
    highlightedDate: Date;

    /**
     * Year of the calendar being displayed
     */
    year: number;

    /**
     * Month of the calendar being displayed (0-11)
     */
    month: number;
}

/**
 * Props for individual CalendarCell component
 */
export interface CalendarCellProps {
    /**
     * The day number to display (1-31) or null for empty cells
     */
    day: number | null;

    /**
     * Whether this cell should be highlighted
     */
    isHighlighted: boolean;

    /**
     * Accessible label for the cell
     */
    ariaLabel?: string;
}
