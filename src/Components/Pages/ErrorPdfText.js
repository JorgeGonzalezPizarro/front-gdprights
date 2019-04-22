import React from 'react';
import Button from '@material-ui/core/es/Button/Button';
import { ButtonReject } from '../Util/Buttons/ButtonReject';
import { TooltipDisabled } from '../Form/PresentationalForm/inputs/TooltipDisabled';
import { ButtonAccept, ButtonAcceptDisabled } from '../Util/Buttons/ButtonAccept';
import { ButtonSend } from '../Util/Buttons/ButtonSend';

export const ErrorPdfText = (props) => {

  return (
    <>
      <div className="text-formContent">
        <p>
          {props.errorText}
        </p>

      </div>
    </>

  );
};