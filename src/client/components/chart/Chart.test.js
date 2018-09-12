import React from 'react';
import { shallow } from 'enzyme';
import { ResponsiveContainer } from 'recharts';

import { Chart } from './Chart';

describe('<Chart />', () => {
  it('renders a ResponsiveContainer', () => {
    const wrapper = shallow(
      <Chart chartTimePeriodIndex={0} data={[]} />
    );
    expect(wrapper.find(ResponsiveContainer)).toHaveLength(1);
  });
});