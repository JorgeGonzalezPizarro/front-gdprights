import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import { Button, Col, Form, FormGroup } from 'reactstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Row } from 'mdbreact';
import { FormEntities } from '../FormEntities';

function Transition (props) {
  return <Slide direction="up" timeout={500} mountOnEnter unmountOnExit {...props} />;
}

export default class EntitiesModalForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      open: this.props.isOpen
    };
  }

  render () {
    const handleAccept = () => {
      this.setState({
        open: !this.state.open
      });
      this.props.onClick(this.props.selectName, this.props.selected.id);
    };
    const handleClose = () => {
      const handleChangeAndState = async () => await this.setState({
        open : !this.state.open
      });
      handleChangeAndState().then(()=> this.props.onCloseEntitiesList());

    };
    return (

      <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className="position-relative">
            <Toolbar>
              <IconButton color="inherit" onClick={handleClose} aria-label="Close">
                <CloseIcon/>
              </IconButton>
              <Typography variant="h6" color="inherit" className="flex-1">
                Listado de entidades
              </Typography>
              <Button color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <Form>
            <Row form>
              <Col md={12}>
                <FormGroup>
                  {this.props.children}

                </FormGroup>
              </Col>
            </Row>
          </Form>
          {this.props.selected !== undefined ? <FormEntities {...this.props.selected} /> : null}
          {this.props.selected !== undefined ? <Button className="btn-primary"
            onClick={handleAccept}> Aceptar</Button> : null}
        </Dialog>
      </div>

    );
  }
}