/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { data } from './style';
import * as constants from '../../configs/constants';

function TextField(props) {
  // eslint-disable-next-line react/prop-types
  const {
    inputLabel, val, type, error, touched, changeName,
  } = props;
  return (
    <div>
      <div style={data.headerStyle}>{inputLabel}</div>
      <input type="text" style={data[type]} defaultValue={val} onBlur={changeName} onChange={changeName} />
      {error && touched ? (
        <div style={constants.ERROR_TEXT}>{error}</div>
      ) : null}
    </div>
  );
}
export default TextField;
