import React from 'react';
import { Form } from 'reactstrap';
const css =  {
  color: '#76b39d',
  letterSpacing: '2px',
};
const css2 =  {
  fontWeight:200,
  color:'#76b39d',
  letterSpacing: '2px'
};
export const FormPresentational = (props) => {
  return(
    <div className="padding_form">
      <div className="form-row">

        <div className="col-md-12 col-sm-12 m-b-30 text-center margin_top_25">
          <a className="logo_isign_me" href="">GDP<span style={css}>R</span><span
            style={css2}>ights</span></a></div>
        <div  className="form-row">
      {props.children}
        </div>
      </div>
      </div>
  )};