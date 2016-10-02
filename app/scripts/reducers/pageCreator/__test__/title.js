import deepFreeze from 'deep-freeze';
import title from '../title';
import {setTitle} from 'actions/pageCreator';

describe('title reducer', () => {
  it('it sets title', () => {
    const stateBefore = '';
    const _title = 'Title';
    const action = setTitle(_title);
    const stateAfter = _title;
    deepFreeze(action);
    expect(title(stateBefore, action)).to.be.eql(stateAfter);
  });
});
