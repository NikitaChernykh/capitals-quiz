import React from 'react';
import { questions } from '../../../data/questions';

interface AnswerCardProps {
  answerIndex: number;
  index: number;
  active: boolean;
  questionId: string;
}

const AnswerCard = ({
  answerIndex,
  index,
  active,
  questionId,
}: AnswerCardProps) => {
  const answerObject = questions[index];
  const question = answerObject.question;
  let answerLabel = '';
  let answerIcon = '';
  const answersDelay = 1 + index + 1 * 0.1;

  if (questions[index].options[answerIndex]) {
    answerLabel = questions[index].options[answerIndex].label;
    answerIcon = questions[index].options[answerIndex].icon;
  }
  return (
    <li
      style={{
        animationDelay: `${answersDelay}s`,
      }}
      key={questionId}
      className={`${active ? 'animate-slide-from-right-to-left-slow ' : ''}
                  mr-10 flex p-5 bg-indigo-200 rounded-lg mb-5 opacity-0`}
    >
      <h4 className={`lg:text-3xl font-bold w-full lg:w-1/2`}>{question}</h4>

      <p className='lg:text-3xl font-bold w-full lg:w-1/2'>
        {answerLabel} {answerIcon}
      </p>
    </li>
  );
};

export default AnswerCard;
