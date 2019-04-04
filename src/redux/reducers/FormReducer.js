import { firstForm } from '../../shared/firstForm';
import { secondForm } from '../../shared/secondForm';
import * as Action from '../ActionTypes/Form/FormActionTypes';

export const initial_state = {
  isLoading: true,
  currentStep: 1,
  firstForm: firstForm,
  secondForm: secondForm
};

export const FormReducer = (state = initial_state, action) => {

  switch (action.type) {

  case Action.FETCH :
    return  Object.assign({}, state, action.payload);


  case Action.LOADING :
    return Object.assign(state, action.payload);
  case Action.FETCH_ENTITIES :
    state.firstForm.secondForm.map((form) => {
      if (form.hasOwnProperty('options') &&  form.name==='entities') {
        Object.assign(form, action.payload );
      }
    });
    return  Object.assign({}, state);

  case Action.LOADING_ENTITIES :
    const newState = {
      ...state,
      firstForm: {
        ...state.firstForm,
        secondForm :   state.firstForm.secondForm.map((input) => {
          return input.name ==='entities' ?  Object.assign({}, input, action.payload) : input;
        }),
      }
    };
    return Object.assign({}, state, newState);

  case  Action.LOADING_COUNTRIES : {

    const newState = {
      ...state,
      firstForm: {
        ...state.firstForm,
        secondForm :   state.firstForm.secondForm.map((input) => {
          return input.name ==='countries' ?  Object.assign({}, input, action.payload) : input;
        }),
      }
    };
    return Object.assign({}, state, newState);
  }
  case  Action.FETCH_COUNTRIES : {
    const inputEntities = state.firstForm.secondForm.filter((input) => {
      return input.name === 'entities';
    })[0];

    const entitieSelected = inputEntities.options.filter(option => option.id === action.payload.entitieId)[0];
    let newState = {};
    if (entitieSelected !== null) {

      const newSecondForm = state.firstForm.secondForm.filter((input) => {
        input.options = input.name === 'countries' ? entitieSelected.countries : input.options;
        input.isLoading = input.name === 'countries' ? action.payload.isLoading : false;
        return input;
      });
      newState = {
        ...state,
        firstForm: {
          ...state.firstForm,
          secondForm: newSecondForm
        }
      };
    }else{
      newState = Object.assign({}, state);
    }

   return  Object.assign({}, state, newState);
  }



  default  :
    return state;

  }

};