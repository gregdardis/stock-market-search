import { connect } from 'react-redux';

import TimePeriodButtons from './TimePeriodButtons';
import { updateChartTimePeriod } from '../../actions';

const mapDispatchToProps = dispatch => ({
  updateChartTimePeriod(index) {
    dispatch(
      updateChartTimePeriod(index)
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