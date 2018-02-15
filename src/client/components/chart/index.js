import { connect } from 'react-redux';

import Chart from './Chart';
import { getSelectedStockValueForKey } from '../../../utils/stateGetters';
import {
  CHART_META_DATA,
  INDEX_ONE_MONTH
} from '../../../constants';

const getStockDataForTimePeriod = state => {
  const timePeriodIndex = state.chartTimePeriod;
  const maxStockData = getSelectedStockValueForKey(state, 'maxStockData');
  const oneDayStockData = getSelectedStockValueForKey(state, 'oneDayStockData')
  if (timePeriodIndex < INDEX_ONE_MONTH) {
    return CHART_META_DATA[
      timePeriodIndex
    ].getStockDataForTimePeriod(oneDayStockData);
  }
  return CHART_META_DATA[
    timePeriodIndex
  ].getStockDataForTimePeriod(maxStockData);
};

const mapStateToProps = state => ({
  data: getStockDataForTimePeriod(state),
  chartTimePeriod: state.chartTimePeriod
});

export default connect(
  mapStateToProps
)(Chart);