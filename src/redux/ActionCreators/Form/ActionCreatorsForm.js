import * as ActionTypes from '../../ActionTypes/Form/FormActionTypes'

import axios from 'axios';
export const fetchForm = () => (dispatch) => {
  dispatch(loading());
  setTimeout(() => {
    dispatch(fetch())
  },500)
};

export const fetchEntities_ =  () => (dispatch) => {

  dispatch(loadingEntities())
  const data = axios.get('http://localhost/gdprights/public/index.php/entities/')
    .then((response) => {
      return response }
    );

  data.then((data) => dispatch(fetchEntities(data.data)))
};



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

  type: ActionTypes.FETCH_ENTITIES ,
  payload : {
    entities: entities
  }
})


export const fetch = () => (
  {
    type: ActionTypes.FETCH,
    payload: {
      isLoading: false,
      error: null,
    }
  }
);

