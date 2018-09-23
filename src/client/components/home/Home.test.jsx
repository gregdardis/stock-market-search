import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Home from './Home';

describe('<Home />', () => {
  it('has the correct className for styling', () => {
    const wrapper = shallow(<Home loading={ false }/>);

    expect(wrapper).to.have.className('home');
  });
});