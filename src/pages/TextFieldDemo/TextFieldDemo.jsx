import React from 'react';
import TextField from '../../components/TextField/TextField';

function TextFieldDemo() {
  return (
    <div>
      <TextField inputLabel="This is a Disabled Input" val="Disabled Input" type="disabled" />
      <TextField inputLabel="A valid input" val="Accessible" type="valid" />
      <TextField inputLabel="An Input with errors" val="101" type="error" />
    </div>
  );
}

export default TextFieldDemo;
