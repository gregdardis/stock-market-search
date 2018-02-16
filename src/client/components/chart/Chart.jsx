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
  const getTooltipLabelFormatter = () =>
    CHART_META_DATA[chartTimePeriod].getTooltipLabelFormatter;

  const getMinTickGap = () =>
    CHART_META_DATA[chartTimePeriod].xAxisMinTickGap;

  const getXAxisTickFormatter = () =>
    CHART_META_DATA[chartTimePeriod].getXAxisTickFormatter;

  const getXAxisDataKey = () =>
    CHART_META_DATA[chartTimePeriod].xAxisDataKey;

  return (
    <LineChart width={ CHART_WIDTH } height={ CHART_HEIGHT } data={ data }
      className='chart' >
      <CartesianGrid strokeDashArray='3 3' />
      <XAxis dataKey={ getXAxisDataKey() }
        tickFormatter= { getXAxisTickFormatter() }
        minTickGap={ getMinTickGap() } />
      <YAxis dataKey='price' domain={ ['auto', 'auto'] }
        tickFormatter={ addCommas } />
      <Tooltip labelFormatter = { getTooltipLabelFormatter() }
        formatter={ price => price.toFixed(VALUE_PRECISION_CURRENT_PRICE) } />
      <Line type='monotone' dataKey='price' dot={ false } stroke='red'
        isAnimationActive={ false } />
    </LineChart>
  );
};
Chart.propTypes = {
  data: PropTypes.array.isRequired,
  chartTimePeriod: PropTypes.number.isRequired
};
export default Chart;