import React from 'react';
import { render, screen } from '@testing-library/react';
import CarouselSummerySlide from './carouselSummerySlide';
import { createStore } from '../../../../state/store';
import { Provider } from 'react-redux';

jest.mock('axios');

describe('CarouselSummerySlide Component', () => {
  it('renders correctly with given props', () => {
    render(
      <Provider store={createStore()}>
        <CarouselSummerySlide active={false} />
      </Provider>
    );

    expect(
      screen.getByText('An overview of your answers:')
    ).toBeInTheDocument();
  });
});
