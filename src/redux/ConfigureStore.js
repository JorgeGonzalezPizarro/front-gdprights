
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from "redux-thunk";
import { logger } from 'redux-logger'

// const rootReducer = combineReducers({
//   // ...your other reducers here
//   // you have to pass formReducer under 'form' key,
//   // for custom keys look up the docs for 'getFormState'
//   form: formReducer
// })
//
// export const ConfigureStore = () => {
//
//  createStore(rootReducer,   applyMiddleware(logger, thunk))
// }

export const ConfigureStore = () =>{
  return createStore(
    combineReducers({
      form: formReducer

    }),
    applyMiddleware(logger, thunk)
  );
};


