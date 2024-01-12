import React from 'react';

export interface OptionButtonProps {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const OptionButton = ({ icon, label, active, onClick }: OptionButtonProps) => {
  return (
    <div className='flex flex-col group'>
      <button
        className={`w-25 h-25 m-3 lg:-mb-5 p-4 text-3xl focus:ring focus:ring-indigo-500 lg:text-6xl lg:p-10 group-hover:animate-slide-to-top group-hover:animate-slide-to-top`}
        onClick={onClick}
      >
        {icon}
      </button>
      <label
        className={`
        ${active ? 'opacity-100' : 'opacity-0'}
        font-bold text-indigo-700 opacity-0 group-hover:opacity-100 group-hover:animate-slide-from-left -mt-5`}
      >
        {label}
      </label>
    </div>
  );
};

export default OptionButton;
