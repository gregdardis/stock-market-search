import { connect } from 'react-redux';

import SearchLoader from './SearchLoader';

function searchedStockSelected(state) {
  const { fetching, stocks } = state;
  if (fetching && stocks[fetching]) {
    return !!stocks[fetching].symbol;
  }
  return false;
}

const mapStateToProps = state => {
  return {
    showingCachedStock: searchedStockSelected(state)
  };
};

export default connect(mapStateToProps)(SearchLoader);