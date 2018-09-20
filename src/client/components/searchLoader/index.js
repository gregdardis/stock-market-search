import { connect } from 'react-redux';

import SearchLoader from './SearchLoader';
import {
  isSearchedStockSelectedAndCached
} from '../../../utils/stockDataUtils/isSearchedStockSelectedAndCached';

const mapStateToProps = state => ({
  showingCachedStock: isSearchedStockSelectedAndCached(state)
});

export default connect(mapStateToProps)(SearchLoader);