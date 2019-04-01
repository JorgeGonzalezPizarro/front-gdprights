import { firstForm } from '../../shared/firstForm'
import { secondForm } from '../../shared/secondForm'
import * as Action from '../ActionTypes/Form/FormActionTypes'

export const initial_state = {
  isLoading: true,
  currentStep: 1,
  firstForm: firstForm,
  secondForm: secondForm
}

export const FormReducer = (state = initial_state , action) => {

  switch (action.type) {

    case Action.FETCH :
      return  Object.assign({},state, action.payload)


    case Action.LOADING :
      return Object.assign(state, action.payload)
    case Action.FETCH_ENTITIES :
      const stateCopy = state
      const secondForm = stateCopy.firstForm.secondForm.map((form) => {
        if (form.hasOwnProperty('options') &&  form.name==='entitiesList') {
          Object.assign(form, action.payload )
        }
      })
      return  Object.assign({},state,stateCopy)

    case Action.LOADING_ENTITIES :
      const newState = {
        ...state,
        firstForm: {
          ...state.firstForm ,
          secondForm :   state.firstForm.secondForm.map((input) => {
               return input.name ==='entitiesList' ?  Object.assign({},input,action.payload) : input
          }),
          }
      }
      return Object.assign({} ,state,newState)

    default  :
      return state

  }

}