import React from 'react';

export const FormGroup = (props) =>
{
  return(
  <>
    <div className="form-group field col-md-12">

      {props.children}
    </div>
  </>
  );
};