import React from 'react';
import Button from '@material-ui/core/es/Button/Button';
import { ButtonReject } from '../Util/Buttons/ButtonReject';
import { TooltipDisabled } from '../Form/PresentationalForm/inputs/TooltipDisabled';
import { ButtonAccept, ButtonAcceptDisabled } from '../Util/Buttons/ButtonAccept';
import { ButtonSend } from '../Util/Buttons/ButtonSend';

export const ConfirmPdfText = (props) => {

  return (
    <>
      <div className="text-formContent">
        <p>
          Apreciado Usuario

          Para validar la solicitud de ejercicio del derecho de oposición a la entidad (nombre empresa destino) haz
          clic en el botón Validar cuenta de correo.

          Una vez confirmada tu dirección de correo GDPRights realizará la notificación a la entidad solicitada. En
          el momento en que se haga efectiva la notificación de tu ejercicio de derechos te enviaremos un correo
          electrónico para que puedas descargar el acta de evidencias de la notificación realizada.
        </p>
        <div className="gridButtons">
          <div className="firstButton">
            <ButtonReject text={'Rechazar'}  onClick={() => props.onClick(false)}/>
          </div>
          <div className="secondButton">
            <ButtonAccept text={'Validar'}   onClick={() => props.onClick(true)} />
        </div>
        </div>
        <hr/>
        <hr/>
        <p>
          GDPRights es un servicio de EIS Digitall. Actuamos en calidad de Tercero de Confianza, para generar las
          evidencias de las transacciones entre terceros por intermediación.

          Puedes obtener más información sobre el tratamiento de datos personales necesario para este servicio aquí
        </p>
      </div>
    </>

  );
};