import React from 'react';
import { RenderInputTextField } from '../inputs/RenderInputTextField';
import { RenderInputCheck } from '../inputs/RenderInputCheck';
import { ImageFile } from '../inputs/ImageFile';
import  RenderInputCheckTerms  from '../inputs/RenderInputCheckTerms';
import CameraInputField from '../inputs/CameraInputField';
import ButtonCameraAccess from '../inputs/ButtonCameraAccess';
import { Base64ToBlob } from '../../../Util/Base64ToBlob';

export const LeftForm = ({input, error,  touched,  onClickVisibleRightForm, onChange}) => {
  const handleChange = (e ) => {
    e.preventDefault();
    const { value, name } = e.target;
    switch (e.target.type) {
    case 'checkbox':
      e.target.checked === true ? onChange(input.name, input.valueChecked, true) : onChange(input.name, input.valueUnchecked, true);
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
                errorText = {input.errorText}
                disabled={input.disabled}
                error={error}/>
              );
            case 'acceptTerms' :
              return( <RenderInputCheckTerms
                name={input.name}
                label={input.label}
                link={input.link}
                errorText={input.errorText}
                value={input.value}
                valueChecked={input.valueChecked}
                valueUnchecked={input.valueUnchecked}
                onChange={handleChange}
                touched={touched}
                linkText={input.linkText}
                disabled={input.disabled}
                error={error}/>
              );
              case 'file' :

              return (
                <ImageFile   disabled={input.disabled} label={input.label} errorTextDisabled={input.errorTextDisabled} onChange={onChange} name={input.name}/>
              );
            case 'camera' :
              return (
                <ButtonCameraAccess errorTextDisabled={input.errorTextDisabled} disabled={input.disabled} value ={input.value} label={input.label} onChange={onChange} name={input.name} open={false}/>
              );
            }
          })()}

    </>
  );
};
