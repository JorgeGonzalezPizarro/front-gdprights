import React from 'react';
import HeaderForm from './HeaderForm';


export const FormPresentational = (props) => {
  console.log(props.children)
  return (
    <div className="formContent">
      <HeaderForm/>
      {props.children}
    </div>
  );
};

