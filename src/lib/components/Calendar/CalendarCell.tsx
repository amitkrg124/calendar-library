import React from 'react';
import { CalendarCellProps } from '../../types/calendar.types';
import styles from './Calendar.module.css';

/**
 * CalendarCell component represents a single day cell in the calendar
 */
export const CalendarCell: React.FC<CalendarCellProps> = ({
    day,
    isHighlighted,
    ariaLabel
}) => {
    if (day === null) {
        return <div className={`${styles.cell} ${styles.emptyCell}`} aria-hidden="true" />;
    }

    const cellClasses = `${styles.cell} ${isHighlighted ? styles.highlightedCell : ''}`;

    return (
        <div
            className={cellClasses}
            data-testid={isHighlighted ? 'highlighted-cell' : 'calendar-cell'}
            aria-label={ariaLabel}
            role="gridcell"
            tabIndex={isHighlighted ? 0 : -1}
        >
            {day}
        </div>
    );
};
