import React from 'react';
import { FormPresentational } from '../Form/PresentationalForm/FormPresentational/FormPresentational';
import { FormFieldSet } from '../Form/PresentationalForm/FormPresentational/FormFieldSet';
import FormButtons from '../Form/PresentationalForm/FormPresentational/FormButtons';
import { LoadingForm } from '../Util/LoadingForm';
import { ConfirmPdfText } from '../Pages/ConfirmPdfText';
import { ButtonDownload } from '../Util/Buttons/ButtonDownload';
import { ErrorPdfText } from '../Pages/ErrorPdfText';
import { ButtonReject } from '../Util/Buttons/ButtonReject';
import { ButtonAccept } from '../Util/Buttons/ButtonAccept';

export const ConfirmedPdf = (props) => {
  const {file, confirmed, isLoading, error } = props;

  if (isLoading) {
    return <LoadingForm/>;
  }
  if(error === true)
  {

    return (
      <FormPresentational>

        <FormFieldSet>
          <ErrorPdfText errorText={props.errorMessage}/>
        </FormFieldSet>
        <FormButtons>
          <ButtonReject text="Volver" onClick={props.onClickErrorPdf}/>
        </FormButtons>
      </FormPresentational>
    );

  }
  if (!confirmed) {
    return (
      <FormPresentational>

        <FormFieldSet>
          <ConfirmPdfText entityName={props.entityName} onClick={props.onClickPdf}/>
        </FormFieldSet>

        <FormButtons>
          <ButtonDownload onClick={()=>props.onClickDownload()} text="Descargar"/>
        </FormButtons>
      </FormPresentational>
    );

  }
  if (confirmed.isLoading) {
    return (<LoadingForm/>);
  }
  if (confirmed.rejected) {
    return (<FormPresentational>
      <FormFieldSet>
        <div className="text-formContent">

          <p>
              Apreciado Usuario

              Se ha eliminado correctamente su peticion , puede volver a iniciar una nueva instancia desde <a
              href="#"> aquí</a>

          </p>
        </div>
      </FormFieldSet>
      <FormButtons>

      </FormButtons>
    </FormPresentational>

    );
  }
  if (confirmed.confirmed && confirmed.notificationSent) {
    return (
      <FormPresentational>
        <FormFieldSet>
          <div className="text-formContent">

            <p>
              Apreciado Usuario

              El intento de notificación de tu ejercicio de derechos de oposición frente a la entidad <b>{props.entityName} </b>
               con email <b>{props.entityEmail} </b>
              ha sido realizado con resultado positivo



              GDPRights es un servicio de EIS Digitall. Actuamos en calidad de Tercero de Confianza, para generar las
              evidencias de las transacciones entre terceros por intermediación.

              Puedes obtener más información sobre el tratamiento de datos personales necesario para este servicio <a
                href="#"> aquí</a>
              <p>Para descargar el acta del intento de notificación realizado puedes hacer clic en el siguiente enlace
              </p>
                <div className="gridButtons oneButton">
                <div className="firstButton">
                  <ButtonDownload onClick={()=>props.onClickDownload()} text="Descargar"/>
                </div>
                <div className="secondButton">
                  <ButtonAccept text="Volver"   onClick={() => props.initialState()} />
                </div>
              </div>

            </p>
          </div>
        </FormFieldSet>


        <FormButtons>
        </FormButtons>
      </FormPresentational>
    );
  }
  return null;
};

