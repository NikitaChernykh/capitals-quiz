import React from 'react';
import { Heading2Props } from '../../../types/interfaces';

const Heading2 = ({
  text,
  activateAnimation,
  color = 'text-white',
}: Heading2Props) => {
  return (
    <h2
      className={`${color}  text-2xl font-extrabold mx-auto text-center md:text-3xl xl:text-4xl xl:ml-[5%] 2xl:text-6xl ${
        activateAnimation ? 'animate-slide-from-left opacity-100' : 'opacity-0'
      }`}
    >
      {text}
    </h2>
  );
};

export default Heading2;
