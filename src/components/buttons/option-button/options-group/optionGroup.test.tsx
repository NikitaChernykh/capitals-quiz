import { fireEvent, render, screen } from '@testing-library/react';
import OptionsGroup from './optionsGroup';
import { Provider } from 'react-redux';
import { createStore } from './../../../../state/store';

describe('OptionGroup Component', () => {
  const mockOnClick = jest.fn();

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
});
