import { firstForm } from '../../shared/firstForm'
import { secondForm } from '../../shared/secondForm'
import * as Action from '../ActionTypes/Form/FormActionTypes'

 export  const initial_state = {
  isLoading: true,
  currentStep: 1,
  firstForm: firstForm,
  secondForm: secondForm
}

export const FormReducer = (state = initial_state, action) => {

  switch (action.type) {

    case Action.FETCH :
      return Object.assign({}, state, action.payload )

    case Action.LOADING :
      return Object.assign({}, state, action.payload )


    default  :
      return { ...state }

  }

}