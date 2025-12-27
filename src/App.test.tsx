import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calendar component demo', () => {
    render(<App />);
    const headingElement = screen.getByText(/React Calendar Component/i);
    expect(headingElement).toBeInTheDocument();
});
