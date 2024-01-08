import React from 'react';
import { Option } from './../../../../types/interfaces';
import Heading2 from '../../../text/heading-h2/heading-h2';

interface CarouselQuestionSlideProps {
  question: string;
  options: Option[];
}

export default function CarouselQuestionSlide({
  question,
}: CarouselQuestionSlideProps) {
  return (
    <li className='snap-center h-screen lg:flex'>
      <section
        className={` p-6 flex items-center bg-indigo-500 h-1/2 lg:w-1/2 lg:h-full`}
      >
        <Heading2 text={question} />
      </section>
      <section className='bg-slate-100 flex items-center h-1/2 lg:w-1/2 lg:w-1/2 lg:h-full'>
        <p>{'[option1][option2][option3]'}</p>
      </section>
    </li>
  );
}
