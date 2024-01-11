import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import OptionButton from './optionButton';

describe('OptionButton Component', () => {
  const mockOnClick = jest.fn();

  it('renders correctly with given props', () => {
    render(
      <OptionButton
        icon='👍'
        label='Like'
        active={true}
        onClick={mockOnClick}
      />
    );

    expect(screen.getByText('👍')).toBeInTheDocument();
    expect(screen.getByText('Like')).toBeInTheDocument();
  });

  it('applies correct styles based on the active prop', () => {
    render(
      <OptionButton
        icon='👍'
        label='Like'
        active={false}
        onClick={mockOnClick}
      />
    );

    expect(screen.getByRole('button')).toHaveClass('border-gray-300');
  });

  it('calls onClick prop when clicked', () => {
    render(
      <OptionButton
        icon='👍'
        label='Like'
        active={true}
        onClick={mockOnClick}
      />
    );

    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
