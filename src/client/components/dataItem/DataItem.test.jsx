import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import DataItem from './DataItem';

describe('<DataItem />', () => {
  const baseProps = {
    label: 'High',
    showBottomBorder: true,
    value: '113.36'
  };

  it('has the correct className with showBottomBorder = true', () => {
    const wrapper = shallow(<DataItem { ...baseProps } />);
    expect(wrapper).to.have.className('dataItem dataItemBorder');
  });
  it('has the correct className with showBottomBorder = false', () => {
    const bottomBorderFalseProps = {
      ...baseProps,
      showBottomBorder: false
    };
    const wrapper = shallow(<DataItem { ...bottomBorderFalseProps } />);
    expect(wrapper).to.have.className('dataItem');
  });
  it('has the correct className for the span that holds the value', () => {
    const wrapper = shallow(<DataItem { ...baseProps } />);
    expect(wrapper.find('span').at(1)).to.have.className('value');
  });
  it('renders the correct label', () => {
    const wrapper = shallow(<DataItem { ...baseProps } />);
    expect(wrapper.find('span').at(0).text()).to.equal('High');
  });
  it('renders the correct value', () => {
    const wrapper = shallow(<DataItem { ...baseProps } />);
    expect(wrapper.find('span').at(1).text()).to.equal('113.36');
  });
});