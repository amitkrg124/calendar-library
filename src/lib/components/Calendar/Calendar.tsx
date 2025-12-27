import React, { useMemo } from 'react';
import { CalendarProps } from '../../types/calendar.types';
import { CalendarHeader } from './CalendarHeader';
import { CalendarDayHeader } from './CalendarDayHeader';
import { CalendarGrid } from './CalendarGrid';
import {
    generateCalendarGrid,
    getMonthName,
    getDayNames,
} from '../../utils/calendarUtils';
import styles from './Calendar.module.css';

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
export const Calendar: React.FC<CalendarProps> = ({ date }) => {
    // Extract year and month from the provided date
    const year = date.getFullYear();
    const month = date.getMonth();

    // Memoize expensive calculations to prevent unnecessary recalculations
    const monthName = useMemo(() => getMonthName(month), [month]);
    const dayNames = useMemo(() => getDayNames(), []);
    const calendarGrid = useMemo(
        () => generateCalendarGrid(year, month),
        [year, month]
    );

    return (
        <div className={styles.calendar} data-testid="calendar">
            <CalendarHeader monthName={monthName} year={year} />
            <CalendarDayHeader dayNames={dayNames} />
            <CalendarGrid
                grid={calendarGrid}
                highlightedDate={date}
                year={year}
                month={month}
            />
        </div>
    );
};

export default Calendar;
