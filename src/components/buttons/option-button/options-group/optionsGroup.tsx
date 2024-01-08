import OptionButton from '../optionButton';

import { OptionsGroupProps } from '../../../../types/interfaces';
import { useState } from 'react';

const OptionsGroup = ({ options }: OptionsGroupProps) => {
  const [answer, setAnswer] = useState<number | null>(null);
  return (
    <ul className='flex text-center mx-auto'>
      {options.map((option, index) => (
        <li key={index}>
          <OptionButton
            icon={option.icon}
            label={option.label}
            active={answer === index}
            onClick={() => {
              setAnswer(index);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default OptionsGroup;
