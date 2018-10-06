import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import Chart from './Chart';
import * as numberFormatting from '../../../utils/formatting/numberFormatting';

describe('<Chart />', () => {
  it('renders a ResponsiveContainer', () => {
    const wrapper = shallow(
      <Chart chartTimePeriodIndex={0} data={[]} />
    );
    chaiExpect(wrapper.find(ResponsiveContainer)).to.have.length(1);
  });
  it('renders 1 child (LineChart) for ResponsiveContainer', () => {
    const wrapper = shallow(
      <Chart chartTimePeriodIndex={0} data={[]} />
    );
    const responsiveContainerChildren =
      wrapper.find(ResponsiveContainer).children();

    chaiExpect(responsiveContainerChildren)
      .to.have.length(1);
    chaiExpect(responsiveContainerChildren.find(LineChart))
      .to.have.length(1);
  });
  it('renders correct 5 children of LineChart', () => {
    const wrapper = shallow(
      <Chart chartTimePeriodIndex={0} data={[]} />
    );
    const lineChartChildren =
      wrapper.find(ResponsiveContainer).childAt(0).children();

    chaiExpect(lineChartChildren)
      .to.have.length(5);
    chaiExpect(lineChartChildren.find(CartesianGrid))
      .to.have.length(1);
    chaiExpect(lineChartChildren.find(XAxis))
      .to.have.length(1);
    chaiExpect(lineChartChildren.find(YAxis))
      .to.have.length(1);
    chaiExpect(lineChartChildren.find(Tooltip))
      .to.have.length(1);
    chaiExpect(lineChartChildren.find(Line))
      .to.have.length(1);
  });
  it('has a Tooltip with a formatter prop that calls formatAsPrice', () => {
    const mockFormatAsPrice = jest.spyOn(
      numberFormatting,
      'formatAsPrice'
    );
    const wrapper = shallow(
      <Chart chartTimePeriodIndex={0} data={[]} />
    );
    const formatter = wrapper.find('Tooltip').prop('formatter');
    formatter(1000);

    expect(mockFormatAsPrice).toHaveBeenCalledTimes(1);

    mockFormatAsPrice.mockReset();
  });
});