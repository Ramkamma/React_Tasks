/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
import React from 'react';
import TextField from '../../components/TextField/TextField';
import SelectFieldComp from '../../components/SelectField/SelectField';
import RadioGroupComp from '../../components/RadioGroup/RadioGroup';
import ButtonComp from '../../components/button/button';
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
      nameFormFields: {
        nameError: '',
        isNameTouched: false,
      },
      sportFormFields: {
        isSportTouched: false,
        sportError: '',
      },
      what_you_do_Fields: {
        isWhat_you_do_ErrorTouched: false,
        what_you_do_Error: '',
      },
      saveStatus: {
        isSaveDisabled: true,
      },
    };
  }

  handleNameChange(event) {
    if (event.target.value) {
      this.setState(() => ({
        name: event.target.value,
        nameFormFields: {
          nameError: '',
          isNameTouched: false,
        },
      }));
    } else {
      this.setState(() => ({
        name: '',
        nameFormFields: {
          nameError: '',
          isNameTouched: false,
        },
        saveStatus: {
          isSaveDisabled: true,
        },
      }));
    }
    if (event.target.value.length === 0 && event.type === 'blur') {
      this.setState({
        nameFormFields: {
          isNameTouched: true,
          nameError: 'Name is required field',
        },
      });
    } else if (event.target.value.length < 3 && event.type === 'blur') {
      this.setState({
        nameFormFields: {
          isNameTouched: true,
          nameError: 'Name must be at least 3 characters',
        },
      });
    } else if (event.type === 'blur') {
      this.checkSaveEnable();
    }
  }

  handleSelectFieldChange(event) {
    this.setState({
      sport: event.target.value,
      football: '',
      cricket: '',
      sportFormFields: {
        isSportTouched: false,
        sportError: '',
      },
      saveStatus: {
        isSaveDisabled: true,
      },
    });
  }

  handleSelectFieldFocus(event) {
    if (!event.target.value) {
      this.setState({
        sportFormFields: {
          isSportTouched: true,
          sportError: 'Sport is required field',
        },
      });
    }
    this.checkSaveEnable();
  }

  handleRadioGroupChange(event) {
    if (event.target.value && this.state.sport === 'football') {
      this.setState({
        football: event.target.value,
        cricket: '',
        what_you_do_Fields: {
          isWhat_you_do_ErrorTouched: false,
          what_you_do_Error: '',
        },
      });
      this.checkSaveEnable();
    } else if (event.target.value && this.state.sport === 'cricket') {
      this.setState({
        football: '',
        cricket: event.target.value,
        what_you_do_Fields: {
          isWhat_you_do_ErrorTouched: false,
          what_you_do_Error: '',
        },
      });
      this.checkSaveEnable();
    }
  }

  handleRadioGroupFocus(event) {
    if (!event.target.value) {
      this.setState({
        what_you_do_Fields: {
          isWhat_you_do_ErrorTouched: true,
          what_you_do_Error: 'What do you do is a required field.',
        },
      });
    }
  }

  checkSaveEnable() {
    this.setState((state, props) => ({
      saveStatus: {
        isSaveDisabled: !((!state.nameFormFields.nameError && state.sport && (state.cricket || state.football))),
      },
    }));
  }

  handleButtonClick(event) {
    console.log(event);
  }

  render() {
    console.log(this.state);
    let radioData = [];
    if (this.state.sport) {
      radioData = this.state.sport === 'football' ? constants.FOOTBALL_DATA : constants.CRICKET_DATA;
    }
    return (
      <div>
        <TextField
          inputLabel="Name"
          val=""
          type="valid"
          error={this.state.nameFormFields.nameError}
          touched={this.state.nameFormFields.isNameTouched}
          changeName={this.handleNameChange}
        />
        <br />
        <SelectFieldComp
          inputLabel="Select the game you play?"
          val=""
          error={this.state.sportFormFields.sportError}
          touched={this.state.sportFormFields.isSportTouched}
          options={constants.GAME_PLAY}
          changeSelectField={this.handleSelectFieldChange}
          SelectFieldocus={(event) => this.handleSelectFieldFocus(event)}
        />
        <br />
        {radioData.length > 0 ? (
          <RadioGroupComp
            inputLabel="What you do?"
            val=""
            error={this.state.what_you_do_Fields.what_you_do_Error}
            touched={this.state.what_you_do_Fields.isWhat_you_do_ErrorTouched}
            options={radioData}
            selectVal={this.state[this.state.sport]}
            changeRadioGroup={this.handleRadioGroupChange}
            radioGroupFocus={(event) => this.handleRadioGroupFocus(event)}
          />
        ) : ''}
        <br />
        <div style={constants.TEXT_RIGHT}>
          <ButtonComp
            color="default"
            disabled={false}
            style={{ marginRight: '10px' }}
            value="Cancel"
            buttonClick={() => this.handleButtonClick('c')}
          />
          <ButtonComp
            color="default"
            disabled={this.state.saveStatus.isSaveDisabled}
            style={
              this.state.saveStatus.isSaveDisabled
                ? constants.SUBMIT_BUTTON_DISABLE : constants.SUBMIT_BUTTON_ENABLE
            }
            value="Submit"
            buttonClick={() => this.handleButtonClick('s')}
          />
        </div>
      </div>
    );
  }
}
export default InputDemo;
