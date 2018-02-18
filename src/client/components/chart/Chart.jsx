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

import { addCommas } from '../../../utils/formatting/numberFormatting';
import './chart.css';
import {
  CHART_DATA_KEY_Y_AXIS,
  CHART_META_DATA,
  CHART_HEIGHT,
  CHART_LINE_COLOR,
  CHART_WIDTH,
  VALUE_PRECISION_CURRENT_PRICE
} from '../../../constants';

const Chart = ({
  chartTimePeriod,
  data
}) => {
  const getTooltipLabelFormatter = () =>
    CHART_META_DATA[chartTimePeriod].getTooltipLabelFormatter;

  const getXAxisDataKey = () =>
    CHART_META_DATA[chartTimePeriod].xAxisDataKey;

  const getXAxisMinTickGap = () =>
    CHART_META_DATA[chartTimePeriod].xAxisMinTickGap;

  const getXAxisTickFormatter = () =>
    CHART_META_DATA[chartTimePeriod].getXAxisTickFormatter;
  return (
    <LineChart width={ CHART_WIDTH } height={ CHART_HEIGHT } data={ data }
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
  );
};
Chart.propTypes = {
  data: PropTypes.array.isRequired,
  chartTimePeriod: PropTypes.number.isRequired
};
export default Chart;