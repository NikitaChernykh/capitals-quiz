import { fireEvent, render, screen } from '@testing-library/react';
import OptionsGroup from './optionsGroup';
import { Provider } from 'react-redux';
import { createStore } from './../../../../state/store';

describe('OptionGroup Component', () => {
  const mockOnClick = jest.fn();

  const mockOptions = [
    {
      icon: '🇦🇪',
      label: 'UAE',
    },
    {
      icon: '🇭🇹',
      label: 'HAITI',
    },
    {
      icon: '🇧🇧',
      label: 'BARBADOS',
    },
  ];

  it('renders correctly with given props', () => {
    render(
      <Provider store={createStore()}>
        <OptionsGroup
          options={mockOptions}
          questionId={0}
          onClick={mockOnClick}
        />
      </Provider>
    );

    expect(screen.getByText('🇦🇪')).toBeInTheDocument();
    expect(screen.getByText('🇭🇹')).toBeInTheDocument();
    expect(screen.getByText('🇧🇧')).toBeInTheDocument();
  });

  it('calls onClick prop when clicked', () => {
    render(
      <Provider store={createStore()}>
        <OptionsGroup
          options={mockOptions}
          questionId={0}
          onClick={mockOnClick}
        />
      </Provider>
    );

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(mockOnClick).toHaveBeenCalled();
  });

  it('changes focus to next button on Tab press', () => {
    render(
      <Provider store={createStore()}>
        <OptionsGroup
          options={mockOptions}
          questionId={0}
          onClick={mockOnClick}
        />
      </Provider>
    );

    const firstButton = screen.getByText('🇦🇪');
    firstButton.focus();
    expect(firstButton).toHaveFocus();

    fireEvent.keyDown(firstButton, { key: 'Tab', code: 'Tab' });

    const secondButton = screen.getByText('🇭🇹');
    expect(secondButton).toHaveFocus();
  });
});
