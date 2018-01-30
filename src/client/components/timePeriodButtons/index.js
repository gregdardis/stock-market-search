import { connect } from 'react-redux';

import TimePeriodButtons from './TimePeriodButtons';
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
)(TimePeriodButtons);