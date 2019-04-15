import React from 'react';
import { Loading } from './LoadingComponent';
import { FormPresentational } from '../Form/PresentationalForm/FormPresentational/FormPresentational';
import FormButtons from '../Form/PresentationalForm/FormPresentational/FormButtons';

export const LoadingForm = () => {

  return (
    <>
      <FormPresentational>
        <Loading/>
      </FormPresentational>
      <FormButtons/>
    </>
  );

};