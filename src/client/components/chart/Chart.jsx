import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line
} from 'recharts';
import dateFormat from 'dateformat';

import { addCommas } from '../../../utils/formatting/numberFormatting';
import './chart.css';

const Chart = ({
  data
}) => (
  <LineChart width={ 1000 } height={ 400 } data={ data } className='chart'>
    <CartesianGrid strokeDashArray='3 3' />
    <XAxis dataKey='date' tickFormatter={ date => dateFormat(date, 'mmm d') } minTickGap={ 30 }/>
    <YAxis dataKey='price' domain={ ['auto', 'auto'] } tickFormatter={ addCommas } />
    <Tooltip />
    <Line type='monotone' dataKey='price' dot={ false } stroke='red' />
  </LineChart>
);
Chart.propTypes = {
  data: PropTypes.array.isRequired
};
export default Chart;