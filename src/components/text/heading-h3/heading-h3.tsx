import React from 'react';
import { Heading3Props } from '../../../types/interfaces';

const Heading3 = ({ text, activateAnimation, color = '' }: Heading3Props) => {
  return (
    <h3
      className={`${color} mt-10 mb-5 flex text-3xl lg:text-7xl font-bold opacity-0 lg:w-3/5 lg:mb-20 ${
        activateAnimation ? 'animate-slide-from-right-to-left ' : ' '
      }`}
    >
      {text}
    </h3>
  );
};

export default Heading3;
