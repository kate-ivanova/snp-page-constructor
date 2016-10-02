import {combineReducers} from 'redux';
import title from './title';
import description from './description';

const pageCreator = combineReducers({
  title,
  description,
});

export default pageCreator;
