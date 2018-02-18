import { connect } from 'react-redux';

import Chart from './Chart';
import { getSelectedStockValueForKey } from '../../../utils/stateGetters';
import {
  CHART_META_DATA
} from '../../../constants';

const getStockDataKey = timePeriodIndex =>
  CHART_META_DATA[timePeriodIndex].stockDataKey;

const getStockDataForTimePeriod = state => {
  const timePeriodIndex = state.chartTimePeriodIndex;
  const stockDataKey = getStockDataKey(timePeriodIndex);
  const stockData = getSelectedStockValueForKey(state, stockDataKey);
  return CHART_META_DATA[
    timePeriodIndex
  ].getStockDataForTimePeriod(stockData);
};

const mapStateToProps = state => ({
  chartTimePeriodIndex: state.chartTimePeriodIndex,
  data: getStockDataForTimePeriod(state)
});

export default connect(
  mapStateToProps
)(Chart);