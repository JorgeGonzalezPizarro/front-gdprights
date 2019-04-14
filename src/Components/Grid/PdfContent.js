import React from 'react';

const  PdfContent = (props) => {

  console.log(props)
  return (

    <div className="pdfContent">
      {props.children}
    </div>
  );

};



export default PdfContent;