/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import * as constants from '../../configs/constants';

function SelectFieldComp(props) {
  const {
    inputLabel, val, error, touched, options, changeSelectField, SelectFieldocus,
  } = props;
  return (
    <div>
      <div>{inputLabel}</div>
      <select onBlur={SelectFieldocus} onChange={changeSelectField}>
        {options.map((ele) => <option key={ele.value} value={ele.value}>{ele.label}</option>)}
      </select>
      {error && touched ? (
        <div style={constants.ERROR_TEXT}>{error}</div>
      ) : null}
    </div>
  );
}
export default SelectFieldComp;
