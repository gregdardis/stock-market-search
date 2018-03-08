import React from 'react';
import PropTypes from 'prop-types';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import { addCommas } from '../../../utils/formatting/numberFormatting';
import './chart.css';
import {
  CHART_DATA_KEY_Y_AXIS,
  CHART_LINE_COLOR,
  CHART_META_DATA,
  VALUE_PRECISION_CURRENT_PRICE
} from '../../../constants';

const Chart = ({
  chartTimePeriodIndex,
  data
}) => {
  const getTooltipLabelFormatter = () =>
    CHART_META_DATA[chartTimePeriodIndex].getTooltipLabelFormatter;

  const getXAxisDataKey = () =>
    CHART_META_DATA[chartTimePeriodIndex].xAxisDataKey;

  const getXAxisMinTickGap = () =>
    CHART_META_DATA[chartTimePeriodIndex].xAxisMinTickGap;

  const getXAxisTickFormatter = () =>
    CHART_META_DATA[chartTimePeriodIndex].getXAxisTickFormatter;

  return (
    <ResponsiveContainer height='65%' width='85%'>
      <LineChart data={ data }
        className='chart' >
        <CartesianGrid strokeDashArray='3 3' />
        <XAxis dataKey={ getXAxisDataKey() }
          tickFormatter= { getXAxisTickFormatter() }
          minTickGap={ getXAxisMinTickGap() } />
        <YAxis dataKey={ CHART_DATA_KEY_Y_AXIS } domain={ ['auto', 'auto'] }
          tickFormatter={ addCommas } />
        <Tooltip labelFormatter = { getTooltipLabelFormatter() }
          formatter={ price => price.toFixed(VALUE_PRECISION_CURRENT_PRICE) } />
        <Line type='monotone' dataKey={ CHART_DATA_KEY_Y_AXIS } dot={ false }
          stroke={ CHART_LINE_COLOR } isAnimationActive={ false } />
      </LineChart>
    </ResponsiveContainer>
  );
};
Chart.propTypes = {
  chartTimePeriodIndex: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired
};
export default Chart;