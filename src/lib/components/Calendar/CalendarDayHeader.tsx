import React from 'react';
import { CalendarDayHeaderProps } from '../../types/calendar.types';
import styles from './Calendar.module.css';

/**
 * CalendarDayHeader component displays the day names row
 */
export const CalendarDayHeader: React.FC<CalendarDayHeaderProps> = ({ dayNames }) => {
    return (
        <div className={styles.dayHeader} data-testid="calendar-day-header">
            {dayNames.map((day) => (
                <div key={day} className={styles.dayName}>
                    {day}
                </div>
            ))}
        </div>
    );
};
