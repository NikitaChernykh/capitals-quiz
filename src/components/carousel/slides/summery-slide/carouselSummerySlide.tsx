import React from 'react';
import { useAppSelector } from '../../../../state/store.hooks';
import Heading3 from '../../../text/heading-h3/heading-h3';
import SubmitButton from '../../../buttons/submit-button/submitButton';
import axios from 'axios';
import AnswerCard from '../../../cards/answer-card/answerCard';

export interface CarouselSummerySlideProps {
  active: boolean;
}

export default function CarouselSummerySlide({
  active,
}: CarouselSummerySlideProps) {
  const answers = useAppSelector((state) => state.quiz.answers);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://run.mocky.io/v3/9ddaff5d-aa21-4b09-b307-596f85a17183',
        answers
      );
      console.log('Response: Success', response.data);
    } catch (error) {
      console.error('Error submitting answers:', error);
    }
  };

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
              return (
                <AnswerCard
                  answerIndex={answerIndex}
                  index={index}
                  active={active}
                  questionId={questionId}
                />
              );
            })}
          </ul>
          <SubmitButton activateAnimation={active} onClick={handleSubmit} />
        </div>
      </section>
    </li>
  );
}
