import React from 'react';
import { questions } from '../../data/questions';
import CarouselQuestionSlide from './slides/question-slide/carouselQuestionSlide';

export default function Carousel() {
  return (
    <section>
      <ul className='max-h-screen overflow-auto snap-y snap-mandatory'>
        {questions.map((item, slideIndex) => {
          return (
            <CarouselQuestionSlide
              key={slideIndex}
              question={item.question}
              options={item.options}
              questionId={slideIndex}
            />
          );
        })}
      </ul>
    </section>
  );
}
