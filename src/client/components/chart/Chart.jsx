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
  CHART_FORMAT_X_AXIS_MAX,
  CHART_FORMAT_X_AXIS_ONE_YEAR,
  CHART_X_AXIS_MAX_MIN_TICK_GAP,
  CHART_X_AXIS_ONE_YEAR_MIN_TICK_GAP,
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
    case TIME_PERIOD_MAX:
      return CHART_X_AXIS_MAX_MIN_TICK_GAP;
    case TIME_PERIOD_ONE_YEAR:
    case TIME_PERIOD_FIVE_YEAR:
    case TIME_PERIOD_THREE_MONTH:
    case TIME_PERIOD_ONE_MONTH:
    case TIME_PERIOD_FIVE_DAY:
    case TIME_PERIOD_ONE_DAY:
    default:
      return CHART_X_AXIS_ONE_YEAR_MIN_TICK_GAP;
    }
  };

  const getTooltipFormatOneMonthOrLonger = date =>
    dateFormat(date, CHART_FORMAT_TOOLTIP_MAX);

  // TODO: UPDATE THIS METHOD ONCE WE HAVE INFO BY EVERY 5 MIN
  // every 5 minutes for 1 day
  // every 30 minutes for 5 day
  // every day for 1 month and above
  const getTooltipFormat = date => {
    switch (chartTimePeriod) {
    case TIME_PERIOD_MAX:
    case TIME_PERIOD_ONE_YEAR:
    case TIME_PERIOD_FIVE_YEAR:
    case TIME_PERIOD_THREE_MONTH:
    case TIME_PERIOD_ONE_MONTH:
      return getTooltipFormatOneMonthOrLonger(date);
    case TIME_PERIOD_FIVE_DAY:
    case TIME_PERIOD_ONE_DAY:
    default:
      return getTooltipFormatOneMonthOrLonger(date);
    }
  };

  // format by a certain number of years depending on how far back the data goes for max
  const getXAxisFormat = date => {
    switch (chartTimePeriod) {
    case TIME_PERIOD_MAX:
    case TIME_PERIOD_FIVE_YEAR:
      return dateFormat(date, CHART_FORMAT_X_AXIS_MAX);
    case TIME_PERIOD_ONE_YEAR:
    case TIME_PERIOD_THREE_MONTH:
    case TIME_PERIOD_ONE_MONTH:
    case TIME_PERIOD_FIVE_DAY:
    case TIME_PERIOD_ONE_DAY:
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