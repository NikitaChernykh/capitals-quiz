import OptionButton from '../optionButton';
import { Option } from '../../../../types/interfaces';
import { useAppDispatch, useAppSelector } from '../../../../state/store.hooks';
import { setAnswer } from '../../../../state/slices/selectedOptionSlice';
import { useRef, useState } from 'react';

export interface OptionsGroupProps {
  options: Option[];
  questionId: number;
  onClick: () => void;
}

const OptionsGroup = ({ options, questionId, onClick }: OptionsGroupProps) => {
  const quizAnswers = useAppSelector((state) => state.quiz.answers);
  const dispatch = useAppDispatch();
  const optionsRef = useRef<HTMLUListElement>(null);

  return (
    <ul className='flex text-center mx-auto mb-40 lg:mb-0' ref={optionsRef}>
      {options.map((option, index) => (
        <li key={index}>
          <OptionButton
            icon={option.icon}
            label={option.label}
            active={quizAnswers[questionId] === index}
            onClick={() => {
              dispatch(setAnswer({ question: questionId, answer: index }));
              onClick();
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default OptionsGroup;
