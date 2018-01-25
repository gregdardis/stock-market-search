import { connect } from 'react-redux';

import TimePeriodPicker from './TimePeriodPicker';
import { updateChartTimePeriod } from '../../actions';

const mapDispatchToProps = dispatch => ({
  updateChartTimePeriod(timePeriod) {
    dispatch(
      updateChartTimePeriod(timePeriod)
    );
  }
});

const mapStateToProps = state => ({
  chartTimePeriod: state.chartTimePeriod
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimePeriodPicker);