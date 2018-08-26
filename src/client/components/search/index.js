import { connect } from 'react-redux';

import Search from './search';
import {
  clearSearchTerm,
  fetchStock,
  setStockFromMemCache,
  updateSearchTerm
} from '../../actions';

const mapDispatchToProps = dispatch => ({
  updateSearchTerm(searchText) {
    dispatch(
      updateSearchTerm(searchText)
    );
  },
  clearSearchTerm() {
    dispatch(
      clearSearchTerm()
    );
  },
  performSearch(searchText, stocks) {
    if (stocks[searchText]) {
      dispatch(
        setStockFromMemCache(searchText)
      );
    }
    dispatch(
      fetchStock(searchText)
    );
  }
});

const mapStateToProps = state => ({
  searchText: state.search.currentSearchText,
  stocks: state.stocks
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);