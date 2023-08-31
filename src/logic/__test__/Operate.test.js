import Operate from '../Operate';

describe('Operate', () => {
  it('should give the correct addition of two numbers', () => {
    const numberOne = '7';
    const numberTwo = '8';
    const operation = '+';

    const result = Operate(numberOne, numberTwo, operation);
    expect(result).toEqual('15');
  });

  it('should give the correct subtraction of two numbers', () => {
    const numberOne = '7';
    const numberTwo = '3';
    const operation = '-';

    const result = Operate(numberOne, numberTwo, operation);
    expect(result).toEqual('4');
  });

  it('should give the correct multiplication of two numbers', () => {
    const numberOne = '2';
    const numberTwo = '8';
    const operation = '*';

    const result = Operate(numberOne, numberTwo, operation);
    expect(result).toEqual('16');
  });

  it('should give the correct division of two numbers', () => {
    const numberOne = '10';
    const numberTwo = '5';
    const operation = '/';

    const result = Operate(numberOne, numberTwo, operation);
    expect(result).toEqual('2');
  });

  it('should give the correct remainder of two numbers', () => {
    const numberOne = '10';
    const numberTwo = '4';
    const operation = '%';

    const result = Operate(numberOne, numberTwo, operation);
    expect(result).toEqual('2');
  });
});
