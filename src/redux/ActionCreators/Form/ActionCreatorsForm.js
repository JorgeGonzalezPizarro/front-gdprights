import * as ActionTypes from '../../ActionTypes/Form/FormActionTypes'
import { firstForm } from '../../../shared/firstForm'
import { secondForm } from '../../../shared/secondForm'
import { initial_state } from '../../reducers/FormReducer'

export const fetchForm = () => (dispatch) => {
  dispatch(loading());
  dispatch(fetch())
};

export const loading = () => ({

  type: ActionTypes.LOADING,
  payload: {
    isLoading: true,
    error : null,
  }
});


export const fetch = () => (
  {
    type: ActionTypes.FETCH,
    payload: {
      isLoading: false,
      error: null,
    }
  }
);

