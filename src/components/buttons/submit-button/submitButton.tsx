import React from 'react';

interface OptionButtonProps {
  activateAnimation: boolean;
  onClick: () => void;
}

const SubmitButton = ({ activateAnimation, onClick }: OptionButtonProps) => {
  const buttonDelay = 6;
  return (
    <button
      className={`${
        activateAnimation ? 'animate-slide-from-right-to-left-slow ' : ''
      } flex p-5 font-bold text-white bg-indigo-500 rounded-lg opacity-0 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50`}
      style={{
        animationDelay: `${buttonDelay}s`,
      }}
      onClick={onClick}
      aria-label='Submit Results'
    >
      Submit Results
    </button>
  );
};

export default SubmitButton;
