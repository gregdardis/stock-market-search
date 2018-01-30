import { connect } from 'react-redux';

import Chart from './Chart';
import { getSelectedStockValueForKey } from '../../../utils/stateGetters';
import {
  TIME_PERIOD_FIVE_DAY,
  TIME_PERIOD_FIVE_YEAR,
  TIME_PERIOD_MAX,
  TIME_PERIOD_ONE_DAY,
  TIME_PERIOD_ONE_MONTH,
  TIME_PERIOD_ONE_YEAR,
  TIME_PERIOD_THREE_MONTH
} from '../../../constants';

const getStockDataForTimePeriod = state => {
  const timePeriod = state.chartTimePeriod;
  const maxStockData = getSelectedStockValueForKey(state, 'maxStockData');
  switch (timePeriod) {
  case TIME_PERIOD_MAX:
    return maxStockData;
  default:
    return maxStockData;
  }
};

const mapStateToProps = state => ({
  // data: getSelectedStockValueForKey(state, 'maxStockData')
  data: getStockDataForTimePeriod(state)
});

export default connect(
  mapStateToProps
)(Chart);