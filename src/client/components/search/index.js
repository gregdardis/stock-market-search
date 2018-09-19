import { connect } from 'react-redux';

import Search from './Search';
import {
  clearSearchError,
  clearSearchText,
  fetchStock,
  updateSearchText,
  setStockFromMemCache
} from '../../actions';
import {
  searchCurrentTextSelector,
  stocksSelector
} from '../../../client/selectors';

const mapDispatchToProps = dispatch => ({
  clearError() {
    dispatch(
      clearSearchError()
    );
  },
  clearText() {
    dispatch(
      clearSearchText()
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
  },
  updateText(searchText) {
    dispatch(
      updateSearchText(searchText)
    );
  }
});

const mapStateToProps = state => ({
  text: searchCurrentTextSelector(state),
  stocks: stocksSelector(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);