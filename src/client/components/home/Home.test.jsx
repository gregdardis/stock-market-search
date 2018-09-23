import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Home from '.';
import Search from '../search';
import SearchStatus from '../searchStatus';
import StockDataRegion from '../stockDataRegion';

describe('<Home />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Home />);
  });

  it('has the correct className for styling', () => {
    expect(wrapper).to.have.className('home');
  });
  it('renders Search component', () => {
    expect(wrapper.find(Search)).to.have.length(1);
  });
  it('renders SearchStatus component', () => {
    expect(wrapper.find(SearchStatus)).to.have.length(1);
  });
  it('renders StockDataRegion component', () => {
    expect(wrapper.find(StockDataRegion)).to.have.length(1);
  });
});