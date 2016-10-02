import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from 'reducers/rootReducer';
import PageCreatorContainer from 'containers/PageCreatorContainer';

describe('<PageCreatorContainer />', () => {
  let component;
  let store;
  beforeEach(() => {
    component = shallow(
      <Provider store={{}}>
        <PageCreatorContainer />
      </Provider>
    );
    store = createStore(
      rootReducer,
    );
  });
  it('renders correctly', () => {
    expect(component).to.be.ok;
  });
});
