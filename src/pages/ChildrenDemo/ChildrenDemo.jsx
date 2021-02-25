import React from 'react';
import MathComponent from '../../components/Math/math';

function ChildrenDemo() {
  return (
    <>
      <MathComponent first={7} second={4} operator="$" childrens={{}} />
    </>
  );
}

export default ChildrenDemo;
