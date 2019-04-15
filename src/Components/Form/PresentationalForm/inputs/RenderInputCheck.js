import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

export const RenderInputCheck = ({ name, label, defaultValue, touched, error, onChange, value, valueChecked, valueUnchecked, errorText }) => {

  const handleChange = (e) => {
    e.target.checked === true ? onChange(name, valueChecked) : onChange(name, valueUnchecked);
  };
  const errorTextField = (string) => {
    return (<FormHelperText style={{ marginTop: 0 }}
      error>{touched !== undefined && error !== undefined ? string : ''}</FormHelperText>);
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
        style={{ width: '100%' }}
        label={label}

      />
      {errorTextField(errorText)}
    </>
  );
};

