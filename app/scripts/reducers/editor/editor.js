import {combineReducers} from 'redux';
import title from './title';
import description from './description';
import content from './content';
import footer from './footer';

const editorReducers = {
  title,
  description,
  content,
  footer,
};
const editor = combineReducers(editorReducers);

export default editor;
