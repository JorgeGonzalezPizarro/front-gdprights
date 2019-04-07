import React from 'react';
import { FormPresentational } from '../Form/PresentationalForm/FormPresentational/FormPresentational';

export const Section = (props) => {

  return (
    <section>
      <div className="home bg-img-1">
        <div className="bg-overlay"/>
        <div className="container">
          <div className="row">
            <div className="section-form form_isign_me3" id="alta_usuarios">
              <div className="wrapper-form">
                {props.children}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );

};