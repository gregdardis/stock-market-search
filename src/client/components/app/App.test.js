import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '.';
import NavBar from '../navBar';

describe('<App />', () => {
  it('should render a NavBar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NavBar)).to.have.length(1);
  });
  it('should have correct classname for styling', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.className('app');
  });
});