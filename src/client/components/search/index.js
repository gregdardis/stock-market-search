import { connect } from 'react-redux';

import Search from './Search';
import {
  clearSearchError,
  clearSearchText,
  fetchStock,
  setStockFromMemCache,
  updateSearchText
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
  fetchStock(searchText) {
    dispatch(
      fetchStock(searchText)
    );
  },
  setStockFromMemCache(searchText) {
    dispatch(
      setStockFromMemCache(searchText)
    );
  },
  updateText(searchText) {
    dispatch(
      updateSearchText(searchText)
    );
  }
});

export const mapStateToProps = state => ({
  text: searchCurrentTextSelector(state),
  stocks: stocksSelector(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);