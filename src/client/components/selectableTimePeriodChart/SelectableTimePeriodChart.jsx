import React from 'react';

import TimePeriodButtons from '../timePeriodButtons';
import Chart from '../chart';
import './selectableTimePeriodChart.css';

const SelectableTimePeriodChart = () => (
  <div className='selectableTimePeriodChart'>
    <TimePeriodButtons />
    <Chart />
  </div>
);
export default SelectableTimePeriodChart;