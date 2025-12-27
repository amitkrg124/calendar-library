import React, { useState } from 'react';
import { Calendar } from './lib';
import './App.css';

/**
 * Demo application showcasing the Calendar component
 */
function App() {
    // Example dates to demonstrate the calendar
    const [selectedDate, setSelectedDate] = useState<Date>(new Date(2022, 9, 3));

    const exampleDates = [
        { label: 'October 3, 2022', date: new Date(2022, 9, 3) },
        { label: 'March 23, 2020', date: new Date(2020, 2, 23) },
        { label: 'January 1, 2023', date: new Date(2023, 0, 1) },
        { label: 'December 25, 2021', date: new Date(2021, 11, 25) },
        { label: 'February 29, 2020', date: new Date(2020, 1, 29) },
        { label: 'Today', date: new Date() },
    ];

    return (
        <div className="App">
            <header className="App-header">
                <h1>React Calendar Component</h1>
                <p className="subtitle">A reusable calendar component for React applications</p>
            </header>

            <main className="App-main">
                <section className="demo-section">
                    <h2>Live Demo</h2>

                    <div className="calendar-container">
                        <Calendar date={selectedDate} />
                    </div>

                    <div className="date-selector">
                        <h3>Select a Date:</h3>
                        <div className="date-buttons">
                            {exampleDates.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedDate(item.date)}
                                    className={`date-button ${selectedDate.toDateString() === item.date.toDateString()
                                        ? 'active'
                                        : ''
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="usage-section">
                    <h2>Usage</h2>
                    <pre className="code-block">
                        <code>{`import { Calendar } from './components/Calendar';

function MyComponent() {
  return <Calendar date={new Date(2022, 9, 3)} />;
}`}</code>
                    </pre>
                </section>

                <section className="features-section">
                    <h2>Features</h2>
                    <ul className="features-list">
                        <li>✓ Displays month and year header</li>
                        <li>✓ Shows day of week labels</li>
                        <li>✓ Renders dates aligned with correct days</li>
                        <li>✓ Highlights the specified date</li>
                        <li>✓ Fully typed with TypeScript</li>
                        <li>✓ Comprehensive test coverage</li>
                        <li>✓ Accessible with ARIA labels</li>
                        <li>✓ Responsive and reusable</li>
                    </ul>
                </section>
            </main>

            <footer className="App-footer">
                <p>Built with React and TypeScript</p>
            </footer>
        </div>
    );
}

export default App;
