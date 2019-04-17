import React, {Component} from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { Slide } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import { DialogModal } from '../Util/DialogModal';
import Header from '../Grid/Header';
import { Help } from '../Pages/Help';

export class NavbarMenu extends Component {

  constructor (props) {
    super(props);
    this.state = {

      helpModalOpen: false,
      aboutModalOpen: false
    };

    this.handleClose = this.handleClose.bind(this);

  }

  handleClose = () => {
    this.setState({
      ...this.state,
      helpModalOpen : false,
      aboutModalOpen : false
    });
  }

  render () {
    const {helpModalOpen, aboutModalOpen} = this.state;
    const openModalHelp = () => {
      this.setState({
        ...this.state,
        helpModalOpen : !helpModalOpen
      });
    };

    return (
      <>
      <Header>
        <nav className="navbar navbar-custom navbar-expand-sm navbar-light bg-gris navbar-dark">
          <div className="container mt_63">
            <button onClick={() => openModalHelp()} className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarsMenu"
              aria-controls="navbarsMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarsMenu">
              <ul className="margin_top_6 navbar-nav ml-auto bg-gris navbar-dark color_navbar">
                <li className="nav-item2">
                  <a data-target="#exampleModalScrollable" className="nav-link btn navbar-btn"
                    id="btn-alta" onClick={() => openModalHelp()}>Ayuda</a>
                </li>
                <li className="nav-item2">
                  <a data-toggle="modal" data-target="#exampleModalScrollable2"
                    className="nav-link btn navbar-btn"
                    id="btn-alta"  onClick={() => openModalHelp()}>Acerca de</a>
                </li>

              </ul>

            </div>
          </div>
        </nav>
      </Header>
<div>
        <DialogModal  open={helpModalOpen} onClick={this.handleClose}>
          <Help/>
        </DialogModal>
        <DialogModal open={aboutModalOpen} onClick={this.handleClose}>
          <Help/>
        </DialogModal>
    </div>
    </>
    );

  };
}


function Transition(props) {
  return <Slide direction="up" {...props} />;
}