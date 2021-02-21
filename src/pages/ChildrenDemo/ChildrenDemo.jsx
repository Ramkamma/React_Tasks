import React from 'react';
import MathComponent from '../../components/Math/math';

function ChildrenDemo() {
  return (
    <div>
      <MathComponent first={7} second={4} operator="$" childrens={{}} />
    </div>
  );
}

export default ChildrenDemo;
