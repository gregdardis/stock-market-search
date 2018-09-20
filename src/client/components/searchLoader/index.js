import { connect } from 'react-redux';

import SearchLoader from './SearchLoader';

function isSearchedStockSelected(state) {
  const { fetching, stocks } = state;
  if (fetching && stocks[fetching]) {
    return stocks[fetching].symbol === state.selectedStock;
  }
  return false;
}

const mapStateToProps = state => ({
  showingCachedStock: isSearchedStockSelected(state)
});

export default connect(mapStateToProps)(SearchLoader);