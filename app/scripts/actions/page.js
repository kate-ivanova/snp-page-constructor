import actionTypes from './actionTypes';

export const setTitle = title => {
  return {
    type: actionTypes.SET_TITLE,
    title,
  };
};
export const setDescription = description => {
  return {
    type: actionTypes.SET_DESCRIPTION,
    description,
  };
};
export const addText = text => {
  return {
    type: actionTypes.ADD_TEXT,
    text,
  };
};
export const addImage = src => {
  return {
    type: actionTypes.ADD_IMAGE,
    src,
  };
};
export const addList = list => {
  return {
    type: actionTypes.ADD_LIST,
    list,
  };
};
