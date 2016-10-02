import deepFreeze from 'deep-freeze';
import description from '../description';
import {setDescription} from 'actions/pageCreator';

describe('description reducer', () => {
  it('it sets description', () => {
    const stateBefore = '';
    const _description = 'Description';
    const action = setDescription(_description);
    const stateAfter = _description;
    deepFreeze(action);
    expect(description(stateBefore, action)).to.be.eql(stateAfter);
  });
});
