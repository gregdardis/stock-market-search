import { connect } from 'react-redux';

import { isStockLoading } from '../../../utils/stateGetters';
import SearchLoader from './SearchLoader';

function searchedStockSelected(state) {
  const { search, stocks } = state;
  const { lastSearch } = search;
  if (lastSearch && stocks[lastSearch].symbol) {
    return stocks[lastSearch].symbol === state.selectedStock;
  }
  return false;
}

const mapStateToProps = state => {
  const loading = isStockLoading(state);
  return {
    showingCachedStock: loading && searchedStockSelected(state)
  };
};

export default connect(mapStateToProps)(SearchLoader);