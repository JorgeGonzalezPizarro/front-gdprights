import { firstForm } from '../../shared/firstForm'
import { secondForm } from '../../shared/secondForm'
import * as Action from '../ActionTypes/Form/FormActionTypes'

export const initial_state = {
  isLoading: true,
  currentStep: 1,
  firstForm: firstForm,
  secondForm: secondForm
}

export const FormReducer = (state = initial_state, action) => {

  switch (action.type) {

    case Action.FETCH :
      return Object.assign({}, state, action.payload)
      break
    case Action.LOADING :
      return Object.assign({}, state, action.payload)
      break;
    case Action.FETCH_ENTITIES :
      const stateCopy = state
      const secondForm = stateCopy.firstForm.secondForm.map((form) => {
        if (form.hasOwnProperty('entities')) {
          Object.assign(form, action.payload)
        }
      })
      Object.assign(stateCopy.secondForm, { ...secondForm })
      return Object.assign({}, state, stateCopy)
      break;
    case Action.LOADING_ENTITIES :
      const stateCopy_ = state
      const secondForm_ = stateCopy_.firstForm.secondForm.map((_form) => { if (_form.hasOwnProperty('entities')) {

        Object.defineProperty(_form, 'isLoading', {
          ...true
        })
      }
      })

      Object.assign(stateCopy_.secondForm, { ...secondForm_ })
      return Object.assign({}, state, stateCopy_)
      break;
    default  :
      return { ...state }

  }

}