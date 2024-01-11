import React, { useRef } from 'react';

export interface OptionButtonProps {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const OptionButton = ({ icon, label, active, onClick }: OptionButtonProps) => {
  const ref = useRef(null);

  return (
    <span className='flex flex-col group'>
      <button
        ref={ref}
        className={`
        ${active ? 'border-indigo-500' : ''}
        m-3 p-4 rounded-lg text-3xl hover:border-indigo-500 focus:ring focus:ring-indigo-500 lg:text-6xl lg:p-10`}
        onClick={onClick}
      >
        {icon}
      </button>
      <label
        className={`
        ${active ? 'opacity-100' : 'opacity-0'}
        font-bold opacity-0 group-hover:opacity-100 group-hover:animate-slide-from-left
        `}
      >
        {label}
      </label>
    </span>
  );
};

export default OptionButton;
