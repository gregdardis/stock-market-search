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
  CHART_FORMAT_TOOLTIP_MAX,
  CHART_DATE_FORMAT_X_AXIS,
  CHART_X_AXIS_MIN_TICK_GAP,
  TIME_PERIOD_FIVE_DAY,
  TIME_PERIOD_FIVE_YEAR,
  TIME_PERIOD_MAX,
  TIME_PERIOD_ONE_DAY,
  TIME_PERIOD_ONE_MONTH,
  TIME_PERIOD_ONE_YEAR,
  TIME_PERIOD_THREE_MONTH,
  VALID_DATE_NOT_FOUND,
  VALUE_PRECISION_CURRENT_PRICE
} from '../../../constants';

const Chart = ({
  data,
  chartTimePeriod
}) => {
  const getTooltipFormatOneMonthOrLonger = date =>
    dateFormat(date, CHART_FORMAT_TOOLTIP_MAX);

  // every 5 minutes for 1 day
  // every 30 minutes for 5 day
  // every day for 1 month and above
  const getTooltipFormat = (date, timePeriod) => {
    switch (timePeriod) {
    case TIME_PERIOD_MAX:
    case TIME_PERIOD_ONE_YEAR:
    case TIME_PERIOD_FIVE_YEAR:
    case TIME_PERIOD_THREE_MONTH:
    case TIME_PERIOD_ONE_MONTH:
      return getTooltipFormatOneMonthOrLonger(date);
    default:
      return getTooltipFormatOneMonthOrLonger(date);
    }
  };
  return (
    <LineChart width={ CHART_WIDTH } height={ CHART_HEIGHT } data={ data } className='chart' >
      <CartesianGrid strokeDashArray='3 3' />
      <XAxis dataKey='date' tickFormatter={ date => dateFormat(date, CHART_DATE_FORMAT_X_AXIS) }
        minTickGap={ CHART_X_AXIS_MIN_TICK_GAP } />
      <YAxis dataKey='price' domain={ ['auto', 'auto'] } tickFormatter={ addCommas } />
      <Tooltip labelFormatter={ date => getTooltipFormat(date, chartTimePeriod) }
        formatter={ price => price.toFixed(VALUE_PRECISION_CURRENT_PRICE) } />
      <Line type='monotone' dataKey='price' dot={ false } stroke='red' isAnimationActive={ false } />
    </LineChart>
  );
};
Chart.propTypes = {
  data: PropTypes.array.isRequired,
  chartTimePeriod: PropTypes.string.isRequired
};
export default Chart;