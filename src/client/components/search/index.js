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
  stocksSelector,
  searchErrorSelector
} from '../../../client/selectors';

const actions = {
  clearSearchError,
  clearSearchText,
  fetchStock,
  setStockFromMemCache,
  updateSearchText
};

export const mapStateToProps = state => ({
  text: searchCurrentTextSelector(state),
  hasError: !!searchErrorSelector(state),
  stocks: stocksSelector(state)
});

export default connect(
  mapStateToProps,
  actions
)(Search);