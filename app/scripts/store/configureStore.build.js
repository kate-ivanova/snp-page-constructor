/* eslint no-unused-vars: "off" */
import {createStore} from 'redux';
import rootReducer from 'reducers/rootReducer';
import enhancer from './storeEnhancer';

// ------------------ configureStore ------------------
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );
  return store;
}
