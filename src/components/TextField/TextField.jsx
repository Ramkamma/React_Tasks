/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { data } from './style';

function TextField(props) {
  // eslint-disable-next-line react/prop-types
  const {
    inputLabel, val, type, changeName,
  } = props;
  return (
    <div>
      <div style={data.headerStyle}>{inputLabel}</div>
      <input type="text" style={data[type]} defaultValue={val} onChange={changeName} />
    </div>
  );
}
export default TextField;
