import { fireEvent, render, screen } from '@testing-library/react';
import OptionsGroup from './optionsGroup';
import { Provider } from 'react-redux';
import { createStore } from './../../../../state/store';

describe('OptionGroup Component', () => {
  it('renders correctly with given props', () => {
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

    render(
      <Provider store={createStore()}>
        <OptionsGroup options={mockOptions} questionId={0} />
      </Provider>
    );

    expect(screen.getByText('🇦🇪')).toBeInTheDocument();
    expect(screen.getByText('🇭🇹')).toBeInTheDocument();
    expect(screen.getByText('🇧🇧')).toBeInTheDocument();
  });

  it('sets button active on click', () => {
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

    render(
      <Provider store={createStore()}>
        <OptionsGroup options={mockOptions} questionId={0} />
      </Provider>
    );

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveClass('border-indigo-500');
  });
});
