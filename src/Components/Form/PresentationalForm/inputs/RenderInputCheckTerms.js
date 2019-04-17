import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Button } from 'reactstrap';
import Link from '@material-ui/core/Link';
import AcceptTermsModal from './AcceptTerms/AcceptTermsModal';

const styleLink = {
  textAlign: 'center',
  flex: '0 0 auto',
  color: 'rgba(0, 0, 0, 0.54)',
  padding: '12px 2px',
  overflow: 'visible',
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  borderRadius: '50%'
};
export default class RenderInputCheckTerms extends Component {
  constructor (props) {
    super(props);

    this.state = {
      checked: false,
      modalOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleChangeFromCheck = this.handleChangeFromCheck.bind(this);
    this.simulateClick = this.simulateClick.bind(this);
  }

  handleClickOpen = () => {
    this.setState({
      ...this.state,
      modalOpen: !this.state.modalOpen
    });
  };

  handleChange = (accepOrDecline) => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      checked: accepOrDecline
    });
    if (this.props.value !== true && accepOrDecline === true) {
      this.simulateClick();
    }
  };

  handleChangeFromCheck = (e) => {
    this.setState({
      ...this.state,
      checked: e.target.checked
    });
    this.props.onChange(e);
  };

  simulateClick = () => {
    const evObj = document.createEvent('Events');
    const clieck = evObj.initEvent('click', true, false);
    console.log(clieck);
    console.log(document.getElementById(this.props.name).click());

  };

  render () {



    return (
      <div id="instanceCheckboxes" style={{ padding : '10px 0px ', display: 'inline-flex', flexDirection: 'row' }}>
        <Checkbox
          style={{padding: '10px 2px 10px'}}
          checked={this.props.value}
          onChange={this.handleChangeFromCheck}
          value={this.props.value}
          name={this.props.name}
          color="primary"
          id={this.props.name}

        /><Link style={styleLink} onClick={this.handleClickOpen} href="#">{this.props.label}</Link>
        {/* <span onClick={this.handleClickOpen}>yeah</span> */}

        {this.props.touched !== undefined && this.props.error !== undefined ? <FormHelperText
          error>{this.props.errorText}</FormHelperText> : null}

        {/* {this.props.link !== false ? <Button  onClick={this.handleClickOpen}>{this.props.linkText}</Button> : null } */}
        {this.state.modalOpen !== false ? <AcceptTermsModal open onClick={this.handleChange}/> : null}
      </div>
    );
  }
};


