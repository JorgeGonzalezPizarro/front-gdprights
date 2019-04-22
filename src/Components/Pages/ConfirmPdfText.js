import React from 'react';
import { ButtonReject } from '../Util/Buttons/ButtonReject';
import { ButtonAccept } from '../Util/Buttons/ButtonAccept';

export const ConfirmPdfText = (props) => {

  return (
    <>
      <div className="text-formContent">
        <p>
          Apreciado Usuario

          Para validar la solicitud de ejercicio del derecho de oposición a la entidad  <b>{props.entityName} </b> haz
          clic en el botón Validar cuenta de correo.

          Una vez confirmada tu dirección de correo GDPRights realizará la notificación a la entidad solicitada. En
          el momento en que se haga efectiva la notificación de tu ejercicio de derechos te enviaremos un correo
          electrónico para que puedas descargar el acta de evidencias de la notificación realizada.
        </p>
        <div className="gridButtons">
          <div className="firstButton">
            <ButtonReject text="Rechazar"  onClick={() => props.onClick(false)}/>
          </div>
          <div className="secondButton">
            <ButtonAccept text="Validar"   onClick={() => props.onClick(true)} />
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