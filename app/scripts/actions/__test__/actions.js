import actionTypes from '../actionTypes';
import * as actionCreators from '../page';

describe('title action creators', () => {
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
});
