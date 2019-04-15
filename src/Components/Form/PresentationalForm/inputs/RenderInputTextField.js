import TextField from 'material-ui/TextField';
import React, {Component} from 'react';
import { FormControl } from '@material-ui/core';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import FormHelperText from '@material-ui/core/FormHelperText';
import { FormFieldSet } from '../FormPresentational/FormFieldSet';

export class RenderInputTextField extends Component{
  constructor (props){
    super(props);
  }

  render () {
    return <InputTextField {...this.props}/>;
  }
}
const InputTextField = ({ name, label, value,  custom, touched, error, onChange, disabled, errorText }) => {
  const styles = {
    top : '5px',
    cursor: 'text',
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    transformOrigin: 'left bottom',
    transform: 'translate(0, 2.125rem) scale(1.5)',
    padding: '.5rem .75rem',
    fontSize: '.7rem',
    lineHeight:' 1.50',
    color: '#4950576b',
    paddingLeft: '16px',
    width: '100%',
    fontWeight: '100',
  };
  const stylesInput = {
    fontSize: '15px',
    width: '100%',
    paddingLeft: '16px',
  };
  const errorTextField = (string) => {
    return(<FormHelperText style={{marginTop : 0 }} error>{ touched !== undefined && error!==undefined ? string : ''}</FormHelperText>);
  };

  return (
    <>
      <TextField
        floatingLabelStyle={styles}
        floatingLabelFocusStyle={stylesInput}
        name={name}
        inputStyle={stylesInput}
        floatingLabelText={label}
        value={value}
        onBlur={onChange}
        disabled={disabled}
        onChange={onChange}
      />
      { errorTextField(errorText)}

      {/* <AvForm> */}

      {/* <AvField name={name} label={label} validate={{ */}
      {/* required: {value: true, errorMessage: "Please enter a username"}, */}
      {/* pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'Your username must be composed only with letter and numbers'}, */}
      {/* minLength: {value: 6, errorMessage: 'Your username must be between 6 and 16 characters'}, */}
      {/* maxLength: {value: 16, errorMessage: 'Your username must be between 6 and 16 characters'} */}
      {/* }} /> */}
      {/* </AvForm> */}
      {/* <TextField   hintText={label} */}
      {/* floatingLabelStyle={styles} */}
      {/* floatingLabelFocusStyle={stylesInput} */}
      {/* name={name} */}
      {/* inputStyle={stylesInput} */}
      {/* floatingLabelText={label} */}

      {/* value={value} */}
      {/* onBlur={onChange} */}
      {/* disabled={disabled} */}
      {/* errorText={touched !== undefined &&  error !== undefined ? 'Required' : null} */}
      {/* onChange={onChange} */}
      {/* /> */}
      </>
  );
};
