import { connect } from 'react-redux';

import TimePeriodButtons from './TimePeriodButtons';
import { updateChartTimePeriodIndex } from '../../actions';
import { chartTimePeriodIndexSelector } from '../../selectors';

const mapDispatchToProps = dispatch => ({
  updateChartTimePeriodIndex(index) {
    dispatch(
      updateChartTimePeriodIndex(index)
    );
  }
});

export const mapStateToProps = state => ({
  chartTimePeriodIndex: chartTimePeriodIndexSelector(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimePeriodButtons);