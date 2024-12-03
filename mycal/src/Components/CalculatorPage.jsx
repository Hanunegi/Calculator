import React, { useState, useEffect } from 'react';
import Button from './Button';
import Output from './Output';

const CalculatorPage = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(expression); 
        setExpression(result.toString());
      } catch (error) {
        setExpression('Error');
      }
    } else if (value === 'C') {
      setExpression('');
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const handleKeyPress = (event) => {
    const validKeys = '0123456789+-*/=C';
    if (validKeys.includes(event.key)) {
      handleButtonClick(event.key === 'Enter' ? '=' : event.key);
    } else if (event.key === 'Backspace') {
      setExpression(expression.slice(0, -1));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [expression]);

  return (
    <div className="calculator-container">
      <div className="calculator">
        <Output expression={expression} />
        <div className="buttons">
          <div className="row">
            <Button label="1" onClick={() => handleButtonClick('1')} className="button-primary" />
            <Button label="2" onClick={() => handleButtonClick('2')} className="button-primary" />
            <Button label="3" onClick={() => handleButtonClick('3')} className="button-primary" />
            <Button label="+" onClick={() => handleButtonClick('+')} className="button-secondary" />
          </div>
          <div className="row">
            <Button label="4" onClick={() => handleButtonClick('4')} className="button-primary" />
            <Button label="5" onClick={() => handleButtonClick('5')} className="button-primary" />
            <Button label="6" onClick={() => handleButtonClick('6')} className="button-primary" />
            <Button label="-" onClick={() => handleButtonClick('-')} className="button-secondary" />
          </div>
          <div className="row">
            <Button label="7" onClick={() => handleButtonClick('7')} className="button-primary" />
            <Button label="8" onClick={() => handleButtonClick('8')} className="button-primary" />
            <Button label="9" onClick={() => handleButtonClick('9')} className="button-primary" />
            <Button label="*" onClick={() => handleButtonClick('*')} className="button-secondary" />
          </div>
          <div className="row">
            <Button label="0" onClick={() => handleButtonClick('0')} className="button-primary" />
            <Button label="=" onClick={() => handleButtonClick('=')} className="button-success" />
            <Button label="/" onClick={() => handleButtonClick('/')} className="button-secondary" />
            <Button label="C" onClick={() => handleButtonClick('C')} className="button-danger" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
