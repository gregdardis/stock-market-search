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

export default connect(
  null,
  mapDispatchToProps
)(TimePeriodPicker);