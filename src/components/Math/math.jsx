/* eslint-disable radix */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function MathComponent(props) {
  let result = '';
  let finalResult = '';
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };
  const {
    first, second, operator, childrens,
  } = props;
  if (second === 0) {
    result = 'Infinity';
  }
  const checkOperatorExists = operators.hasOwnProperty(operator);
  if (!checkOperatorExists) {
    result = 'Invalid Operator';
  }
  const checkChildernsExists = Object.keys(childrens);
  if (checkChildernsExists.length === 0 && !result) {
    const getOperator = operators[operator];
    const calculateFinalVal = getOperator(first, second);
    finalResult = `${first}${operator}${second}=${calculateFinalVal}`;
  } else {
    finalResult = `${first}${operator}${second}=${result}`;
  }
  return (
    <>{finalResult}</>
  );
}
export default MathComponent;
