import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { FormFieldSet } from '../FormPresentational/FormFieldSet';
import TextField from './RenderInputTextField';

export const RenderInputCheck = ({name, label, defaultValue, touched, error, onChange, value, valueChecked, valueUnchecked, errorText  })  => {

  const handleChange = (e) => {
    e.target.checked ===true ? onChange(name, valueChecked) :  onChange(name, valueUnchecked);
  };
  return (
<>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            value={value}
            name={name}
            color="primary"
          />
        }
        label={label}
        style={{padding : '10px 2px 10px'}}

      />
      {  touched !== undefined &&  error !== undefined ? <FormHelperText>{errorText}</FormHelperText> : null }
</>
  );
};

