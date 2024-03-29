import React from 'react';

export interface CarouselIndicatorProps {
  numberOfSlides: number;
  activeSlide: number;
}

const CarouselIndicator = ({
  numberOfSlides,
  activeSlide,
}: CarouselIndicatorProps) => {
  return (
    <div className='fixed z-40 ml-1 lg:h-screen lg:w-12 lg:ml-2'>
      <div className='flex h-screen items-center'>
        <div
          className='flex flex-col bg-slate-500 bg-opacity-25 rounded-lg'
          role='tablist'
        >
          {Array.from({ length: numberOfSlides }).map((_, index) => {
            const isActive = index === activeSlide;
            const buttonClass = isActive
              ? 'h-4 w-4 rounded-full m-2 bg-indigo-500 border-white border-2'
              : 'h-4 w-4 bg-white rounded-full m-2';
            return (
              <button
                key={index}
                className={buttonClass}
                disabled
                tabIndex={-1}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarouselIndicator;
