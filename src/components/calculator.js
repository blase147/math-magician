import React, { useState } from 'react';
import calculate from './logic/calculator';

const Calculator = () => {
  const data = {
    total: null,
    next: null,
    operation: null,
  };
  const [state, setState] = useState(data);

  const clickFunction = (e) => {
    const result = calculate(state, e.target.name);
    setState(result);
  };

  const { total, next, operation } = state;

  return (
    <div className="wrapper">
      <p className="maths">Let&apos;s do some Math</p>
      <div className="main-container">

        <button type="button" className="row-1">
          {total || ''}
          {operation || ''}
          {next || ''}
        </button>

        <button type="button" onClick={clickFunction} name="AC" className="ac">AC</button>
        <button type="button" onClick={clickFunction} name="+/-" className="plus-minus">+/-</button>
        <button type="button" onClick={clickFunction} name="%" className="percentage">%</button>
        <button type="button" onClick={clickFunction} name="÷" className="signs">÷</button>

        <button type="button" onClick={clickFunction} name="7" className="seven">7</button>

        <button type="button" onClick={clickFunction} name="8" className="eight">8</button>
        <button type="button" onClick={clickFunction} name="9" className="nine">9</button>
        <button type="button" onClick={clickFunction} name="x" className="signs">x</button>

        <button type="button" onClick={clickFunction} name="4" className="four">4</button>
        <button type="button" onClick={clickFunction} name="5" className="five">5</button>
        <button type="button" onClick={clickFunction} name="6" className="six">6</button>
        <button type="button" onClick={clickFunction} name="-" className="signs">-</button>

        <button type="button" onClick={clickFunction} name="1" className="one">1</button>
        <button type="button" onClick={clickFunction} name="2" className="two">2</button>
        <button type="button" onClick={clickFunction} name="3" className="three">3</button>
        <button type="button" onClick={clickFunction} name="+" className="signs">+</button>

        <button type="button" onClick={clickFunction} name="0" className="zero">0</button>
        <button type="button" onClick={clickFunction} name="." className="decimal">.</button>
        <button type="button" onClick={clickFunction} name="=" className="signs">=</button>

      </div>
    </div>
  );
};

export default Calculator;
