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
});