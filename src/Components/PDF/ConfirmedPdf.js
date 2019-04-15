import React from 'react';
import { Button } from 'reactstrap';
import { FormPresentational } from '../Form/PresentationalForm/FormPresentational/FormPresentational';
import { Loading } from '../Util/LoadingComponent';
import { FormFieldSet } from '../Form/PresentationalForm/FormPresentational/FormFieldSet';
import FormButtons from '../Form/PresentationalForm/FormPresentational/FormButtons';

export const ConfirmedPdf = (props) => {
  console.log(props);
  const { confirmed , isLoading }  = props;
  if (isLoading) {
    return <Loading/>;
  }

  if (!confirmed) {
    return (
      <FormPresentational>

        <FormFieldSet>
          <p>
            Apreciado Usuario

            Para validar la solicitud de ejercicio del derecho de oposición a la entidad (nombre empresa destino) haz
            clic en el botón Validar cuenta de correo.

            Una vez confirmada tu dirección de correo GDPRights realizará la notificación a la entidad solicitada. En
            el momento en que se haga efectiva la notificación de tu ejercicio de derechos te enviaremos un correo
            electrónico para que puedas descargar el acta de evidencias de la notificación realizada.

            GDPRights es un servicio de EIS Digitall. Actuamos en calidad de Tercero de Confianza, para generar las
            evidencias de las transacciones entre terceros por intermediación.

            Puedes obtener más información sobre el tratamiento de datos personales necesario para este servicio aquí
          </p>
          <p>
            GDPRights es un servicio de EIS Digitall. Actuamos en calidad de Tercero de Confianza, para generar las
            evidencias de las transacciones entre terceros por intermediación.

            Puedes obtener más información sobre el tratamiento de datos personales necesario para este servicio <a
            href="#"> aquí</a>

          </p>

        </FormFieldSet>

        <FormButtons>
          <Button className="btn btn-primary1 btn-sm btn-block" color="link"
                  onClick={() => props.onClickPdf(true)}>Validar</Button>
          <Button className="btn btn-primary1 btn-sm btn-block" color="link"
                  onClick={() => props.onClickPdf(false)}>Rechazar</Button>
          <Button className="btn btn-primary1 btn-sm btn-block" color="link"
                  onClick={() => props.onClickDownload()}>Descargar</Button>
        </FormButtons>
      </FormPresentational>
    );

  }
  if (confirmed.confirmed && confirmed.notificationSent) {
    return (
      <FormPresentational>
        <FormFieldSet>
          <p>
            Apreciado Usuario

            El intento de notificación de tu ejercicio de derechos de oposición frente a la entidad (nombre entidad
            destino)
            ha sido realizado con resultado (positivo/negativo)

            Para descargar el acta del intento de notificación realizado puedes hacer clic en el siguiente enlace


            GDPRights es un servicio de EIS Digitall. Actuamos en calidad de Tercero de Confianza, para generar las
            evidencias de las transacciones entre terceros por intermediación.

            Puedes obtener más información sobre el tratamiento de datos personales necesario para este servicio <a
            href="#"> aquí</a>

          </p>
        </FormFieldSet>
        <FormButtons>

        </FormButtons>
      </FormPresentational>
    );
  }
  return null;
};

