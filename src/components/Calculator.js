import { useState } from 'react';
import Calculate from '../logic/Calculate';

const Calculator = () => {
  const [calculation, setCalculation] = useState({});

  const handleClick = (buttonName) => {
    const newCalculation = Calculate(calculation, buttonName);
    setCalculation(newCalculation);
  };

  return (
    <div className="container row">
      <div className="cal-title">
        <h2>Let us do some math!</h2>
      </div>

      <div className="grid">

        <div data-testid="displayElement" className="top-layer">
          {calculation.next || calculation.total || '0'}
        </div>

        <div className="rowSame">
          <button type="button" id="main-layer1" className="main-layer rect" onClick={() => handleClick('AC')}>AC</button>
          <button type="button" id="main-layer2" className="main-layer rect" onClick={() => handleClick('+/-')}>+/-</button>
          <button type="button" id="main-layer3" className="main-layer rect" onClick={() => handleClick('%')}>%</button>
          <button type="button" id="side-layer1" className="side-layer rect" onClick={() => handleClick('/')}>/</button>
        </div>

        <div className="rowSame">
          <button type="button" id="main-layer4" className="main-layer rect" onClick={() => handleClick('7')}>7</button>
          <button type="button" id="main-layer5" className="main-layer rect" onClick={() => handleClick('8')}>8</button>
          <button type="button" id="main-layer6" className="main-layer rect" onClick={() => handleClick('9')}>9</button>
          <button type="button" id="side-layer2" className="side-layer rect" onClick={() => handleClick('*')}>*</button>
        </div>

        <div className="rowSame">
          <button type="button" id="main-layer7" className="main-layer rect" onClick={() => handleClick('4')}>4</button>
          <button type="button" id="main-layer8" className="main-layer rect" onClick={() => handleClick('5')}>5</button>
          <button type="button" id="main-layer9" className="main-layer rect" onClick={() => handleClick('6')}>6</button>
          <button type="button" id="side-layer3" className="side-layer rect" onClick={() => handleClick('-')}>-</button>
        </div>

        <div className="rowSame">
          <button type="button" id="main-layer10" className="main-layer rect" onClick={() => handleClick('1')}>1</button>
          <button type="button" id="main-layer11" className="main-layer rect" onClick={() => handleClick('2')}>2</button>
          <button type="button" id="main-layer12" className="main-layer rect" onClick={() => handleClick('3')}>3</button>
          <button type="button" id="side-layer4" className="side-layer rect" onClick={() => handleClick('+')}>+</button>
        </div>

        <div className="rowSame">
          <button type="button" className="large-rect" onClick={() => handleClick('0')}>0</button>
          <button type="button" id="main-layer13" className="main-layer small-rect" onClick={() => handleClick('.')}>.</button>
          <button type="button" id="side-layer5" className="side-layer small-rect" onClick={() => handleClick('=')}>=</button>
        </div>

      </div>
    </div>
  );
};

export default Calculator;
