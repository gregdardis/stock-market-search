import React from 'react';
import {
  mount,
  shallow
} from 'enzyme';
import { MemoryRouter } from 'react-router';

import App from '.';
import NavBar from '../navBar';

describe('<App />', () => {
  it('should render a NavBar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NavBar)).toHaveLength(1);
  });
});