import React from 'react';
import {shallow} from 'enzyme';
import Home from 'pages/Home/Home';
import PageCreatorContainer from 'containers/PageCreatorContainer';

describe('<Home />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Home />);
  });
  it('renders correctly', () => {
    expect(component).to.be.ok;
    expect(component.prop('className')).to.contain('home');
  });
  it('contains <PageCreatorContainer />', () => {
    expect(component.contains(
      <PageCreatorContainer />
    )).to.be.ok;
  });
});
