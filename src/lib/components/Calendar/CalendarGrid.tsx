import React from 'react';
import { CalendarGridProps } from '../../types/calendar.types';
import { CalendarCell } from './CalendarCell';
import { isSameDay, formatDateForA11y } from '../../utils/calendarUtils';
import styles from './Calendar.module.css';

/**
 * CalendarGrid component renders the grid of date cells
 */
export const CalendarGrid: React.FC<CalendarGridProps> = ({
    grid,
    highlightedDate,
    year,
    month
}) => {
    return (
        <div className={styles.grid} role="grid" data-testid="calendar-grid">
            {grid.map((week, weekIndex) => (
                <React.Fragment key={`week-${weekIndex}`}>
                    {week.map((day, dayIndex) => {
                        const isHighlighted = day !== null &&
                            isSameDay(highlightedDate, new Date(year, month, day));

                        const ariaLabel = day !== null
                            ? formatDateForA11y(year, month, day)
                            : undefined;

                        return (
                            <CalendarCell
                                key={`day-${weekIndex}-${dayIndex}`}
                                day={day}
                                isHighlighted={isHighlighted}
                                ariaLabel={ariaLabel}
                            />
                        );
                    })}
                </React.Fragment>
            ))}
        </div>
    );
};
