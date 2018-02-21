import { connect } from 'react-redux';

import TimePeriodButtons from './TimePeriodButtons';
import { updateChartTimePeriodIndex } from '../../actions';

const mapDispatchToProps = dispatch => ({
  updateChartTimePeriodIndex(index) {
    dispatch(
      updateChartTimePeriodIndex(index)
    );
  }
});

const mapStateToProps = state => ({
  chartTimePeriodIndex: state.chartTimePeriodIndex
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimePeriodButtons);