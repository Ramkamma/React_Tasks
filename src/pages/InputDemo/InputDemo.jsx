/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
import React from 'react';
import TextField from '../../components/TextField/TextField';
import SelectFieldComp from '../../components/SelectField/SelectField';
import RadioGroupComp from '../../components/RadioGroup/RadioGroup';
import * as constants from '../../configs/constants';

class InputDemo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSelectFieldChange = this.handleSelectFieldChange.bind(this);
    this.handleRadioGroupChange = this.handleRadioGroupChange.bind(this);
    this.state = {
      name: '',
      sport: '',
      cricket: '',
      football: '',
    };
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleSelectFieldChange(event) {
    this.setState({
      sport: event.target.value,
      football: '',
      cricket: '',
    });
  }

  handleRadioGroupChange(event) {
    if (event.target.value && this.state.sport === 'football') {
      this.setState({
        football: event.target.value,
        cricket: '',
      });
    } else if (event.target.value && this.state.sport === 'cricket') {
      this.setState({
        football: '',
        cricket: event.target.value,
      });
    }
  }

  render() {
    console.log(this.state);
    let radioData = [];
    if (this.state.sport) {
      radioData = this.state.sport === 'football' ? constants.FOOTBALL_DATA : constants.CRICKET_DATA;
    }
    return (
      <div>
        <TextField inputLabel="Name" val="" type="valid" changeName={this.handleNameChange} />
        <SelectFieldComp inputLabel="Select the game you play?" val="" error="" options={constants.GAME_PLAY} changeSelectField={this.handleSelectFieldChange} />
        {radioData.length > 0 ? <RadioGroupComp inputLabel="What you do?" val="" error="" options={radioData} selectVal={this.state[this.state.sport]} changeRadioGroup={this.handleRadioGroupChange} /> : ''}
      </div>
    );
  }
}
export default InputDemo;
