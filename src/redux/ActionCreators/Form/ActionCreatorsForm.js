import * as ActionTypes from '../../ActionTypes/Form/FormActionTypes';

import axios from 'axios';
import { firstForm } from '../../../shared/firstForm';
import { secondForm } from '../../../shared/secondForm';
import { alertUtil } from '../../../Components/Util/alertUtil';

export const fetchForm = () => (dispatch) => {
  dispatch(loading());
  setTimeout(() => {
    return  dispatch(fetch(firstForm, secondForm));
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
    entitieId : entitieId,
    isLoading : false
  }
});

export const loadingCountries = () =>({

  type : ActionTypes.LOADING_COUNTRIES,
  payload : {
    isLoading : true,
    error : null,
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


export const fetch = (firstForm, secondForm) => (
  {
    type: ActionTypes.FETCH,
    payload: {
      isLoading: false,
      error: null,
      firstForm : firstForm,
      secondForm : secondForm
    }
  }
);

