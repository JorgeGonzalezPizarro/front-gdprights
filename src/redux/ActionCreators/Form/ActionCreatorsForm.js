import axios from 'axios';
import * as ActionTypes from '../../ActionTypes/Form/FormActionTypes';

import { firstForm } from '../../../shared/firstForm';
import { secondForm } from '../../../shared/secondForm';
import { thirdForm } from '../../../shared/thirdForm';
import { alertUtil } from '../../../Components/Util/alertUtil';

export const fetchForm = () => (dispatch) => {
  dispatch(loading());
  setTimeout(() => {
    return dispatch(fetch(firstForm, secondForm, thirdForm));
  }, 500);
};

export const fetchEntities_ = () => (dispatch) => {
  dispatch(loadingEntities());
  const data = () => {
    return axios.get('https://localhost/gdprights/public/index.php/entities/').then(result => {
      return result.data;
    }).then((data) => {
      dispatch(fetchEntities(data));
    });
  };
  data();
};
export const fetchCountries_ = (entitieId) => (dispatch) => {

  dispatch(loadingCountries());
  setTimeout(() => {
    dispatch(fetchCountries(entitieId));
  }
  , 1000
  );
};

export const fetchCountries = (entitieId) => ({
  type: ActionTypes.FETCH_COUNTRIES,
  payload: {
    entitieId,
    isLoading: false
  }
});

export const sendRequest_ = (data) => (dispatch) => {
  alertUtil(data);
  dispatch(pdf_loading());

  const response = async () => {

    const response = await axios.post('https://localhost/gdprights/public/index.php?XDEBUG_SESSION_START=11556', Object.assign({}, data), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const { file, requestId } = response.data;
    dispatch(pdf_success(requestId, file));
  };
  response();
};

export const confirmPdf_ = ( confirmed, requestId) => (dispatch) => {
  alertUtil(confirmed);
  alertUtil(requestId);
  if (confirmed === false) {
    return  dispatch(reject_pdf());
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

  alertUtil(data);


};


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
    isLoading: true
  }
});

export const fetchEntities = (entities) => ({

  type: ActionTypes.FETCH_ENTITIES,
  payload: {
    options: entities,
    isLoading: false
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
      file : pdf
    },
    requestId
  }
});

export const confirm_pdf_loading = () => ({

  type: ActionTypes.CONFIRM_PDF_LOADING,
  payload: {
    isLoading: true,
    error: null,
    confirmed: {
      confirmed: null,
      isLoading: true
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
      isLoading: false
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
      notificationSent: true

    },
  }
});

