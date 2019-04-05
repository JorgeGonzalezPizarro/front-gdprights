import axios from 'axios';
import * as ActionTypes from '../../ActionTypes/Form/FormActionTypes';

import { firstForm } from '../../../shared/firstForm';
import { secondForm } from '../../../shared/secondForm';
import { thirdForm } from '../../../shared/thirdForm';
import { alertUtil } from '../../../Components/Util/alertUtil';

export const fetchForm = () => (dispatch) => {
  dispatch(loading());
  setTimeout(() => {
    return  dispatch(fetch(firstForm, secondForm , thirdForm));
  }, 500);
};

export const fetchEntities_ =  () => (dispatch) => {
  dispatch(loadingEntities());
  const data = () => {
    return axios.get('http://localhost/gdprights/public/index.php/entities/').then(result => {
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
    dispatch(fetchCountries(entitieId));}
  , 1000
  );
};

export const fetchCountries = (entitieId) => ({
  type : ActionTypes.FETCH_COUNTRIES,
  payload : {
    entitieId,
    isLoading : false
  }
});

export const sendRequest_ = (data) => {
  console.log(data);
  alertUtil(data);
  axios.post('http://localhost/gdprights/public/index.php/', data).then(result => {
    return result.data;
  }).then((response) => {
    console.log(response);
  });
};

export const loadingCountries = () =>({

  type : ActionTypes.LOADING_COUNTRIES,
  payload : {
    isLoading : true,
    error : null,
  }});

export const sendRequest = (data) =>({

  type : ActionTypes.SEND_REQUEST,
  payload : {
    isLoading : true,
    error : null,
    pdf : data
  }});


export const loading = () => ({

  type: ActionTypes.LOADING,
  payload: {
    isLoading: true,
    error : null,
  }
});

export const loadingEntities = () => ({

  type: ActionTypes.LOADING_ENTITIES,
  payload: {
    isLoading: true,
  }
});

export const fetchEntities = (entities) => ({

  type: ActionTypes.FETCH_ENTITIES,
  payload : {
    options: entities,
    isLoading : false
  }
});


export const fetch = (firstForm, secondForm , thirdForm) => (
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

