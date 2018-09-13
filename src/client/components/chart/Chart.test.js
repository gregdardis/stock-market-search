import React from 'react';
import {
  shallow
} from 'enzyme';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import { Chart } from './Chart';
import * as chartUtils from '../../../utils/chartUtils'; 

describe('<Chart />', () => {
  it('renders a ResponsiveContainer', () => {
    const wrapper = shallow(
      <Chart chartTimePeriodIndex={0} data={[]} />
    );
    expect(wrapper.find(ResponsiveContainer)).toHaveLength(1);
  });
  it('renders 1 child (LineChart) for ResponsiveContainer', () => {
    const wrapper = shallow(
      <Chart chartTimePeriodIndex={0} data={[]} />
    );
    const responsiveContainerChildren =
      wrapper.find(ResponsiveContainer).children();

    expect(responsiveContainerChildren)
      .toHaveLength(1);
    expect(responsiveContainerChildren.find(LineChart))
      .toHaveLength(1);
  });
  it('renders correct 5 children of LineChart', () => {
    const wrapper = shallow(
      <Chart chartTimePeriodIndex={0} data={[]} />
    );
    const lineChartChildren =
      wrapper.find(ResponsiveContainer).childAt(0).children();

    expect(lineChartChildren)
      .toHaveLength(5);
    expect(lineChartChildren.find(CartesianGrid))
      .toHaveLength(1);
    expect(lineChartChildren.find(XAxis))
      .toHaveLength(1);
    expect(lineChartChildren.find(YAxis))
      .toHaveLength(1);
    expect(lineChartChildren.find(Tooltip))
      .toHaveLength(1);
    expect(lineChartChildren.find(Line))
      .toHaveLength(1);
  });
  it('gets tooltip formatter and calls it, ensuring formatAsPrice ' +
     'was called', () => {
    const mockFormatAsPrice = jest.spyOn(
      chartUtils,
      'formatAsPrice'
    );
    const wrapper = shallow(
      <Chart chartTimePeriodIndex={0} data={[]} />
    );
    const formatter = wrapper.find(ResponsiveContainer).childAt(0)
      .childAt(3).prop('formatter');
    formatter(1000);

    expect(mockFormatAsPrice).toHaveBeenCalledTimes(1);

    mockFormatAsPrice.mockReset();
  });
});