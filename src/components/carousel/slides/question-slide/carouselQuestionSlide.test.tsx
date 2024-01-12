import React from 'react';
import { render, screen } from '@testing-library/react';
import CarouselQuestionSlide from './carouselQuestionSlide';
import { createStore } from '../../../../state/store';
import { Provider } from 'react-redux';

describe('CarouselQuestionSlide Component', () => {
  it('renders correctly with given props', () => {
    render(
      <Provider store={createStore()}>
        <CarouselQuestionSlide
          active={false}
          questionId={0}
          question={'Abu Dhabi is the capital of ..?'}
          options={[]}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </Provider>
    );

    expect(
      screen.getByText('Abu Dhabi is the capital of ..?')
    ).toBeInTheDocument();
  });
});
