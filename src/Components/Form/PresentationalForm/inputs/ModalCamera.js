import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

export default class ModalCamera extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: true
    };

  }

  render () {
    const handleClose = (acceptOrDecline = false) => {
      this.setState({ open: false });
      this.props.onClick(acceptOrDecline);
    };
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="scroll-dialog-title">

          <DialogActions style={{  padding: '0px',
            margin: '0',
            backgroundColor: '#6a706e',
            textAlign:'center' }}  >
            {this.props.children}

          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
