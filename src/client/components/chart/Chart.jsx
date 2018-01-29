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
  CHART_DATE_FORMAT_TOOLTIP,
  CHART_DATE_FORMAT_X_AXIS,
  CHART_X_AXIS_MIN_TICK_GAP,
  VALUE_PRECISION_CURRENT_PRICE
} from '../../../constants';

const Chart = ({
  data
}) => (
  <LineChart width={ CHART_WIDTH } height={ CHART_HEIGHT } data={ data } className='chart'>
    <CartesianGrid strokeDashArray='3 3' />
    <XAxis dataKey='date' tickFormatter={ date => dateFormat(date, CHART_DATE_FORMAT_X_AXIS) }
      minTickGap={ CHART_X_AXIS_MIN_TICK_GAP } />
    <YAxis dataKey='price' domain={ ['auto', 'auto'] } tickFormatter={ addCommas } />
    <Tooltip labelFormatter={ date => dateFormat(date, CHART_DATE_FORMAT_TOOLTIP) }
      formatter={ price => price.toFixed(VALUE_PRECISION_CURRENT_PRICE) } />
    <Line type='monotone' dataKey='price' dot={ false } stroke='red' />
  </LineChart>
);
Chart.propTypes = {
  data: PropTypes.array.isRequired
};
export default Chart;