import React from 'react';
import { Dialog } from 'material-ui';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/core/SvgIcon/SvgIcon';
import Typography from '@material-ui/core/Typography';
import { Col, Form } from 'reactstrap';
import { Row } from 'mdbreact';
import { DialogContent } from '@material-ui/core';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/es/DialogActions';
import Button from '@material-ui/core/Button';

export const DialogModal = (props ) => {
  return (
    <div>
      <Dialog onClose={()=>props.onClick()}
        open={props.open}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        onRequestClose={()=>props.onClick()}
        className="overflow-auto-modal"
      >
        <DialogContent className="">
          <DialogContentText className="overflow-auto">
            {props.children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <Button  color="primary"  onClick={()=>props.onClick(true)}>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};


