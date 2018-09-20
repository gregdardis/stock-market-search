import { connect } from 'react-redux';

import StockDataRegion from './StockDataRegion';
import { fetchingSelector } from '../../selectors';

export const mapStateToProps = state => ({
  showNoDataMessage: !state.fetching && !state.selectedStock,
  showResults: !!state.selectedStock
});

export default connect(mapStateToProps)(StockDataRegion);