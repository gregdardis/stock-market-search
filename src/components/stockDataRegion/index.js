import { connect } from 'react-redux';

import StockDataRegion from './StockDataRegion';

const mapStateToProps = state => ({
  hasData: Object.keys(state.dataItems).length !== 0 && state.dataItems.constructor === Object
});

export default connect(mapStateToProps)(StockDataRegion);