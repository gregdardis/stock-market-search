import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Exchange from './Exchange';
import {
  MESSAGE_UNKNOWN_STOCK_EXCHANGE
} from '../../../constants/userFacingStrings';

describe('<Exchange />', () => {
  it('has the correct className for styling', () => {
    const wrapper = shallow(<Exchange />);
    expect(wrapper).to.have.className('exchange');
  });
  it('renders exchange prop in a span', () => {
    const wrapper = shallow(<Exchange exchange='NYSE' />);
    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.find('span').at(0).text())
      .to.equal('NYSE');
  });
  it('renders message if no exchange prop given', () => {
    const wrapper = shallow(<Exchange />);
    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.find('span').at(0).text())
      .to.equal(MESSAGE_UNKNOWN_STOCK_EXCHANGE);
  });
});