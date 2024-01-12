import React, { useState } from 'react';
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
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = async () => {
    const placeholderApi =
      'https://run.mocky.io/v3/9ddaff5d-aa21-4b09-b307-596f85a17183';
    const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || placeholderApi;
    try {
      await axios.post(apiEndpoint, answers);
      console.log('Response: Success');
      setSubmissionSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className='snap-center h-screen lg:flex bg-slate-100 relative'>
      <section
        className={`lg:absolute z-10 bg-indigo-500 lg:w-1/2 lg:h-full ${
          active ? 'lg:animate-slide-left' : ' '
        }`}
      ></section>
      {submissionSuccess ? (
        <section
          className={`w-full ml-10 lg:ml-80 lg:mt-40 flex h-full lg:h-2/3`}
        >
          <Heading3 text='Thank you!' activateAnimation={active} />
        </section>
      ) : (
        <section className={`ml-10 lg:ml-80 lg:mt-40 flex h-full lg:h-2/3`}>
          <div>
            <Heading3
              text='An overview of your answers:'
              activateAnimation={active}
            />
            <ul>
              {Object.entries(answers).map(([_, answerIndex], index) => {
                return (
                  <AnswerCard
                    key={index}
                    answerIndex={answerIndex}
                    index={index}
                    active={active}
                  />
                );
              })}
            </ul>
            <SubmitButton activateAnimation={active} onClick={handleSubmit} />
          </div>
        </section>
      )}
    </li>
  );
}
