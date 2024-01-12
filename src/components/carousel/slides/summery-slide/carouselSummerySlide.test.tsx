import React from 'react';
import axios from 'axios';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import CarouselSummerySlide from './carouselSummerySlide';
import { createStore } from '../../../../state/store';
import { Provider } from 'react-redux';

jest.mock('axios');

afterEach(cleanup);

describe('CarouselSummerySlide Component', () => {
  it('renders correctly with given props', () => {
    render(
      <Provider store={createStore()}>
        <CarouselSummerySlide active={true} />
      </Provider>
    );

    expect(
      screen.getByText('An overview of your answers:')
    ).toBeInTheDocument();
  });

  it('shows thank you on success submission', async () => {
    render(
      <Provider store={createStore()}>
        <CarouselSummerySlide active={true} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Submit Results'));

    expect(await screen.findByText('Thank you!')).toBeVisible();
  });
});
