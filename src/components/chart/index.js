import { connect } from 'react-redux';

import Chart from './Chart';
import { getSelectedStockValueForKey } from '../../utils/stateGetters';

// const testData = [
//   { date: 'TODAY', price: 400 },
//   { date: 'TOMORROW', price: 3000 },
//   { date: 'THE NEXT DAY', price: 16000 }
// ];

const mapStateToProps = state => ({
  data: getSelectedStockValueForKey(state, 'oneYearData')
});

export default connect(
  mapStateToProps
)(Chart);