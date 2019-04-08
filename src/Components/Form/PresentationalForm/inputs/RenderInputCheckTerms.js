import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormGroup } from '../FormPresentational/FormGroup';
import AcceptTermsModal from './AcceptTerms/AcceptTermsModal'
import Button from '@material-ui/core/es/Button/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
export default class RenderInputCheckTerms extends Component {
  constructor (props){
    super(props)
    const {name, label, defaultValue, onChange, value , valueChecked , valueUnchecked , link=false , linkText = ''  } = this.props;

    this.state = {
        checked :false,
        modalOpen : false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleChangeFromCheck = this.handleChangeFromCheck.bind(this)
    this.simulateClick = this.simulateClick.bind(this)
  }
   handleClickOpen = () => {
    this.setState({
      ...this.state,
      modalOpen: !this.state.modalOpen
    })
  }

   handleChange = (accepOrDecline) => {
    this.setState({
      modalOpen : !this.state.modalOpen,
      checked: accepOrDecline
    })
     this.simulateClick()
  }

  handleChangeFromCheck = (e) => {
    this.setState({
      ...this.state,
      checked: e.target.checked
    })
    this.props.onChange(e)
  }
   simulateClick = () => {
    alert("aa")
     var evObj = document.createEvent('Events');
     const clieck = evObj.initEvent('click', true, false);
     console.log(clieck)
     console.log(document.getElementById(this.props.name).click());

   }
  render () {


    return (
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChangeFromCheck}
              value={this.props.value}
              name={this.props.name}
              color="primary"
              id={this.props.name}
            />
          }
          label={this.props.label}
        />
        {  this.props.touched !== undefined &&   this.props.error !== undefined ? <FormHelperText error={true}>{ this.props.errorText}</FormHelperText> : null }

        {this.props.link !== false ? <Button  onClick={this.handleClickOpen}>{this.props.linkText}</Button> : null }
        {this.state.modalOpen!==false ?<AcceptTermsModal open={true} onClick={this.handleChange}/> : null }
      </FormGroup>
    );
  }
};

