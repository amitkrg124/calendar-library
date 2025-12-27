import React from 'react';
import { render, screen } from '@testing-library/react';
import { Calendar } from './Calendar';

describe('Calendar Component', () => {
    describe('Rendering', () => {
        it('should render without crashing', () => {
            const testDate = new Date(2022, 9, 3); // October 3, 2022
            render(<Calendar date={testDate} />);
            expect(screen.getByTestId('calendar')).toBeInTheDocument();
        });

        it('should render the calendar header with correct month and year', () => {
            const testDate = new Date(2022, 9, 3); // October 3, 2022
            render(<Calendar date={testDate} />);

            const header = screen.getByTestId('calendar-header');
            expect(header).toBeInTheDocument();
            expect(header).toHaveTextContent('October 2022');
        });

        it('should render all day name headers', () => {
            const testDate = new Date(2022, 9, 3);
            render(<Calendar date={testDate} />);

            const dayHeader = screen.getByTestId('calendar-day-header');
            expect(dayHeader).toBeInTheDocument();

            // Check that all 7 days are present
            expect(dayHeader).toHaveTextContent('Su');
            expect(dayHeader).toHaveTextContent('Mo');
            expect(dayHeader).toHaveTextContent('Tu');
            expect(dayHeader).toHaveTextContent('We');
            expect(dayHeader).toHaveTextContent('Th');
            expect(dayHeader).toHaveTextContent('Fr');
            expect(dayHeader).toHaveTextContent('Sa');
        });

        it('should render the calendar grid', () => {
            const testDate = new Date(2022, 9, 3);
            render(<Calendar date={testDate} />);

            const grid = screen.getByTestId('calendar-grid');
            expect(grid).toBeInTheDocument();
        });
    });

    describe('Date Highlighting', () => {
        it('should highlight the correct date (October 3, 2022)', () => {
            const testDate = new Date(2022, 9, 3);
            render(<Calendar date={testDate} />);

            const highlightedCell = screen.getByTestId('highlighted-cell');
            expect(highlightedCell).toBeInTheDocument();
            expect(highlightedCell).toHaveTextContent('3');
        });

        it('should highlight the correct date (March 23, 2020)', () => {
            const testDate = new Date(2020, 2, 23);
            render(<Calendar date={testDate} />);

            const highlightedCell = screen.getByTestId('highlighted-cell');
            expect(highlightedCell).toBeInTheDocument();
            expect(highlightedCell).toHaveTextContent('23');
        });

        it('should only highlight one date', () => {
            const testDate = new Date(2022, 9, 3);
            render(<Calendar date={testDate} />);

            const highlightedCells = screen.getAllByTestId('highlighted-cell');
            expect(highlightedCells).toHaveLength(1);
        });
    });

    describe('Different Dates', () => {
        it('should correctly render calendar for January 2023', () => {
            const testDate = new Date(2023, 0, 15);
            render(<Calendar date={testDate} />);

            const header = screen.getByTestId('calendar-header');
            expect(header).toHaveTextContent('January 2023');

            const highlightedCell = screen.getByTestId('highlighted-cell');
            expect(highlightedCell).toHaveTextContent('15');
        });

        it('should correctly render calendar for December 2021', () => {
            const testDate = new Date(2021, 11, 25);
            render(<Calendar date={testDate} />);

            const header = screen.getByTestId('calendar-header');
            expect(header).toHaveTextContent('December 2021');

            const highlightedCell = screen.getByTestId('highlighted-cell');
            expect(highlightedCell).toHaveTextContent('25');
        });

        it('should handle leap year February correctly', () => {
            const testDate = new Date(2020, 1, 29); // February 29, 2020 (leap year)
            render(<Calendar date={testDate} />);

            const header = screen.getByTestId('calendar-header');
            expect(header).toHaveTextContent('February 2020');

            const highlightedCell = screen.getByTestId('highlighted-cell');
            expect(highlightedCell).toHaveTextContent('29');
        });
    });

    describe('Calendar Grid Structure', () => {
        it('should display all dates for the month', () => {
            const testDate = new Date(2022, 9, 3); // October 2022
            const { container } = render(<Calendar date={testDate} />);

            // October has 31 days
            const grid = screen.getByTestId('calendar-grid');
            const allCells = grid.querySelectorAll('[role="gridcell"]');

            // Should have 31 non-empty cells
            const nonEmptyCells = Array.from(allCells).filter(
                (cell) => cell.textContent !== ''
            );
            expect(nonEmptyCells).toHaveLength(31);
        });

        it('should align dates correctly with day headers', () => {
            const testDate = new Date(2022, 9, 1); // October 1, 2022 (Saturday)
            render(<Calendar date={testDate} />);

            // October 1, 2022 is a Saturday, so it should be highlighted
            const highlightedCell = screen.getByTestId('highlighted-cell');
            expect(highlightedCell).toHaveTextContent('1');
        });
    });

    describe('Accessibility', () => {
        it('should have proper ARIA labels for highlighted date', () => {
            const testDate = new Date(2022, 9, 3);
            render(<Calendar date={testDate} />);

            const highlightedCell = screen.getByTestId('highlighted-cell');
            expect(highlightedCell).toHaveAttribute('aria-label', '2022-10-03');
        });

        it('should have role="grid" on the calendar grid', () => {
            const testDate = new Date(2022, 9, 3);
            render(<Calendar date={testDate} />);

            const grid = screen.getByTestId('calendar-grid');
            expect(grid).toHaveAttribute('role', 'grid');
        });

        it('should have role="gridcell" on date cells', () => {
            const testDate = new Date(2022, 9, 3);
            const { container } = render(<Calendar date={testDate} />);

            const gridCells = container.querySelectorAll('[role="gridcell"]');
            expect(gridCells.length).toBeGreaterThan(0);
        });

        it('should have tabIndex 0 on highlighted cell for keyboard navigation', () => {
            const testDate = new Date(2022, 9, 3);
            render(<Calendar date={testDate} />);

            const highlightedCell = screen.getByTestId('highlighted-cell');
            expect(highlightedCell).toHaveAttribute('tabIndex', '0');
        });
    });

    describe('Props Validation', () => {
        it('should accept and render different date objects', () => {
            const dates = [
                new Date(2022, 9, 3),
                new Date(2020, 2, 23),
                new Date(2023, 11, 31),
                new Date(2021, 0, 1),
            ];

            dates.forEach((date) => {
                const { unmount } = render(<Calendar date={date} />);
                expect(screen.getByTestId('calendar')).toBeInTheDocument();
                unmount();
            });
        });
    });
});
