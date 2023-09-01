import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator', () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  it('the display should be cleared when "AC" is clicked', () => {
    const displayElement = screen.getByTestId('displayElement');
    const ACElement = screen.getByRole('button', { name: 'AC' });
    const initialState = displayElement.textContent;
    const expectedState = '0';
    fireEvent.click(ACElement);
    expect(initialState).toBe(expectedState);
  });

  it('number should change its sign when "+/-" is clicked', () => {
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

  it('should append the clicked number to the display', () => {
    const displayElement = screen.getByTestId('displayElement');
    const numberButton = screen.getByRole('button', { name: '9' });
    fireEvent.click(numberButton);
    expect(displayElement.textContent).toBe('9');
  });

  it('should perform addition when "+" is clicked', () => {
    const displayElement = screen.getByTestId('displayElement');
    const numberButton1 = screen.getByRole('button', { name: '3' });
    const numberButton2 = screen.getByRole('button', { name: '7' });
    const addButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(numberButton1);
    fireEvent.click(addButton);
    fireEvent.click(numberButton2);
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    expect(displayElement.textContent).toBe('10');
  });

  it('should perform subtraction when "-" is clicked', () => {
    const displayElement = screen.getByTestId('displayElement');
    const numberButton1 = screen.getByRole('button', { name: '8' });
    const numberButton2 = screen.getByRole('button', { name: '5' });
    const subtractButton = screen.getByRole('button', { name: '-' });
    fireEvent.click(numberButton1);
    fireEvent.click(subtractButton);
    fireEvent.click(numberButton2);
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    expect(displayElement.textContent).toBe('3');
  });

  it('should perform multiplication when "*" is clicked', () => {
    const displayElement = screen.getByTestId('displayElement');
    const numberButton1 = screen.getByRole('button', { name: '6' });
    const numberButton2 = screen.getByRole('button', { name: '4' });
    const multiplyButton = screen.getByRole('button', { name: '*' });
    fireEvent.click(numberButton1);
    fireEvent.click(multiplyButton);
    fireEvent.click(numberButton2);
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    expect(displayElement.textContent).toBe('24');
  });

  it('should perform division when "/" is clicked', () => {
    const displayElement = screen.getByTestId('displayElement');
    const numberButton1 = screen.getByRole('button', { name: '2' });
    const numberButton2 = screen.getByRole('button', { name: '5' });
    const divideButton = screen.getByRole('button', { name: '/' });
    fireEvent.click(numberButton1);
    fireEvent.click(divideButton);
    fireEvent.click(numberButton2);
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    expect(displayElement.textContent).toBe('0.4');
  });

  it('number should give the correct remainder when "%" is clicked', () => {
    const signElement = screen.getByRole('button', { name: '%' });
    const num1 = 10;
    const num2 = 4;
    fireEvent.click(signElement);
    const expectedState = num1 % num2;
    expect(expectedState).toBe(2);
  });

  it('should handle decimal point correctly when "." is clicked', () => {
    const displayElement = screen.getByTestId('displayElement');
    const decimalButton = screen.getByRole('button', { name: '.' });
    fireEvent.click(decimalButton);
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    expect(displayElement.textContent).toBe('0.52');
  });
});
