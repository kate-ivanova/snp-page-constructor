import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import pageCreator from './pageCreator';

const rootReducer = combineReducers({
  routing: routerReducer,
  pageCreator,
});

export default rootReducer;
