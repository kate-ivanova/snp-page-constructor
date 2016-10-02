import actionTypes from 'actions/actionTypes';
import * as actionCreators from 'actions/pageCreator';

describe('pageCreator action creators', () => {
  it('create setTitle action', () => {
    const title = 'Title';
    const action = actionCreators.setTitle(title);
    const expectedAction = {
      type: actionTypes.SET_TITLE,
      title,
    };
    expect(action).to.be.eql(expectedAction);
  });
  it('create setDescription action', () => {
    const description = 'Description';
    const action = actionCreators.setDescription(description);
    const expectedAction = {
      type: actionTypes.SET_DESCRIPTION,
      description,
    };
    expect(action).to.be.eql(expectedAction);
  });
  it('create addText action', () => {
    const text = 'Text';
    const action = actionCreators.addText(text);
    const expectedAction = {
      type: actionTypes.ADD_TEXT,
      text,
    };
    expect(action).to.be.eql(expectedAction);
  });
  it('create addImage action', () => {
    const src = 'images/image.png';
    const action = actionCreators.addImage(src);
    const expectedAction = {
      type: actionTypes.ADD_IMAGE,
      src,
    };
    expect(action).to.be.eql(expectedAction);
  });
  it('create addList action', () => {
    const list = [];
    const action = actionCreators.addList(list);
    const expectedAction = {
      type: actionTypes.ADD_LIST,
      list,
    };
    expect(action).to.be.eql(expectedAction);
  });
  it('create addAuthorName action', () => {
    const name = 'Author name';
    const action = actionCreators.addAuthorName(name);
    const expectedAction = {
      type: actionTypes.ADD_AUTHOR_NAME,
      name,
    };
    expect(action).to.be.eql(expectedAction);
  });
  it('create addAuthorEmail action', () => {
    const email = 'Author email';
    const action = actionCreators.addAuthorEmail(email);
    const expectedAction = {
      type: actionTypes.ADD_AUTHOR_EMAIL,
      email,
    };
    expect(action).to.be.eql(expectedAction);
  });
  it('create addAuthorPhone action', () => {
    const phone = 'Author phone';
    const action = actionCreators.addAuthorPhone(phone);
    const expectedAction = {
      type: actionTypes.ADD_AUTHOR_PHONE,
      phone,
    };
    expect(action).to.be.eql(expectedAction);
  });
});
