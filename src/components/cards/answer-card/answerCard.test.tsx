import React from 'react';
import { render, screen } from '@testing-library/react';
import AnswerCard from './answerCard';

describe('AnswerCard Component', () => {
  it('renders correctly with given props', () => {
    render(<AnswerCard answerIndex={0} index={0} active={true} />);
    expect(
      screen.getByText('Abu Dhabi is the capital of ..?')
    ).toBeInTheDocument();
  });
});
