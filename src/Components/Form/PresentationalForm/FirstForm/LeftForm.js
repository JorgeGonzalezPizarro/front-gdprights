import React from 'react';
import Button from '@material-ui/core/es/Button/Button';
import { RenderInputTextField } from '../inputs/RenderInputTextField';
import { RenderInputCheck } from '../inputs/RenderInputCheck';
import RenderFileField from '../inputs/RenderFileField';
import { ImageFile } from '../inputs/ImageFile';
// import  RenderInputCheckTerms  from '../inputs/RenderInputCheckTerms';

export const LeftForm = ({input, error,  touched,  onClickVisibleRightForm, onChange}) => {
  const handleChange = (e ) => {
    e.preventDefault();
    const { value, name } = e.target;
    switch (e.target.type) {
      case 'checkbox':
        console.log(e)
        e.target.checked === true ? onChange(input.name,input.valueChecked) : onChange(input.name,input.valueUnchecked)
          break;
      default : onChange( name, value, true);
      break;
    }

  };

  const handleMultipleChange = (name, value) => {
    const change = async () => {
      await onChange(name, value, true);
    };
    change().then(onClickVisibleRightForm);
  };
  return (
    <>
          {(function()  {
            switch (input.type) {
            case 'text' :
              return(  <RenderInputTextField
                name={input.name}
                errorText={input.errorText}
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
              // case 'acceptTerms' :
              //   return( <RenderInputCheckTerms
              //       name={input.name}
              //       label={input.label}
              //       link={input.link}
              //       value={input.value}
              //       valueChecked={input.valueChecked}
              //       valueUnchecked={input.valueUnchecked}
              //       onChange={handleChange}
              //       touched={touched}
              //       linkText={input.linkText}
              //       disabled={input.disabled}
              //       error={error}/>
              //   );
            case 'file' :
              return (
                <ImageFile label={input.label} onChange={onChange} name={input.name}/>
              );
            }
          })()}

    </>
  );
};
