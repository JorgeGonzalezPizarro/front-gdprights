import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Loading } from '../Util/LoadingComponent';
import { ConfirmedPdf } from './ConfirmedPdf';
import  PdfDocumentPresentational from './PdfDocumentPresentational';
import { Section } from '../Section/Section';
import PdfContent from '../Grid/PdfContent';
import { LoadingForm } from '../Util/LoadingForm';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${ pdfjs.version }/pdf.worker.js`;

export  const FunctionalPDF = (props) => {
  console.log(props);


  if (props.isLoading === true) {
    return <LoadingForm/>;
  }
  const {confirmed} = props;
  if(confirmed!== undefined)
  {
    return(  <ConfirmedPdf {...props} />);
  }


  return (
    <>
      <ConfirmedPdf {...props} />

      <PdfDocumentPresentational {...props}> </PdfDocumentPresentational>
    </>
  );




};