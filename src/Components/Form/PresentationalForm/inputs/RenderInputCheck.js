import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormGroup } from '../FormPresentational/FormGroup';

export const RenderInputCheck = ({name, label, defaultValue, onChange, value , valueChecked , valueUnchecked  })  => {

  const handleChange = (e) => {
    e.target.checked ===true ? onChange(name , valueChecked) :  onChange(name,valueUnchecked)
  }
  return (
      <FormGroup>
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
      />
      </FormGroup>
  );
};

