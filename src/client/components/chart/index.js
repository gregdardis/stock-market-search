import { connect } from 'react-redux';

import Chart from './Chart';
import {
  getStockDataForSelectedTimePeriod
} from '../../../utils/stockDataUtils/getStockDataForSelectedTimePeriod';

export const mapStateToProps = state => ({
  chartTimePeriodIndex: state.chartTimePeriodIndex,
  data: getStockDataForSelectedTimePeriod(state)
});

export default connect(
  mapStateToProps
)(Chart);