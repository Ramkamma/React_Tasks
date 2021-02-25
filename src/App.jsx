import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextFieldDemo from './pages/TextFieldDemo/TextFieldDemo';
import SliderComp from './components/Slider/Slider';
import InputDemo from './pages/InputDemo/InputDemo';
import ChildrenDemo from './pages/ChildrenDemo/ChildrenDemo';
import * as themeComp from './theme';

function App() {
  return (
    <ThemeProvider theme={themeComp.theme}>
      <SliderComp />
      <hr />
      <TextFieldDemo />
      <hr />
      <InputDemo />
      <hr />
      <Typography>
        <ChildrenDemo />
      </Typography>
    </ThemeProvider>
  );
}

export default App;
