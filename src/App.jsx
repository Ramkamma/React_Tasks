import React from 'react';
import TextFieldDemo from './pages/TextFieldDemo/TextFieldDemo';
import SliderComp from './components/Slider/Slider';
import InputDemo from './pages/InputDemo/InputDemo';
import ChildrenDemo from './pages/ChildrenDemo/ChildrenDemo';

function App() {
  return (
    <div>
      <SliderComp />
      <hr />
      <TextFieldDemo />
      <hr />
      <InputDemo />
      <hr />
      <ChildrenDemo />
    </div>
  );
}

export default App;
