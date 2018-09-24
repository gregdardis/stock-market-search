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
  searchErrorSelector,
  stocksSelector
} from '../../../client/selectors';

const actions = {
  clearSearchError,
  clearSearchText,
  fetchStock,
  setStockFromMemCache,
  updateSearchText
};

export const mapStateToProps = state => ({
  hasError: !!searchErrorSelector(state),
  stocks: stocksSelector(state),
  text: searchCurrentTextSelector(state)
});

export default connect(
  mapStateToProps,
  actions
)(Search);