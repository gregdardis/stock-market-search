import { connect } from 'react-redux';

import Chart from './Chart';
import {
  getStockDataForSelectedTimePeriod
} from '../../../utils/stockDataUtils/getStockDataForSelectedTimePeriod';
import { chartTimePeriodIndexSelector } from '../../selectors';

export const mapStateToProps = state => ({
  chartTimePeriodIndex: chartTimePeriodIndexSelector(state),
  data: getStockDataForSelectedTimePeriod(state)
});

export default connect(
  mapStateToProps
)(Chart);