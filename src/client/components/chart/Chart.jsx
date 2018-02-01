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
  CHART_FORMAT_TOOLTIP_ONE_MONTH_OR_LONGER,
  CHART_FORMAT_X_AXIS_FIVE_DAY,
  CHART_FORMAT_X_AXIS_FIVE_YEAR,
  CHART_FORMAT_X_AXIS_MAX,
  CHART_FORMAT_X_AXIS_ONE_DAY,
  CHART_FORMAT_X_AXIS_ONE_MONTH,
  CHART_FORMAT_X_AXIS_ONE_YEAR,
  CHART_FORMAT_X_AXIS_THREE_MONTH,
  CHART_HEIGHT,
  CHART_WIDTH,
  CHART_X_AXIS_MIN_TICK_GAP_FIVE_DAY,
  CHART_X_AXIS_MIN_TICK_GAP_FIVE_YEAR,
  CHART_X_AXIS_MIN_TICK_GAP_MAX,
  CHART_X_AXIS_MIN_TICK_GAP_ONE_DAY,
  CHART_X_AXIS_MIN_TICK_GAP_ONE_MONTH,
  CHART_X_AXIS_MIN_TICK_GAP_ONE_YEAR,
  CHART_X_AXIS_MIN_TICK_GAP_THREE_MONTH,
  TIME_PERIOD_FIVE_DAY,
  TIME_PERIOD_FIVE_YEAR,
  TIME_PERIOD_MAX,
  TIME_PERIOD_ONE_DAY,
  TIME_PERIOD_ONE_MONTH,
  TIME_PERIOD_ONE_YEAR,
  TIME_PERIOD_THREE_MONTH,
  VALUE_PRECISION_CURRENT_PRICE
} from '../../../constants';

const Chart = ({
  data,
  chartTimePeriod
}) => {
  const getMinTickGap = () => {
    switch (chartTimePeriod) {
    case TIME_PERIOD_FIVE_DAY:
      return CHART_X_AXIS_MIN_TICK_GAP_FIVE_DAY;
    case TIME_PERIOD_FIVE_YEAR:
      return CHART_X_AXIS_MIN_TICK_GAP_FIVE_YEAR;
    case TIME_PERIOD_MAX:
      return CHART_X_AXIS_MIN_TICK_GAP_MAX;
    case TIME_PERIOD_ONE_DAY:
      return CHART_X_AXIS_MIN_TICK_GAP_ONE_DAY;
    case TIME_PERIOD_ONE_MONTH:
      return CHART_X_AXIS_MIN_TICK_GAP_ONE_MONTH;
    case TIME_PERIOD_ONE_YEAR:
      return CHART_X_AXIS_MIN_TICK_GAP_ONE_YEAR;
    case TIME_PERIOD_THREE_MONTH:
      return CHART_X_AXIS_MIN_TICK_GAP_THREE_MONTH;
    default:
      return CHART_X_AXIS_MIN_TICK_GAP_ONE_YEAR;
    }
  };

  const getTooltipFormatOneMonthOrLonger = date =>
    dateFormat(date, CHART_FORMAT_TOOLTIP_ONE_MONTH_OR_LONGER);

  // TODO: UPDATE THIS METHOD ONCE WE HAVE INFO BY EVERY 5 MIN
  // every 5 minutes for 1 day
  // every 30 minutes for 5 day
  // every day for 1 month and above
  const getTooltipFormat = date => {
    switch (chartTimePeriod) {
    case TIME_PERIOD_FIVE_YEAR:
    case TIME_PERIOD_MAX:
    case TIME_PERIOD_ONE_MONTH:
    case TIME_PERIOD_ONE_YEAR:
    case TIME_PERIOD_THREE_MONTH:
      return getTooltipFormatOneMonthOrLonger(date);
    case TIME_PERIOD_FIVE_DAY:
    case TIME_PERIOD_ONE_DAY:
    default:
      return getTooltipFormatOneMonthOrLonger(date);
    }
  };

  // TODO: X axis should have what day it is for 5 day, and 2 hour intervals for 1 day
  const getXAxisFormat = date => {
    switch (chartTimePeriod) {
    case TIME_PERIOD_FIVE_DAY:
      return dateFormat(date, CHART_FORMAT_X_AXIS_FIVE_DAY);
    case TIME_PERIOD_FIVE_YEAR:
      return dateFormat(date, CHART_FORMAT_X_AXIS_FIVE_YEAR);
    case TIME_PERIOD_MAX:
      return dateFormat(date, CHART_FORMAT_X_AXIS_MAX);
    case TIME_PERIOD_ONE_DAY:
      return dateFormat(date, CHART_FORMAT_X_AXIS_ONE_DAY);
    case TIME_PERIOD_ONE_MONTH:
      return dateFormat(date, CHART_FORMAT_X_AXIS_ONE_MONTH);
    case TIME_PERIOD_ONE_YEAR:
      return dateFormat(date, CHART_FORMAT_X_AXIS_ONE_YEAR);
    case TIME_PERIOD_THREE_MONTH:
      return dateFormat(date, CHART_FORMAT_X_AXIS_THREE_MONTH);
    default:
      return dateFormat(date, CHART_FORMAT_X_AXIS_ONE_YEAR);
    }
  };

  return (
    <LineChart width={ CHART_WIDTH } height={ CHART_HEIGHT } data={ data } className='chart' >
      <CartesianGrid strokeDashArray='3 3' />
      <XAxis dataKey='date' tickFormatter={ date => getXAxisFormat(date) }
        minTickGap={ getMinTickGap() } />
      <YAxis dataKey='price' domain={ ['auto', 'auto'] } tickFormatter={ addCommas } />
      <Tooltip labelFormatter={ date => getTooltipFormat(date) }
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