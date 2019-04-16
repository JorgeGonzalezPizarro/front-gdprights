import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import { Button, Col, Form, FormGroup } from 'reactstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Row } from 'mdbreact';
import withStyles from '@material-ui/core/es/styles/withStyles';
import { FormEntities } from '../FormEntities';
import { RenderSelectField } from '../../../inputs/RenderSelectField';
import { alertUtil } from '../../../../../Util/alertUtil';

function Transition (props) {
  return <Slide direction="up" timeout={500} mountOnEnter unmountOnExit {...props} />;
}

const styles = {
  background: 'url(../../../../../../statics/images/cabecera.jpg)'
};

class EntitiesModalForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      selected: props.selected || null,
      open: this.props.isOpen
    };
  }

  render () {
    console.log(this.props);
    const onChange = (name, value) => {
      console.log(value);

      const entitie = this.props.selectEntities.options.filter((entitie) => entitie.id === value)[0];
      console.log(entitie);
      this.setState({
        ...this.state,
        selected: entitie
      });
    };

    const handleAccept = () => {
      this.setState({
        open: !this.state.open
      });
      alertUtil(this.props.selectEntities.name , this.state.selected.id)
      this.props.onChange(this.props.selectEntities.name, this.state.selected.id);
    };

    const handleClose = () => {
      const handleChangeAndState = async () => await this.setState({
        open: !this.state.open
      });
      handleChangeAndState().then(() => this.props.onCloseEntitiesList());

    };
    const getValue = () => {
      const selected = this.state.selected !== null ? this.state.selected.id : '';
      const value = this.props.selectEntities.options.filter((option) => option.id === selected)[0];
      return value !== undefined ? value.name : selected.label;
    };

    const getOption = (select) => {
      const value = select.options.filter((option) => option.id === select.value)[0];
      return value !== undefined ? value : undefined;
    };
    const defaultValue = () => {

      if (this.props.selectEntities.isLoading === true) {
        console.log('isLoading');
        return this.props.selectEntities.valueLoading;
      }
      return this.state.selected !== null ? this.state.selected.name : this.props.selectEntities.label;
    };
    const { classes } = this.props;
    const { errors, touched } = this.props;
    const { selectEntities } = this.props;
    return (

      <>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={handleClose}

          BackdropProps={{
            classes: {
              root: classes.root
            }
          }}
          PaperProps={{
            style: {
              ...styles
            }
          }}
          TransitionComponent={Transition}
        >
          <AppBar style={{
            color: '#76b39d',
            background: 'white'
          }} className="position-relative">
            <Toolbar style={{
              color: '#76b39d',
              background: 'white'
            }}>
              <IconButton color="inherit" onClick={handleClose} aria-label="Close">
                <CloseIcon/>
              </IconButton>
              <Typography variant="h6" color="inherit" className="flex-1">
                Listado de entidades
              </Typography>

            </Toolbar>
          </AppBar>
          <Form>
            <Row form>
              <Col md={12}>
                <FormGroup className="formEntities">
                  <RenderSelectField onChange={onChange} selectName={selectEntities.name}
                                     errors={errors.filter((error) => error === selectEntities.name)[0]}
                                     touched={touched} options={selectEntities.options}
                                     isLoading={this.props.isLoading} name={selectEntities.name}
                                     defaultValue={defaultValue()}
                                     label={selectEntities.label} value={defaultValue()}
                                     selected={defaultValue()}/>

                  <FormEntities selected={this.state.selected} >
                    {this.props.children}
                  </FormEntities>
                </FormGroup>
              </Col>
            </Row>
          </Form>
          {this.state.selected !== null ? <Button className="btn-primary"
                                                       onClick={handleAccept}> Aceptar</Button> : null}
        </Dialog>

      </>

    );
  }
}

EntitiesModalForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EntitiesModalForm);