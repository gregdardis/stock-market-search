import React from 'react';

import TimePeriodButtons from '../timePeriodButtons';
import Chart from '../chart';

const ChartAndButtons = () => (
  <div className='chartAndButtons'>
    <TimePeriodButtons />
    <Chart />
  </div>
);
export default ChartAndButtons;