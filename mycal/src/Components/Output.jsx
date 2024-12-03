import React from 'react';
import '../pages/Calculator.css';

const Output = ({ expression }) => {
  return <div className="output">{expression}</div>;
};

export default Output;
