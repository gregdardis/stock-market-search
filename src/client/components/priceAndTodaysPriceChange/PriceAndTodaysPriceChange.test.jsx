import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import PriceAndTodaysPriceChange from './PriceAndTodaysPriceChange';

describe('<PriceAndTodaysPriceChange />', () => {
  const mockCurrentPrice = '$113.38';
  const mockPriceChange = '$1.68';
  const mockPriceChangePercentage = '1.48%';

  const baseProps = {
    currentPrice: mockCurrentPrice,
    isPositiveChange: true,
    priceChange: mockPriceChange,
    priceChangePercentage: mockPriceChangePercentage
  };

  it('has the proper classname for styling', () => {
    const wrapper = shallow(<PriceAndTodaysPriceChange { ...baseProps }/>);

    expect(wrapper).to.have.className('priceAndTodaysPriceChange');
  });
  it('has two children', () => {
    const wrapper = shallow(<PriceAndTodaysPriceChange { ...baseProps }/>);

    expect(wrapper.children()).to.have.length(2);
  });
  it('displays the current price with the correct className for styling', () => {
    const wrapper = shallow(<PriceAndTodaysPriceChange { ...baseProps }/>);
    const firstChild = wrapper.childAt(0);

    expect(firstChild.type()).to.equal('div');
    expect(firstChild).to.have.className('currentPrice');
    expect(firstChild).to.have.text(mockCurrentPrice);
  });
  it('has second child div with correct text and className ' +
     'for positive change', () => {
    const wrapper = shallow(<PriceAndTodaysPriceChange { ...baseProps }/>);
    const secondChild = wrapper.childAt(1);

    expect(secondChild.type()).to.equal('div');
    expect(secondChild).to.have.className('positive');
    expect(secondChild).to.have.text(
      `+${ mockPriceChange } (+${ mockPriceChangePercentage })`
    );
  });
  it('has second child div with correct text and className ' +
     'for negative change', () => {
    const propsNegativeChange = {
      ...baseProps,
      isPositiveChange: false
    };
    const wrapper = shallow(
      <PriceAndTodaysPriceChange { ...propsNegativeChange }/>
    );
    const secondChild = wrapper.childAt(1);

    expect(secondChild.type()).to.equal('div');
    expect(secondChild).to.have.className('negative');
    expect(secondChild).to.have.text(
      `${ mockPriceChange } (${ mockPriceChangePercentage })`
    );
  });
});