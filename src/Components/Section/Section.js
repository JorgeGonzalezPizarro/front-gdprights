import React from 'react';
import { FormPresentational } from '../Form/PresentationalForm/FormPresentational/FormPresentational';

export const Section = (props) => {

  return (
    <section>
      <div className="home bg-img-1">
        <div className="bg-overlay"/>
        <div className="container">
          <div className="row">

            {props.children}

          </div>
        </div>

      </div>
    </section>
  );

};