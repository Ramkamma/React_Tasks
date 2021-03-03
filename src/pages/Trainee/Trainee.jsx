/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import AddDialog from './Components/AddDialog/AddDialog';

class Trainee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  openTraineeDialog() {
    this.setState((state) => ({
      open: !state.open,
    }));
  }

  closeTraineeDialog() {
    this.setState((state) => ({
      open: !state.open,
    }));
  }

  submitHandler(val) {
    console.log('df', val);
  }

  render() {
    return (
      <div>
        <Button variant="outlined" style={{ marginTop: '10px' }} color="primary" onClick={() => this.openTraineeDialog()}>ADD TRAINEE</Button>
        {/* onClose={() => this.closeTraineeDialog()} */}
        <Dialog open={this.state.open} aria-labelledby="form-dialog-title">
          <DialogTitle>Add Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your trainee details
            </DialogContentText>
            <AddDialog
              onSubmitHandler={(val) => this.submitHandler(val)}
              onCloseHanlder={() => this.closeTraineeDialog()}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default Trainee;
