import { connect } from 'react-redux';

import StockDataRegion from './StockDataRegion';

const mapStateToProps = state => ({
  hasData: state.selectedStock !== ''
});

export default connect(mapStateToProps)(StockDataRegion);