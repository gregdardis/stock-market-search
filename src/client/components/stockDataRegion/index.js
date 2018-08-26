import { connect } from 'react-redux';

import StockDataRegion from './StockDataRegion';

const mapStateToProps = state => ({
  showNoDataMessage: !state.fetching && !state.selectedStock,
  showResults: !!state.selectedStock
});

export default connect(mapStateToProps)(StockDataRegion);