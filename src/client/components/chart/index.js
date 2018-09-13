import { connect } from 'react-redux';

import Chart from './Chart';
import { getSelectedStockValueForKey } from '../../../utils/stateGetters';
import { CHART_META_DATA } from '../../../constants/formatting';
import { getStockDataKey } from '../../../utils/chartUtils';

const getStockDataForSelectedTimePeriod = state => {
  const selectedTimePeriodIndex = state.chartTimePeriodIndex;
  const stockDataKey = getStockDataKey(selectedTimePeriodIndex);
  const stockData = getSelectedStockValueForKey(state, stockDataKey);
  return CHART_META_DATA[
    selectedTimePeriodIndex
  ].getStockDataForTimePeriod(stockData);
};

const mapStateToProps = state => ({
  chartTimePeriodIndex: state.chartTimePeriodIndex,
  data: getStockDataForSelectedTimePeriod(state)
});

export default connect(
  mapStateToProps
)(Chart);