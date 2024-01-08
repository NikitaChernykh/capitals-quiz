import React from 'react';
import { CarouselIndicatorProps } from '../../../types/interfaces';

const CarouselIndicator = ({
  numberOfSlides,
  activeSlide,
  onIndicatorClick,
}: CarouselIndicatorProps) => {
  return (
    <div className='fixed lg:h-screen lg:w-10 z-40'>
      <div className='flex h-screen items-center'>
        <div className='flex flex-col bg-slate-500 bg-opacity-25 rounded-lg'>
          {Array.from({ length: numberOfSlides }).map((_, index) => {
            const isActive = index === activeSlide;
            const buttonClass = isActive
              ? 'h-3 w-3 rounded-full m-2 bg-indigo-500 border-white border-2'
              : 'h-3 w-3 bg-white rounded-full m-2';
            return (
              <button
                key={index}
                className={buttonClass}
                onClick={() => {
                  onIndicatorClick(index);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarouselIndicator;
