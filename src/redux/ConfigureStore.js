import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { FormReducer } from './reducers/FormReducer';

export const ConfigureStore = () => {
  return createStore(
    combineReducers( {
      form: FormReducer,
    }),
    applyMiddleware(logger, thunk)
  );
};

