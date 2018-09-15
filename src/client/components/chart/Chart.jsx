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
import { CHART_DATA_KEY_Y_AXIS } from '../../../constants/formatting';
import { CHART_LINE_COLOR } from '../../../constants/colors';
import {
  formatAsPrice,
  getTooltipLabelFormatter,
  getXAxisDataKey,
  getXAxisMinTickGap,
  getXAxisTickFormatter
} from '../../../utils/chartUtils';

const Chart = ({
  chartTimePeriodIndex,
  data
}) => (
  <ResponsiveContainer height='65%' width='85%'>
    <LineChart data={ data }
      className='chart' >
      <CartesianGrid strokeDashArray='3 3' />
      <XAxis dataKey={ getXAxisDataKey(chartTimePeriodIndex) }
        tickFormatter={ getXAxisTickFormatter(chartTimePeriodIndex) }
        minTickGap={ getXAxisMinTickGap(chartTimePeriodIndex) } />
      <YAxis dataKey={ CHART_DATA_KEY_Y_AXIS } domain={ ['auto', 'auto'] }
        tickFormatter={ addCommas } />
      <Tooltip
        labelFormatter={ getTooltipLabelFormatter(chartTimePeriodIndex) }
        formatter={ price => formatAsPrice(price) }
        separator=': ' />
      <Line type='monotone' dataKey={ CHART_DATA_KEY_Y_AXIS } dot={ false }
        stroke={ CHART_LINE_COLOR } isAnimationActive={ false } />
    </LineChart>
  </ResponsiveContainer>
);
Chart.propTypes = {
  chartTimePeriodIndex: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired
};
export default Chart;