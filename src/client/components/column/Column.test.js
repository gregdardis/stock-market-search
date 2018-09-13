import React from 'react';
import { shallow } from 'enzyme';

import Column from '.';
import { DataItem } from '../dataItem/DataItem';
import {
  LABEL_HIGH,
  LABEL_OPEN
} from '../../../constants/userFacingStrings';

describe('<Column />', () => {
  it('renders 2 DataItems', () => {
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
    const wrapper = shallow(
      <Column { ...props }/>
    );
    expect(wrapper.find(DataItem)).toHaveLength(2);
  });
});