import React from 'react';
import { CarouselQuestionSlideProps } from './../../../../types/interfaces';
import Heading2 from '../../../text/heading-h2/heading-h2';
import OptionsGroup from '../../../buttons/option-button/options-group/optionsGroup';

export default function CarouselQuestionSlide({
  question,
  options,
  questionId,
}: CarouselQuestionSlideProps) {
  return (
    <li className='snap-center h-screen lg:flex'>
      <section
        className={` p-6 flex items-center bg-indigo-500 h-1/2 lg:w-1/2 lg:h-full`}
      >
        <Heading2 text={question} />
      </section>
      <section className='bg-slate-100 flex items-center h-1/2 lg:w-1/2 lg:w-1/2 lg:h-full'>
        <OptionsGroup options={options} questionId={questionId} />
      </section>
    </li>
  );
}
