import { connect } from 'react-redux';

import Home from './Home';

function isStockLoading(state) {
  const { search, stocks } = state;
  const { lastSearch } = search;
  if (lastSearch && stocks[lastSearch]) {
    return stocks[lastSearch].isFetching;
  }
  return false;
}

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
    loading,
    showingCachedStock: loading && searchedStockSelected(state)
  };
};

export default connect(mapStateToProps)(Home);