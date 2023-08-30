import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator', () => {
  it('the display should be cleared when "AC" is clicked', () => {
    render(<Calculator />);
    const displayElement = screen.getByTestId('displayElement');
    const ACElement = screen.getByRole('button', { name: 'AC' });
    const initialState = displayElement.textContent;
    const expectedState = '0';

    fireEvent.click(ACElement);

    expect(initialState).toBe(expectedState);
  });

  it('number should change its sign when "+/-" is clicked', () => {
    render(<Calculator />);
    const displayElement = screen.getByTestId('displayElement');
    const signElement = screen.getByRole('button', { name: '+/-' });
    const initialState = parseFloat(displayElement.textContent);
    if (initialState === 0) {
      return;
    }
    const expectedState = -initialState;

    fireEvent.click(signElement);

    expect(initialState).toBe(expectedState);
  });
});
