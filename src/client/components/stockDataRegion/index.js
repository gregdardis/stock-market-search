import { connect } from 'react-redux';

import StockDataRegion from './StockDataRegion';
import {
  fetchingSelector,
  selectedStockSymbolSelector
} from '../../selectors';

export const mapStateToProps = state => ({
  showNoDataMessage: !fetchingSelector(state)
    && !selectedStockSymbolSelector(state),
  showResults: !!selectedStockSymbolSelector(state)
});

export default connect(mapStateToProps)(StockDataRegion);