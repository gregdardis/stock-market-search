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

  let wrapper;

  it('has expected className for styling', () => {
    wrapper = shallow(
      <Column { ...baseProps } />
    );
    expect(wrapper).to.have.className('column');
  });
  it('renders 2 MockCellComponent\'s, with showBottomBorder false', () => {
    wrapper = shallow(
      <Column { ...baseProps } />
    );
    expect(wrapper.find(MockCellComponent)).to.have.length(2);
    expect(wrapper.find('MockCellComponent').at(0)
      .prop('showBottomBorder')).to.equal(false);
    expect(wrapper.find('MockCellComponent').at(1)
      .prop('showBottomBorder')).to.equal(false);
  });
  it('renders 0 MockCellComponents if empty componentsProps', () => {
    const propsEmptyComponentsProps = {
      ...baseProps,
      componentsProps: []
    };
    wrapper = shallow(
      <Column { ...propsEmptyComponentsProps } />
    );
    expect(wrapper.find(MockCellComponent)).to.have.length(0);
  });
  it('still renders with columnKeyName that isn\'t ' +
     'a field in cellProps', () => {
    const propsBadColumnKeyName = {
      ...baseProps,
      columnKeyName: 'bad'
    };
    wrapper = shallow(
      <Column { ...propsBadColumnKeyName } />
    );
    expect(wrapper.find(MockCellComponent)).to.have.length(2);
  });
  it('has showBottomBorder = true if cellShouldShowBottomBorder ' +
     'returns true', () => {
    const propsShowBottomBorder = {
      ...baseProps,
      cellShouldShowBottomBorder: () => true
    };
    wrapper = shallow(
      <Column { ...propsShowBottomBorder } />
    );
    expect(wrapper.find('MockCellComponent').at(0)
      .prop('showBottomBorder')).to.equal(true);
    expect(wrapper.find('MockCellComponent').at(1)
      .prop('showBottomBorder')).to.equal(true);
  });
});