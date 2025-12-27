import React from 'react';
import { CalendarHeaderProps } from '../../types/calendar.types';
import styles from './Calendar.module.css';

/**
 * CalendarHeader component displays the month and year
 */
export const CalendarHeader: React.FC<CalendarHeaderProps> = ({ monthName, year }) => {
    return (
        <div className={styles.header} data-testid="calendar-header">
            {monthName} {year}
        </div>
    );
};
