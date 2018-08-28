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
import numeral from 'numeral';

import { addCommas } from '../../../utils/formatting/numberFormatting';
import './chart.css';
import {
  CHART_DATA_KEY_Y_AXIS,
  CHART_META_DATA,
  NUMBER_FORMAT_PRICE
} from '../../../constants/formatting';
import { CHART_LINE_COLOR } from '../../../constants/colors';

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

  const formatAsPrice = value =>
    numeral(value).format(NUMBER_FORMAT_PRICE);

  return (
    <ResponsiveContainer height='65%' width='85%'>
      <LineChart data={ data }
        className='chart' >
        <CartesianGrid strokeDashArray='3 3' />
        <XAxis dataKey={ getXAxisDataKey() }
          tickFormatter={ getXAxisTickFormatter() }
          minTickGap={ getXAxisMinTickGap() } />
        <YAxis dataKey={ CHART_DATA_KEY_Y_AXIS } domain={ ['auto', 'auto'] }
          tickFormatter={ addCommas } />
        <Tooltip
          labelFormatter={ getTooltipLabelFormatter() }
          formatter={ price => formatAsPrice(price) }
          separator=': ' />
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