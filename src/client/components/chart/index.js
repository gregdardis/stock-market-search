import { connect } from 'react-redux';

import Chart from './Chart';
import { getSelectedStockValueForKey } from '../../../utils/stateGetters';
import {
  CHART_META_DATA,
  INDEX_ONE_MONTH
} from '../../../constants';

const getStockDataKey = timePeriodIndex =>
  timePeriodIndex < INDEX_ONE_MONTH ? 'oneDayStockData' : 'maxStockData';

const getStockDataForTimePeriod = state => {
  const timePeriodIndex = state.chartTimePeriod;
  const stockDataKey = getStockDataKey(timePeriodIndex);
  const stockData = getSelectedStockValueForKey(state, stockDataKey);
  return CHART_META_DATA[
    timePeriodIndex
  ].getStockDataForTimePeriod(stockData);
};

const mapStateToProps = state => ({
  data: getStockDataForTimePeriod(state),
  chartTimePeriod: state.chartTimePeriod
});

export default connect(
  mapStateToProps
)(Chart);