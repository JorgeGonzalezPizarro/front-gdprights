import React from 'react'
import GridContainer from '../Grid/GridContainer';
import { NavbarMenu } from '../Header/NavbarMenu';
import ContentMain from '../Grid/ContentMain';
import { FunctionalForm } from '../Form/FunctionalForm/FunctionalForm';
import { FunctionalPDF } from '../PDF/FunctionalPDF';

export const ApiError = (props) => {

  return (
    <GridContainer>
      <NavbarMenu />
      <ContentMain>
        {
          props.children
        }
      </ContentMain>

    </GridContainer>
  );

}