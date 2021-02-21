/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import * as constants from '../../configs/constants';

function RadioGroupComp(props) {
  const {
    inputLabel, val, error, touched, options, selectVal, changeRadioGroup, radioGroupFocus,
  } = props;
  return (
    <div>
      <div>{inputLabel}</div>
      {
        options.map(
          (ele) => (
            <div key={ele.value}>
              <input type="radio" checked={selectVal === ele.value} value={ele.value} onBlur={radioGroupFocus} onChange={changeRadioGroup} />
              {ele.label}
            </div>
          ),
        )
      }
      {error && touched ? (
        <div style={constants.ERROR_TEXT}>{error}</div>
      ) : null}
    </div>
  );
}
export default RadioGroupComp;
