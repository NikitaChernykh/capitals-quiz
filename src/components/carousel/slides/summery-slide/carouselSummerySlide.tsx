import React from 'react';
import { useAppSelector } from '../../../../state/store.hooks';
import { questions } from '../../../../data/questions';
import { CarouselSummerySlideProps } from '../../../../types/interfaces';
import Heading3 from '../../../text/heading-h3/heading-h3';

export default function CarouselSummerySlide({
  active,
}: CarouselSummerySlideProps) {
  const answers = useAppSelector((state) => state.quiz.answers);

  return (
    <li className='snap-center h-screen lg:flex bg-slate-100 relative'>
      <section
        className={`lg:absolute z-10 bg-indigo-500 lg:w-1/2 lg:h-full ${
          active ? 'lg:animate-slide-left' : ' '
        }`}
      ></section>
      <section className={`ml-10 lg:ml-80 lg:mt-40 flex h-full lg:h-2/3`}>
        <div>
          <Heading3
            text='An overview of your answers:'
            activateAnimation={active}
          />
          <ul>
            {Object.entries(answers).map(([questionId, answerIndex], index) => {
              const question = questions[index].question;
              let answerLabel = '';
              let answerIcon = '';
              const answersDelay = 1 + index + 1 * 0.1;

              if (questions[index].options[answerIndex]) {
                answerLabel = questions[index].options[answerIndex].label;
                answerIcon = questions[index].options[answerIndex].icon;
              }

              return (
                <li
                  style={{
                    animationDelay: `${answersDelay}s`,
                  }}
                  key={questionId}
                  className={`${
                    active ? 'animate-slide-from-right-to-left-slow ' : ''
                  }
                  mr-10 flex p-5 bg-indigo-200 rounded-lg mb-5 opacity-0`}
                >
                  <h4 className={`lg:text-3xl font-bold w-full lg:w-1/2`}>
                    {question}
                  </h4>

                  <p className='lg:text-3xl font-bold w-full lg:w-1/2'>
                    {answerLabel} {answerIcon}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </li>
  );
}
