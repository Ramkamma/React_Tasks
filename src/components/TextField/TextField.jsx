import React from 'react';
import { data } from './style';

function TextField(props) {
  // eslint-disable-next-line react/prop-types
  const { inputLabel, val, type } = props;
  return (
    <div>
      <div style={data.headerStyle}>{inputLabel}</div>
      <input style={data[type]} type="text" value={val} />
    </div>
  );
}
export default TextField;
