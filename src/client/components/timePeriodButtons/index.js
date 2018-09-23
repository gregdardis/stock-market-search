import { connect } from 'react-redux';

import TimePeriodButtons from './TimePeriodButtons';
import { updateChartTimePeriodIndex } from '../../actions';
import { chartTimePeriodIndexSelector } from '../../selectors';

const actions = { updateChartTimePeriodIndex };

export const mapStateToProps = state => ({
  chartTimePeriodIndex: chartTimePeriodIndexSelector(state)
});

export default connect(
  mapStateToProps,
  actions
)(TimePeriodButtons);