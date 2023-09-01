import Calculate from '../Calculate';

describe('Calculate', () => {
  it('should clear the state when "AC" button is clicked', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const expectedState = {
      total: null,
      next: null,
      operation: null,
    };

    const result = Calculate(initialState, 'AC');
    expect(result).toEqual(expectedState);
  });

  it('should update the state when a number button is clicked', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const expectedState = {
      total: '10',
      next: '55',
      operation: '+',
    };

    const result = Calculate(initialState, '5');
    expect(result).toEqual(expectedState);
  });

  it('should update the state when the "." button is clicked', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const expectedState = {
      total: '10',
      next: '5.',
      operation: '+',
    };

    const result = Calculate(initialState, '.');
    expect(result).toEqual(expectedState);
  });

  it('should calculate the result when the "=" button is clicked', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const expectedState = {
      total: '15',
      next: null,
      operation: null,
    };

    const result = Calculate(initialState, '=');
    expect(result).toEqual(expectedState);
  });

  it('should toggle the sign of "next" or "total" when "+/-" button is clicked', () => {
    const initialState1 = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const expectedState1 = {
      total: '10',
      next: '-5',
      operation: '+',
    };

    const result1 = Calculate(initialState1, '+/-');
    expect(result1).toEqual(expectedState1);

    const initialState2 = {
      total: '10',
      next: null,
      operation: '+',
    };

    const expectedState2 = {
      total: '-10',
      next: null,
      operation: '+',
    };

    const result2 = Calculate(initialState2, '+/-');
    expect(result2).toEqual(expectedState2);
  });

  it('should update the state when an operation button is clicked', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const expectedState = {
      total: '15',
      next: null,
      operation: '-',
    };

    const result = Calculate(initialState, '-');
    expect(result).toEqual(expectedState);
  });

  it('should update the state when an operation button is clicked after "="', () => {
    const initialState = {
      total: '10',
      next: null,
      operation: '+',
    };

    const expectedState = {
      total: '10',
      next: null,
      operation: '-',
    };

    const result = Calculate(initialState, '-');
    expect(result).toEqual(expectedState);
  });

  it('should update the state when an operation button is clicked and there is an existing operation', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const expectedState = {
      total: '15',
      next: null,
      operation: '-',
    };

    const result = Calculate(initialState, '-');
    expect(result).toEqual(expectedState);
  });

  it('should update the state when an operation button is clicked and there is no "next"', () => {
    const initialState = {
      total: '10',
      next: null,
      operation: '+',
    };

    const expectedState = {
      total: '10',
      next: null,
      operation: '-',
    };

    const result = Calculate(initialState, '-');
    expect(result).toEqual(expectedState);
  });
});
