import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const RenderInputCheck = ({name, label, defaultValue, onChange, value , valueChecked , valueUnchecked  })  => {

  const handleChange = (e) => {
    e.target.checked ===true ? onChange(name , valueChecked) :  onChange(name,valueUnchecked)
  }
  return (
    <div>
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
    </div>
  );
};

