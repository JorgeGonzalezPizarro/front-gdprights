import React from 'react';
import Button from '@material-ui/core/es/Button/Button';
import { RenderInputTextField } from '../inputs/RenderInputTextField';
import { RenderInputCheck } from '../inputs/RenderInputCheck';
import RenderFileField from '../inputs/RenderFileField';
import { ImageFile } from '../inputs/ImageFile';

export const LeftForm = ({input, error,  touched,  onClickVisibleRightForm, onChange}) => {
  const handleChange = (e ) => {
    e.preventDefault();
    const { value, name } = e.target;
    onChange( name, value, true);

  };

  const handleMultipleChange = (name, value) => {
    const change = async () => {
      await onChange(name, value, true);
    };
    change().then(onClickVisibleRightForm);
  };
  return (
    <div>
      <form >
        <div>
          {(function()  {
            switch (input.type) {
            case 'text' :
              return(  <RenderInputTextField
                name={input.name}
                label={input.label}
                value={input.value}
                onChange={handleChange}
                touched={touched}
                disabled={input.disabled}
                error={error}/>
              );

            case 'checkbox' :
              return( <RenderInputCheck
                name={input.name}
                label={input.label}
                value={input.value}
                valueChecked={input.valueChecked}
                valueUnchecked={input.valueUnchecked}
                onChange={handleMultipleChange}
                touched={touched}
                disabled={input.disabled}
                error={error}/>
              );
            case 'file' :
              return (
                <ImageFile onChange={onChange} name={input.name}/>
              );
            }
          })()}

        </div>
      </form>
    </div>
  );
};
