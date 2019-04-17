import React from 'react';
import { FormPresentational } from '../Form/PresentationalForm/FormPresentational/FormPresentational';
import { FormFieldSet } from '../Form/PresentationalForm/FormPresentational/FormFieldSet';

export const Error500 = () => {

  return (
    <>
    <FormPresentational>
      <FormFieldSet>
        <p>Se ha producido un error en su solicitud , intentelo de nuevo mas tarde</p>
      </FormFieldSet>
    </FormPresentational>
</>
  );

};