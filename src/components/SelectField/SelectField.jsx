/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

function SelectFieldComp(props) {
  const {
    inputLabel, val, error, options, changeSelectField,
  } = props;
  return (
    <div>
      <div>{inputLabel}</div>
      <select onChange={changeSelectField}>
        {options.map((ele) => <option key={ele.value} value={ele.value}>{ele.label}</option>)}
      </select>
    </div>
  );
}
export default SelectFieldComp;
