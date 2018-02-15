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
  CHART_META_DATA,
  CHART_HEIGHT,
  CHART_WIDTH,
  INDEX_ONE_MONTH,
  VALUE_PRECISION_CURRENT_PRICE
} from '../../../constants';

const Chart = ({
  data,
  chartTimePeriod
}) => {
  const getMinTickGap = () =>
    CHART_META_DATA[chartTimePeriod].xAxisMinTickGap;

  const getTooltipFormat = () =>
    CHART_META_DATA[chartTimePeriod].tooltipFormat;

  const getXAxisFormat = () =>
    CHART_META_DATA[chartTimePeriod].xAxisFormat;
// format time on tooltip as Time: 9:30 AM
// make getTooltipFormat and getXAxisFormat return the right things in CHART_META_DATA
// Deal with min xAxisMinTickGap properly for 1 day
// Figure out how to give getStockDataForTimePeriod the oneDayStockData without passing it state?
// Better logic in chart/index.js for if timePeriodIndex < 2 (and use the constant there)
// 5 day data into state
  return (
    <LineChart width={ CHART_WIDTH } height={ CHART_HEIGHT } data={ data } className='chart' >
      <CartesianGrid strokeDashArray='3 3' />
      <XAxis dataKey={ chartTimePeriod < INDEX_ONE_MONTH ? 'time' : 'date' }
        tickFormatter={ chartTimePeriod < INDEX_ONE_MONTH
          ? time => time : date => dateFormat(date, getXAxisFormat()) }
        minTickGap={ getMinTickGap() } />
      <YAxis dataKey='price' domain={ ['auto', 'auto'] } tickFormatter={ addCommas } />
      <Tooltip labelFormatter={ chartTimePeriod < INDEX_ONE_MONTH ? time => time : date => dateFormat(date, getTooltipFormat()) }
        formatter={ price => price.toFixed(VALUE_PRECISION_CURRENT_PRICE) } />
      <Line type='monotone' dataKey='price' dot={ false } stroke='red' isAnimationActive={ false } />
    </LineChart>
  );
};
Chart.propTypes = {
  data: PropTypes.array.isRequired,
  chartTimePeriod: PropTypes.number.isRequired
};
export default Chart;