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
import {
  CHART_HEIGHT,
  CHART_WIDTH,
  CHART_X_AXIS_DATE_FORMAT,
  CHART_X_AXIS_MIN_TICK_GAP
} from '../../../constants';

const Chart = ({
  data
}) => (
  <LineChart width={ CHART_WIDTH } height={ CHART_HEIGHT } data={ data } className='chart'>
    <CartesianGrid strokeDashArray='3 3' />
    <XAxis dataKey='date' tickFormatter={ date => dateFormat(date, CHART_X_AXIS_DATE_FORMAT) }
      minTickGap={ CHART_X_AXIS_MIN_TICK_GAP } />
    <YAxis dataKey='price' domain={ ['auto', 'auto'] } tickFormatter={ addCommas } />
    <Tooltip />
    <Line type='monotone' dataKey='price' dot={ false } stroke='red' />
  </LineChart>
);
Chart.propTypes = {
  data: PropTypes.array.isRequired
};
export default Chart;