import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from './App';

describe('<App />', () => {
  it('has classname "app"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.childAt(0)).to.have.className('app');
  });
});