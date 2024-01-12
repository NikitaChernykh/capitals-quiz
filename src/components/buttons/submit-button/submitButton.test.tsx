import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubmitButton from './submitButton';

describe('SubmitButton Component', () => {
  const mockOnClick = jest.fn();

  it('renders the submit button', () => {
    render(<SubmitButton activateAnimation={false} onClick={mockOnClick} />);

    expect(screen.getByText('Submit Results')).toBeInTheDocument();
  });

  it('applies correct animation and style based on activateAnimation prop', () => {
    const { rerender } = render(
      <SubmitButton activateAnimation={false} onClick={mockOnClick} />
    );
    const button = screen.getByText('Submit Results');

    expect(button).not.toHaveClass('animate-slide-from-right-to-left-slow');
    expect(button).toHaveStyle('animationDelay: 2s');

    rerender(<SubmitButton activateAnimation={true} onClick={mockOnClick} />);
    expect(button).toHaveClass('animate-slide-from-right-to-left-slow');
  });

  it('triggers onClick event when clicked', () => {
    render(<SubmitButton activateAnimation={true} onClick={mockOnClick} />);

    fireEvent.click(screen.getByText('Submit Results'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
