import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CompanyGeneralInfo from '.';
import CompanyNameAndSymbol from '../companyNameAndSymbol';
import Exchange from '../exchange';
import PriceAndTodaysPriceChange from '../priceAndTodaysPriceChange';

describe('<CompanyGeneralInfo />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<CompanyGeneralInfo />);
  });

  it('has expected className for styling', () => {
    expect(wrapper).to.have.className('companyGeneralInfo');
  });
  it('renders CompanyNameAndSymbol component', () => {
    expect(wrapper.find(CompanyNameAndSymbol)).to.have.length(1);
  });
  it('renders Exchange component', () => {
    expect(wrapper.find(Exchange)).to.have.length(1);
  });
  it('renders PriceAndTodaysPriceChange component', () => {
    expect(wrapper.find(PriceAndTodaysPriceChange)).to.have.length(1);
  });
});