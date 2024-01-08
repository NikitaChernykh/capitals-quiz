import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CarouselIndicator from './carouselIndicator';

describe('CarouselIndicator Component', () => {
  const mockOnIndicatorClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correct number of indicators', () => {
    const numberOfSlides = 5;
    render(
      <CarouselIndicator
        numberOfSlides={numberOfSlides}
        activeSlide={0}
        onIndicatorClick={mockOnIndicatorClick}
      />
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(numberOfSlides);
  });

  it('highlights the active indicator', () => {
    const numberOfSlides = 3;
    const activeSlide = 1;
    render(
      <CarouselIndicator
        numberOfSlides={numberOfSlides}
        activeSlide={activeSlide}
        onIndicatorClick={mockOnIndicatorClick}
      />
    );

    const activeIndicator = screen.getAllByRole('button')[activeSlide];
    expect(activeIndicator).toHaveClass('bg-indigo-500');
  });

  it('calls onIndicatorClick with the correct index', () => {
    const numberOfSlides = 3;
    render(
      <CarouselIndicator
        numberOfSlides={numberOfSlides}
        activeSlide={0}
        onIndicatorClick={mockOnIndicatorClick}
      />
    );

    const secondIndicator = screen.getAllByRole('button')[1];
    fireEvent.click(secondIndicator);
    expect(mockOnIndicatorClick).toHaveBeenCalledWith(1);
  });
});
