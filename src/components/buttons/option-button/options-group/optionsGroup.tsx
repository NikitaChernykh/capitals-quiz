import React, { useRef } from 'react';
import OptionButton from '../optionButton';
import { Option } from '../../../../types/interfaces';
import { useAppDispatch, useAppSelector } from '../../../../state/store.hooks';
import { setAnswer } from '../../../../state/slices/selectedOptionSlice';

export interface OptionsGroupProps {
  options: Option[];
  questionId: number;
  onClick: () => void;
}

const OptionsGroup = ({ options, questionId, onClick }: OptionsGroupProps) => {
  const quizAnswers = useAppSelector((state) => state.quiz.answers);
  const dispatch = useAppDispatch();
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const moveToNextButton = (currentIndex: number, forward: boolean) => {
    const nextIndex = forward
      ? (currentIndex + 1) % options.length
      : (currentIndex - 1 + options.length) % options.length;

    const nextButtonRef = buttonRefs.current[nextIndex];
    if (nextButtonRef) {
      nextButtonRef.focus();
    }
  };

  const attachRef = (element: HTMLButtonElement | null, index: number) => {
    if (element) {
      buttonRefs.current[index] = element;
    }
  };

  const handleOptionClick = (index: number) => {
    dispatch(setAnswer({ question: questionId, answer: index }));

    const button = buttonRefs.current[index];
    if (button) {
      button.blur();
    }

    onClick();
  };

  return (
    <ul className='flex text-center mx-auto mb-40 lg:mb-0'>
      {options.map((option, index) => (
        <li key={index}>
          <OptionButton
            ref={(element) => attachRef(element, index)}
            icon={option.icon}
            label={option.label}
            active={quizAnswers[questionId] === index}
            onClick={() => handleOptionClick(index)}
            onKeyDown={(event) => {
              if (event.key === 'Tab') {
                event.preventDefault();
                moveToNextButton(index, !event.shiftKey);
              }

              console.log(event);
              console.log(event.key);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default OptionsGroup;
