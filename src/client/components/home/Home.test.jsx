import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Home from './Home';

describe('<Home />', () => {
  it('has the correct className for styling', () => {
    const wrapper = shallow(<Home loading={ false }/>);

    expect(wrapper).to.have.className('home');
  });
  it('Renders Search', () => {
    const wrapper = shallow(<Home loading={ false }/>);

    expect(wrapper).to.have.exactly(1).descendants('Connect(Search)');
  });
  it('Renders StockDataRegion', () => {
    const wrapper = shallow(<Home loading={ false }/>);

    expect(wrapper).to.have.exactly(1).descendants('Connect(StockDataRegion)');
  });
});