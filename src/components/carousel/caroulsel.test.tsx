import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from './carousel';
import { Provider } from 'react-redux';
import { createStore } from '../../state/store';
import { questions } from '../../data/questions';

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
}));
const observe = jest.fn();
const unobserve = jest.fn();
const disconnect = jest.fn();

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();

  mockIntersectionObserver.mockReturnValue({
    observe: () => observe,
    unobserve: () => unobserve,
    disconnect: () => disconnect,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe('Carousel Component', () => {
  it('renders correctly with given props', () => {
    render(
      <Provider store={createStore()}>
        <Carousel />
      </Provider>
    );

    expect(screen.getByTestId('slide-list')).toHaveClass('overflow-hidden');
  });

  it('renders all carousel questions slides', () => {
    render(
      <Provider store={createStore()}>
        <Carousel />
      </Provider>
    );

    const slides = screen.getAllByTestId('slide');
    expect(slides.length).toBe(questions.length);
  });
});
