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


/*
    <div className="section-form form_isign_me3" id="alta_usuarios">
      <div className="wrapper-form">
        <div className="padding_form">
          <div className="form-row">

            <div className="col-md-12 col-sm-12 m-b-30 text-center margin_top_25">
              <a className="logo_isign_me" href="">GDP<span style={css}>R</span><span
                style={css2}>ights</span></a></div>
            <div className="form-row">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
 */