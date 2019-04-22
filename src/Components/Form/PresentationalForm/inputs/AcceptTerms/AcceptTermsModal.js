import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { alertUtil } from '../../../../Util/alertUtil';
import { Help } from '../../../../Pages/Help';
import { DialogModal } from '../../../../Util/DialogModal';

export default class AcceptTermsModal extends React.Component {
  constructor (props)
  {
    super(props);
    this.state = {
      open: this.props.open,
      scroll: 'paper',
    };

  }

  render() {
    const  handleClose = (acceptOrDecline = false) => {
      this.setState({ open: false });
      this.props.onClick(acceptOrDecline);
    };
    return (
      <div>
        <DialogModal open={this.state.open} onClick={handleClose} >
        <Help/>
        </DialogModal>
      </div>
    );
  }
}
