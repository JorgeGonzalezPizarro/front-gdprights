import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from 'reactstrap';
import { Loading } from '../Util/LoadingComponent';
import { ConfirmedPdf } from './ConfirmedPdf';
import  PdfDocumentPresentational from './PdfDocumentPresentational';
import { Section } from '../Section/Section';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${ pdfjs.version }/pdf.worker.js`;

export  const FunctionalPDF = (props) => {


  if (props.isLoading === true) {
    return <Section><Loading/></Section>;
  }
  const {confirmed} = props;
  if(confirmed!== undefined)
  {
    return( <Section><ConfirmedPdf {...props.confirmed}/></Section>);
  }



  return (
    <>
      <ConfirmedPdf {...props} >
        <PdfDocumentPresentational {...props}/>
      </ConfirmedPdf>

    </>
  );




};