/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function RadioGroupComp(props) {
  const {
    inputLabel, val, error, options, selectVal, changeRadioGroup,
  } = props;
  return (
    <div>
      <div>{inputLabel}</div>
      {
        options.map(
          (ele) => (
            <div key={ele.value}>
              <input type="radio" checked={selectVal === ele.value} value={ele.value} onChange={changeRadioGroup} />
              {ele.label}
            </div>
          ),
        )
      }
    </div>
  );
}
export default RadioGroupComp;
