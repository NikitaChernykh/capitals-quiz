import React from 'react';
import { Heading2Props } from '../../../types/interfaces';

const Heading2 = ({ text, color = 'text-white' }: Heading2Props) => {
  return (
    <h2
      className={`${color}  text-2xl font-extrabold mx-auto text-center md:text-3xl xl:text-4xl xl:ml-[5%] 2xl:text-7xl`}
    >
      {text}
    </h2>
  );
};

export default Heading2;