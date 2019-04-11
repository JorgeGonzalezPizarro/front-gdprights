import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class ModalCamera extends React.Component {
  constructor (props)
  {
    super(props);
    this.state = {
      open: true,
    };

  }




  render() {
    const  handleClose = (acceptOrDecline = false) => {
      this.setState({ open: false });
      this.props.onClick(acceptOrDecline);
    };
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title">
          <DialogContent>

          </DialogContent>
          <DialogActions>
            {this.props.children}

          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
