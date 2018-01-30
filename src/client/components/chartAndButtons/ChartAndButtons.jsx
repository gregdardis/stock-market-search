import React from 'react';

import TimePeriodPicker from '../timePeriodPicker';
import Chart from '../chart';

const ChartAndButtons = () => (
  <div className='chartAndButtons'>
    <TimePeriodPicker />
    <Chart />
  </div>
);
export default ChartAndButtons;