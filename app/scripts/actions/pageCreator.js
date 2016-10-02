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
export const addAuthorName = name => {
  return {
    type: actionTypes.ADD_AUTHOR_NAME,
    name,
  };
};
export const addAuthorEmail = email => {
  return {
    type: actionTypes.ADD_AUTHOR_EMAIL,
    email,
  };
};
export const addAuthorPhone = phone => {
  return {
    type: actionTypes.ADD_AUTHOR_PHONE,
    phone,
  };
};
