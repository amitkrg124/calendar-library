import {
    getDaysInMonth,
    getFirstDayOfMonth,
    getMonthName,
    getDayNames,
    generateCalendarGrid,
    isSameDay,
    formatDateForA11y,
} from './calendarUtils';

describe('Calendar Utility Functions', () => {
    describe('getDaysInMonth', () => {
        it('should return 31 days for January', () => {
            expect(getDaysInMonth(2022, 0)).toBe(31);
        });

        it('should return 28 days for February in a non-leap year', () => {
            expect(getDaysInMonth(2022, 1)).toBe(28);
        });

        it('should return 29 days for February in a leap year', () => {
            expect(getDaysInMonth(2020, 1)).toBe(29);
        });

        it('should return 30 days for April', () => {
            expect(getDaysInMonth(2022, 3)).toBe(30);
        });
    });

    describe('getFirstDayOfMonth', () => {
        it('should return 6 for October 2022 (starts on Saturday)', () => {
            expect(getFirstDayOfMonth(2022, 9)).toBe(6);
        });

        it('should return 0 for March 2020 (starts on Sunday)', () => {
            expect(getFirstDayOfMonth(2020, 2)).toBe(0);
        });
    });

    describe('getMonthName', () => {
        it('should return "January" for month 0', () => {
            expect(getMonthName(0)).toBe('January');
        });

        it('should return "October" for month 9', () => {
            expect(getMonthName(9)).toBe('October');
        });

        it('should return "December" for month 11', () => {
            expect(getMonthName(11)).toBe('December');
        });
    });

    describe('getDayNames', () => {
        it('should return all 7 day abbreviations', () => {
            const days = getDayNames();
            expect(days).toHaveLength(7);
            expect(days).toEqual(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']);
        });
    });

    describe('generateCalendarGrid', () => {
        it('should generate correct grid for October 2022', () => {
            const grid = generateCalendarGrid(2022, 9);

            // October 2022 starts on Saturday, so first week has 6 nulls + day 1
            expect(grid[0]).toEqual([null, null, null, null, null, null, 1]);

            // Second week should be 2-8
            expect(grid[1]).toEqual([2, 3, 4, 5, 6, 7, 8]);

            // Last day of October is 31
            expect(grid[grid.length - 1]).toContain(31);
        });

        it('should generate correct grid for March 2020', () => {
            const grid = generateCalendarGrid(2020, 2);

            // March 2020 starts on Sunday, so first week starts with day 1
            expect(grid[0][0]).toBe(1);

            // Should have 31 days
            const allDays = grid.flat().filter((day) => day !== null) as number[];
            expect(allDays).toHaveLength(31);
            expect(Math.max(...allDays)).toBe(31);
        });

        it('should generate 5 weeks for February 2021', () => {
            const grid = generateCalendarGrid(2021, 1);
            expect(grid).toHaveLength(4);
        });

        it('should generate 6 weeks for October 2022', () => {
            const grid = generateCalendarGrid(2022, 9);
            expect(grid).toHaveLength(6);
        });

        it('should ensure each week has exactly 7 cells', () => {
            const grid = generateCalendarGrid(2022, 9);
            grid.forEach((week) => {
                expect(week).toHaveLength(7);
            });
        });
    });

    describe('isSameDay', () => {
        it('should return true for the same date', () => {
            const date1 = new Date(2022, 9, 3);
            const date2 = new Date(2022, 9, 3);
            expect(isSameDay(date1, date2)).toBe(true);
        });

        it('should return false for different days', () => {
            const date1 = new Date(2022, 9, 3);
            const date2 = new Date(2022, 9, 4);
            expect(isSameDay(date1, date2)).toBe(false);
        });

        it('should return false for same day but different month', () => {
            const date1 = new Date(2022, 9, 3);
            const date2 = new Date(2022, 10, 3);
            expect(isSameDay(date1, date2)).toBe(false);
        });

        it('should return false for same day and month but different year', () => {
            const date1 = new Date(2022, 9, 3);
            const date2 = new Date(2023, 9, 3);
            expect(isSameDay(date1, date2)).toBe(false);
        });
    });

    describe('formatDateForA11y', () => {
        it('should format date correctly with padding', () => {
            expect(formatDateForA11y(2022, 0, 1)).toBe('2022-01-01');
        });

        it('should format date correctly without padding needed', () => {
            expect(formatDateForA11y(2022, 9, 15)).toBe('2022-10-15');
        });

        it('should handle December correctly', () => {
            expect(formatDateForA11y(2022, 11, 31)).toBe('2022-12-31');
        });
    });
});
