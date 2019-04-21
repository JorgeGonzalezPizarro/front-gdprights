import axios from 'axios';
import * as ActionTypes from '../../ActionTypes/Form/FormActionTypes';

import { firstForm } from '../../../shared/firstForm';
import { secondForm } from '../../../shared/secondForm';
import { thirdForm } from '../../../shared/thirdForm';
import { alertUtil } from '../../../Components/Util/alertUtil';
import { Routes } from '../../../shared/Routes/Routes';
import * as UseCases from '../../../shared/Routes/UseCases';

export const initialState = () => (dispatch) => {
  setTimeout(() => {
    return dispatch(returnToFirstStep());
  }, 300);
};
export const fetchForm = () => (dispatch) => {
  dispatch(loading());
  setTimeout(() => {
    return dispatch(fetch(firstForm, secondForm, thirdForm));
  }, 300);
};

export const fetchEntities_ = () => (dispatch) => {
  dispatch(loadingEntities());
  const data = () => {
    const { method, path } = Routes(UseCases.GET_ENTITIES);
    const uri = process.env.REACT_APP_API_URL;

    return axios({
      method,
      url: `${uri}${path}`

    }).then(result => {

      return result.data;
    }).then((data) => {
      dispatch(fetchEntities(data));
    }).catch((error) =>  {
      if(error.status !==200){
        return dispatch(errorFetchEntities());

      }});
  };
  data();
};



export const pdfPost = (data) => (dispatch) => {
  dispatch(pdf_loading());
  const { method, path } = Routes(UseCases.POST_PDF);
  const uri = process.env.REACT_APP_API_URL;
  console.log(method,path,uri)
  const response = async () => {
    try {
    const response = await  axios({
        method,
        url: `${uri}${path}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data
      })
      // const response = await axios.post('https://localhost/gdpright/public/index.php?XDEBUG_SESSION_START=11556', Object.assign({}, data), {
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // })
      const { file, requestId } = await response.data;
      dispatch(pdf_success(requestId, file));
    } catch (error) {
      console.log(error)
      if (error.status !== 200) {
        alertUtil(error)
        return dispatch(pdf_error());
      }
    }

  }
  response();
};


export const returnToFirstStep = () => ({

  type: ActionTypes.RETURN_TO_FIRST_STEP,
  payload: {
    pdf: undefined
  }
});

export const confirmPdf_ = (confirmed, requestId) => (dispatch) => {

  if (confirmed === false) {
    return dispatch(rejectPdf_(requestId));
  }
  dispatch(confirm_pdf_loading());

  const confirmedSendEmail = async () => {

    const requestToConfirm = await axios.put('http://localhost/gdprights/public/index.php/confirm?XDEBUG_SESSION_START=11556', Object.assign({}, {
      requestId,
      confirmed
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (requestToConfirm.status === 200) {
      dispatch(notification_send_success());
    }
  };

  confirmedSendEmail();

};

export const downloadPdf_ = (file_) => dispatch => {
  console.log(file_);
  const data = async () => await (axios.get(file_, {
    responseType: 'arraybuffer',
    headers: {
      'Accept': 'application/pdf'
    }
  }
  ).then((response) => {

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'acta.pdf');
    document.body.appendChild(link);
    link.click();
  }
  ));
  data();

};

export const rejectPdf_ = (requestId) => (dispatch) => {
  dispatch(reject_pdf_loading());

  const response = async () => {
    const response = await axios.delete('https://localhost/gdprights/public/index.php?XDEBUG_SESSION_START=11556', {
      data: {
        requestId
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );

    const { status } = response;
    if (status === 200) {
      dispatch(reject_pdf());
    }
  }
    ;
  response();

}
;

export const loadingCountries = () => ({

  type: ActionTypes.LOADING_COUNTRIES,
  payload: {
    isLoading: true,
    error: null
  }
});

export const loading = () => ({

  type: ActionTypes.LOADING,
  payload: {
    isLoading: true,
    error: null
  }
});

export const loadingEntities = () => ({

  type: ActionTypes.LOADING_ENTITIES,
  payload: {
    isLoading: true,
    options:[],
    error:null
  }
});

export const fetchEntities = (entities) => ({

  type: ActionTypes.FETCH_ENTITIES,
  payload: {
    options: entities,
    isLoading: false,
    error : null
  }
});
export const errorFetchEntities = () => ({

  type: ActionTypes.ERROR_FETCH_ENTITIES,
  payload: {
    options: [],
    isLoading: false,
    error : true,
    errorMessage : 'No hay entidades disponibles'
  }
});

export const fetch = (firstForm, secondForm, thirdForm) => (
  {
    type: ActionTypes.FETCH,
    payload: {
      isLoading: false,
      error: null,
      firstForm,
      secondForm,
      thirdForm
    }
  }
);

/** ***********   PDF   *********** */



export const pdf_loading = () => ({

  type: ActionTypes.PDF_LOADING,
  payload: {
    pdf: {
      isLoading: true,
      error: null,
      pdf: null
    },
    requestId: null
  }
});
export const pdf_success = (requestId, pdf) => ({

  type: ActionTypes.PDF_SUCCESS,
  payload: {
    pdf: {
      isLoading: false,
      error: null,
      file: pdf
    },
    requestId
  }
});

export const pdf_error = () => ({

  type: ActionTypes.PDF_ERROR_POST,
  payload: {
    pdf: {
      isLoading: false,
      file: null,
      error: true,
      errorMessage: 'Se ha producido un error al crear su solicitud'
    }
  }
});

export const confirm_pdf_loading = () => ({

  type: ActionTypes.CONFIRM_PDF_LOADING,
  payload: {
    isLoading: true,
    error: null,
    confirmed: {
      confirmed: null,
      isLoading: true,
      rejected: false
    }
  }
});
export const reject_pdf_loading = () => ({

  type: ActionTypes.REJECT_PDF_LOADING,
  payload: {
    isLoading: false,
    error: null,
    confirmed: {
      confirmed: false,
      isLoading: true,
      rejected: false
    }
  }
});
export const reject_pdf = () => ({

  type: ActionTypes.REJECT_PDF,
  payload: {
    isLoading: false,
    error: null,
    confirmed: {
      confirmed: false,
      isLoading: false,
      rejected: true
    }
  }
});

export const notification_send_success = () => ({

  type: ActionTypes.NOTIFICATION_SENDED_SUCCESS,
  payload: {
    isLoading: false,
    error: null,
    confirmed: {
      confirmed: true,
      isLoading: false,
      notificationSent: true,
      rejected: false

    }
  }
});


// export const fetchCountries_ = (entitieId) => (dispatch) => {
//
//   dispatch(loadingCountries());
//   setTimeout(() => {
//     dispatch(fetchCountries(entitieId));
//   }
//   , 1000
//   );
// };
//
// export const fetchCountries = (entitieId) => ({
//   type: ActionTypes.FETCH_COUNTRIES,
//   payload: {
//     entitieId,
//     isLoading: false
//   }
// });