import {applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// enhancer
if (process.env.NODE_ENV === 'production') {
  module.exports = compose(
    applyMiddleware(thunk)
  );
} else {
  const DevTools = require('containers/DevTools');
  const persistState = require('redux-devtools').persistState;
  const getDebugSessionKey = () => {
    // You can write custom logic here!
    // By default we try to read the key from ?debug_session=<key> in the address bar
    const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
    return (matches && matches.length > 0) ? matches[1] : null;
  };
  module.exports = compose(
    // lets us dispatch() functions
    applyMiddleware(thunk),
    DevTools.instrument(),
    persistState(getDebugSessionKey())
  );
}
