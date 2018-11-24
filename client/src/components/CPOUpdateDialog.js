import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import CPOUpdateForm from './CPOUpdateForm.js';

export default class UpdateFormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
      this.setState({ open: false });
	  
  };
	handleSave = () => {
		this.setState({ open: false});
	}
  render() {
    return (
      <div>
        <Button color="primary" onClick={this.handleClickOpen}>Edit</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit</DialogTitle>
          <DialogContent>
			<CPOUpdateForm arrIndex = {this.props.arrIndex} handleClose={this.handleClose} />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
