import { connect } from 'react-redux';

import Home from './Home';

// const isStockLoading = state => {
//   const { search, stocks } = state;
//   const { lastSearch } = search;
//   if (lastSearch && stocks[lastSearch]) {
//     return stocks[lastSearch].isFetching;
//   }
//   return false;
// };

const isStockLoading = state =>
  state.isFetching;

const mapStateToProps = state => ({
  loading: isStockLoading(state),
  searchError: state.searchError
});

export default connect(mapStateToProps)(Home);