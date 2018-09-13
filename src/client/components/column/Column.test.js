import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Column from '.';
import { DataItem } from '../dataItem/DataItem';
import {
  LABEL_HIGH,
  LABEL_OPEN
} from '../../../constants/userFacingStrings';

describe('<Column />', () => {
  const props = {
    columnCellComponent: DataItem,
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

  beforeAll(() => {
    wrapper = shallow(
      <Column { ...props } />
    );
  });

  it('has expected className for styling', () => {
    expect(wrapper).to.have.className('column');
  });
  it('renders 2 DataItems', () => {
    expect(wrapper.find(DataItem)).to.have.length(2);
  });
});