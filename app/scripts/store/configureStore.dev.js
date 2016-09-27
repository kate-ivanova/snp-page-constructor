/* eslint no-unused-vars: "off" */
import {createStore} from 'redux';
import rootReducer from 'reducers';
import enhancer from './storeEnhancer';

// ------------------ configureStore ------------------
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );
  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('reducers', () =>
      store.replaceReducer(require('reducers').default)
    );
  }
  return store;
}
