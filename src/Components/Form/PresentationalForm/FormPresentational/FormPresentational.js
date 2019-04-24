import React from 'react';
import HeaderForm from './HeaderForm';


export const FormPresentational = (props) => {
  return (
    <div className="formContent">
      <HeaderForm/>
      {props.children}
    </div>
  );
};

