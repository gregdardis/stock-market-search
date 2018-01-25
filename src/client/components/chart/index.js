import { connect } from 'react-redux';

import Chart from './Chart';
import { getSelectedStockValueForKey } from '../../../utils/stateGetters';


const mapStateToProps = state => ({
  data: getSelectedStockValueForKey(state, 'oneYearData')
});

export default connect(
  mapStateToProps
)(Chart);