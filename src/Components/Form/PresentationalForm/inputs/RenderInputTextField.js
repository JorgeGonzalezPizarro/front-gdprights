import TextField from 'material-ui/TextField';
import React, {Component} from 'react';
import { FormControl } from '@material-ui/core';

export class RenderInputTextField extends Component{
  constructor (props){
    super(props);
  }

  render () {
    return <InputTextField {...this.props}/>;
  }
}
const InputTextField = ({ name, label, value,  custom, touched, error, onChange, disabled }) => {
  return (
    <div className="container">
      <FormControl >
        <TextField   hintText={label}
          name={name}
          floatingLabelText={label}
          value={value}
          onBlur={onChange}
          disabled={disabled}
          errorText={touched !== undefined &&  error !== undefined ? 'Required' : null}
          onChange={onChange}
        />
      </FormControl>
    </div>
  );
};
