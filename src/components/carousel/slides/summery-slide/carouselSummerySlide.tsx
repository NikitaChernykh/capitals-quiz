import React from 'react';
import { useAppSelector } from '../../../../state/store.hooks';
import { questions } from '../../../../data/questions';

interface CarouselSummerySlideProps {
  active: boolean;
}

export default function CarouselSummerySlide({
  active,
}: CarouselSummerySlideProps) {
  const answers = useAppSelector((state) => state.quiz.answers);

  return (
    <li className='snap-center h-screen lg:flex bg-slate-100 relative'>
      <section className={`ml-10 lg:ml-80 lg:mt-40 flex h-full lg:h-2/3`}>
        <div>
          <h3>An overview of your answers:</h3>
          <ul>
            {Object.entries(answers).map(([questionId, answerIndex], index) => {
              const question = questions[index].question;
              let answerLabel = '';
              let answerIcon = '';

              if (questions[index].options[answerIndex]) {
                answerLabel = questions[index].options[answerIndex].label;
                answerIcon = questions[index].options[answerIndex].icon;
              }

              return (
                <li key={questionId} className={`mr-10 flex p-5 `}>
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
