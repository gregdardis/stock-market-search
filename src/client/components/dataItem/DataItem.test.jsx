import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { DataItem } from './DataItem';

describe('<DataItem />', () => {
  let wrapper;

  const baseProps = {
    label: 'High',
    showBottomBorder: true,
    value: '113.36'
  };

  it('has the correct className with showBottomBorder = true', () => {
    wrapper = shallow(<DataItem { ...baseProps } />);
    expect(wrapper).to.have.className('dataItem dataItemBorder');
  });
  it('has the correct className with showBottomBorder = false', () => {
    const bottomBorderFalseProps = {
      ...baseProps,
      showBottomBorder: false
    };
    wrapper = shallow(<DataItem { ...bottomBorderFalseProps } />);
    expect(wrapper).to.have.className('dataItem');
  });
  it('has the correct className for second (value) span', () => {
    wrapper = shallow(<DataItem { ...baseProps } />);
    expect(wrapper.find('span').at(1)).to.have.className('value');
  });
  it('renders first (label) span with a child of "High"', () => {
    wrapper = shallow(<DataItem { ...baseProps } />);
    expect(wrapper.find('span').at(0).text()).to.equal('High');
  });
  it('renders second (value) span with a child of "113.36"', () => {
    wrapper = shallow(<DataItem { ...baseProps } />);
    expect(wrapper.find('span').at(1).text()).to.equal('113.36');
  });
});