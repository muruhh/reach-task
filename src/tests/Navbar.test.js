import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';


it('should render Navbar component', () => {
    render(<Navbar />);
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
});

it('should be able to write inside input filed', () => {
    render(<Navbar />);
    const inputElement = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(inputElement, { target: { value: 'Spongebob'}});
    expect(inputElement.value).toBe('Spongebob');
}); 