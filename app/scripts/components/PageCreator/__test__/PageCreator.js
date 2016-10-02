import React from 'react';
import {shallow} from 'enzyme';
import PageCreator from 'components/PageCreator/PageCreator';

describe('<PageCreator />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<PageCreator />);
  });
  it('renders correctly', () => {
    expect(component).to.be.ok;
    expect(component.prop('styleName')).to.be.eql('page-creator');
  });
  it('contains title', () => {
    expect(component.contains(
      <input className="title"/>
    )).to.be.ok;
  });
  it('contains description', () => {
    expect(component.contains(
      <input className="description"/>
    )).to.be.ok;
  });
});
