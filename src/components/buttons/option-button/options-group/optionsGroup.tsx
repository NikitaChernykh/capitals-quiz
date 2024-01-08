import OptionButton from '../optionButton';
import { OptionsGroupProps } from '../../../../types/interfaces';
import { useAppDispatch, useAppSelector } from '../../../../state/store.hooks';
import { setAnswer } from '../../../../state/slices/selectedOptionSlice';

const OptionsGroup = ({ options, questionId }: OptionsGroupProps) => {
  const quizAnswers = useAppSelector((state) => state.quiz.answers);
  const dispatch = useAppDispatch();

  return (
    <ul className='flex text-center mx-auto'>
      {options.map((option, index) => (
        <li key={index}>
          <OptionButton
            icon={option.icon}
            label={option.label}
            active={quizAnswers[questionId] === index}
            onClick={() => {
              dispatch(setAnswer({ question: questionId, answer: index }));
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default OptionsGroup;
