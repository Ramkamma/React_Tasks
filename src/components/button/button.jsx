/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function ButtonComp(props) {
  const {
    color, disabled, style, value, buttonClick,
  } = props;
  return (
    <>
      <button type="button" style={style} onClick={buttonClick} disabled={disabled}>{value}</button>
    </>
  );
}
export default ButtonComp;
