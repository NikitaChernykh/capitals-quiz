import React from 'react';
import { Option } from './../../../../types/interfaces';
import Heading2 from '../../../text/heading-h2/heading-h2';
import OptionsGroup from '../../../buttons/option-button/options-group/optionsGroup';

export interface CarouselQuestionSlideProps {
  questionId: number;
  question: string;
  active: boolean;
  options: Option[];
  onClick: () => void;
}

export default function CarouselQuestionSlide({
  question,
  options,
  active,
  questionId,
  onClick,
}: CarouselQuestionSlideProps) {
  return (
    <li className='snap-center h-screen lg:flex'>
      <section
        className={`flex items-center bg-indigo-500 h-1/2 lg:w-1/2 lg:h-full p-6`}
      >
        <Heading2 text={question} activateAnimation={active} />
      </section>
      <section className='bg-slate-100 flex items-center h-1/2 lg:w-1/2 lg:w-1/2 lg:h-full'>
        <OptionsGroup
          options={options}
          questionId={questionId}
          onClick={onClick}
        />
      </section>
    </li>
  );
}
