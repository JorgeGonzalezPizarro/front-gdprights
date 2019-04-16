import React from 'react';
import { Loading } from './LoadingComponent';
import { FormPresentational } from '../Form/PresentationalForm/FormPresentational/FormPresentational';
import FormButtons from '../Form/PresentationalForm/FormPresentational/FormButtons';
import PdfContent from '../Grid/PdfContent';

export const LoadingPdf = () => {

  return (
    <>
      <PdfContent>
        <Loading/>
      </PdfContent>
      <FormButtons/>
    </>
  );

};