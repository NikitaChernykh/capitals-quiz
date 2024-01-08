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
    color?: string;
}

export  interface OptionsGroupProps {
    options: Option[];
}


export interface OptionButtonProps {
    icon: string;
    label: string;
    active: boolean;
    onClick: () => void;
  }