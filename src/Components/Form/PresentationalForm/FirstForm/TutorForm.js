import React from 'react';
import { RenderInputTextField } from '../inputs/RenderInputTextField';
import { RenderInputCheck } from '../inputs/RenderInputCheck';
import { alertUtil } from '../../../Util/alertUtil';

export const TutorForm = ({input, error,  touched,  onClickVisibleRightForm, onChange}) => {
  const handleChange = (e ) => {
    e.preventDefault();
    const { value, name } = e.target;

    onChange( name, value, false);
  };

  const handleMultipleChange = (e) => {

    e.preventDefault();
    console.log(e.target);
    const { value, name } = e.target;
    console.log(name, 'aa', value, 'aaaa');
    const change = async () => {
      await onChange(name, value, false);
    };

    change().then(onClickVisibleRightForm);
  };
  return (
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
            onChange={handleMultipleChange}
            touched={touched}
            disabled={input.disabled}
            error={error}/>
          );
        default :
          return null;
        }

      })()}
      {/* <RenderInputTextField */}
      {/*  name={data.filter((input) => input.name === 'customEntityEmail')[0].name} */}
      {/*  label={data.filter((input) => input.name === 'customEntityEmail')[0].label} */}
      {/*  value={data.filter((input) => input.name === 'customEntityEmail')[0].value} */}
      {/*  onChange={handleChange} */}
      {/*  touched = {touched.filter((input) => input === 'customEntityEmail')[0]} */}
      {/*  error = {errors.filter((error) => error === 'customEntityEmail' )[0]} */}
      {/*  disabled = {data.filter((input) => input.name === 'customEntityEmail')[0].disabled} */}
      {/* /> */}
      {/* <RenderInputTextField */}
      {/*  name={data.filter((input) => input.name === 'customEntityCommercialName')[0].name} */}
      {/*  label={data.filter((input) => input.name === 'customEntityCommercialName')[0].label} */}
      {/*  value={data.filter((input) => input.name === 'customEntityCommercialName')[0].value} */}
      {/*  onChange={handleChange} */}
      {/*  touched = {touched.filter((input) => input === 'customEntityCommercialName')[0]} */}
      {/*  error = {errors.filter((error) => error === 'customEntityCommercialName' )[0]} */}
      {/*  disabled = {data.filter((input) => input.name === 'customEntityCommercialName')[0].disabled} */}
      {/* /> */}

    </div>
  );
};
