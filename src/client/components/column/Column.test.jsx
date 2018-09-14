import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Column from '.';
import {
  LABEL_HIGH,
  LABEL_OPEN
} from '../../../constants/userFacingStrings';

const MockCellComponent = () => <div />;

describe('<Column />', () => {
  const baseProps = {
    columnCellComponent: MockCellComponent,
    columnKeyName: LABEL_OPEN,
    componentsProps: [{
      key: 0,
      label: LABEL_OPEN
    }, {
      key: 1,
      label: LABEL_HIGH
    }]
  };

  const propsEmptyComponentsProps = {
    ...baseProps,
    componentsProps: []
  };

  let wrapper;

  it('has expected className for styling', () => {
    wrapper = shallow(
      <Column { ...baseProps } />
    );
    expect(wrapper).to.have.className('column');
  });
  it('renders 2 MockCellComponent\'s', () => {
    wrapper = shallow(
      <Column { ...baseProps } />
    );
    expect(wrapper.find(MockCellComponent)).to.have.length(2);
  });
  it('renders 0 MockCellComponents if empty componentsProps', () => {
    wrapper = shallow(
      <Column { ...propsEmptyComponentsProps } />
    );
    expect(wrapper.find(MockCellComponent)).to.have.length(0);
  });
});