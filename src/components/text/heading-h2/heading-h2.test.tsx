import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading2 from './heading-h2';

describe('Heading2 Component', () => {
  it('renders the text correctly', () => {
    const sampleText = 'Test Heading';
    render(<Heading2 text={sampleText} activateAnimation={false} />);

    expect(screen.getByText(sampleText)).toBeInTheDocument();
  });

  it('applies correct styles based on props', () => {
    const sampleText = 'Test Heading';
    const color = 'text-blue-500';

    render(
      <Heading2 text={sampleText} color={color} activateAnimation={false} />
    );
    const headingElement = screen.getByText(sampleText);
    expect(headingElement).toHaveClass('font-extrabold');
    expect(headingElement).toHaveClass(color);
  });
});
