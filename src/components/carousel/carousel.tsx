import React, { useCallback, useEffect, useRef, useState } from 'react';
import CarouselQuestionSlide from './slides/question-slide/carouselQuestionSlide';
import { questions } from '../../data/questions';
import CarouselIndicator from './carousel-indicator/carouselIndicator';
import CarouselSummerySlide from './slides/summery-slide/carouselSummerySlide';

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const numberOfSlides = questions.length + 1;
  const carouselRef = useRef<HTMLUListElement>(null);

  const scrollToSlide = useCallback((index: number) => {
    if (carouselRef.current) {
      const slideToScrollTo = carouselRef.current.children[index];
      slideToScrollTo.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });

      const delayInactivationTimeout = setTimeout(() => {
        setActiveSlide(index);
      }, 1000);

      clearTimeout(delayInactivationTimeout);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slides = Array.from(carouselRef.current?.children || []);
            const index = slides.indexOf(entry.target);
            setActiveSlide(index);
          }
        });
      },
      {
        root: carouselRef.current,
        threshold: 0.5,
      }
    );

    const slides = Array.from(carouselRef.current?.children || []);
    slides.forEach((slide) => observer.observe(slide));

    return () => {
      observer.disconnect();
    };
  }, [activeSlide]);

  return (
    <section>
      <CarouselIndicator
        numberOfSlides={numberOfSlides}
        activeSlide={activeSlide}
      />
      <ul
        ref={carouselRef}
        data-testid='slide-list'
        className='max-h-screen overflow-hidden snap-y snap-mandatory'
      >
        {questions.map((item, slideIndex) => {
          return (
            <CarouselQuestionSlide
              key={slideIndex}
              question={item.question}
              options={item.options}
              active={activeSlide === slideIndex}
              questionId={slideIndex}
              onClick={() => scrollToSlide(activeSlide + 1)}
            />
          );
        })}
        <CarouselSummerySlide active={activeSlide === 5} />
      </ul>
    </section>
  );
}
