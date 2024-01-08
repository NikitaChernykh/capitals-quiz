// Types
export interface Option {
    icon: string;
    label: string;
}

export interface Question {
    question: string;
    options: Option[];
}

// Props
export interface Heading2Props {
    text: string;
    activateAnimation: boolean;
    color?: string;
}

export interface Heading3Props {
    text: string;
    activateAnimation: boolean;
    color?: string;
}

export  interface OptionsGroupProps {
    options: Option[];
    questionId: number;
}

export interface CarouselQuestionSlideProps {
    questionId: number;
    question: string;
    active: boolean;
    options: Option[];
}

export interface CarouselSummerySlideProps {
    active: boolean;
}
  
export interface OptionButtonProps {
    icon: string;
    label: string;
    active: boolean;
    onClick: () => void;
}

export interface CarouselIndicatorProps {
    numberOfSlides: number;
    activeSlide: number;
    onIndicatorClick: (index: number) => void;
}