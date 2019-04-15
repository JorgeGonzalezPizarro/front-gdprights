import React from 'react';
import { RenderInputTextField } from '../inputs/RenderInputTextField';
import { RenderInputCheck } from '../inputs/RenderInputCheck';
import { alertUtil } from '../../../Util/alertUtil';

export const TutorForm = ({input, error,  touched,  onClickVisibleRightForm, onChange}) => {
  console.log(error);

  const handleChange = (e ) => {
    e.preventDefault();
    const { value, name } = e.target;

    onChange( name, value, false);
  };

  const handleMultipleChange = (e) => {

    e.preventDefault();
    const { value, name } = e.target;
    const change = async () => {
      await onChange(name, value, false);
    };

    change().then(onClickVisibleRightForm);
  };
  return (
    <>

      {(function()  {
        console.log(input.name, error, touched);
        switch (input.type) {
        case 'text' :
          return (<RenderInputTextField
            name={input.name}
            label={input.label}
            value={input.value}
            onChange={handleChange}
            touched={touched}
            disabled={input.disabled}
            error={error}
            errorText={input.errorText}

          />

          );

        case 'checkbox' :
          return (<RenderInputCheck
            name={input.name}
            label={input.label}
            value={input.value}
            onChange={handleMultipleChange}
            touched={touched}
            errorText={input.errorText}
            disabled={input.disabled}
            error={error}/>
          );
        }

      })()}


    </>
  );
};
