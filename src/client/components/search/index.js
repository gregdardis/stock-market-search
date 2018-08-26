import { connect } from 'react-redux';

import Search from './search';
import {
  clearSearchError,
  clearSearchText,
  fetchStock,
  updateSearchText
} from '../../actions';

const mapDispatchToProps = dispatch => ({
  clearSearchError() {
    dispatch(
      clearSearchError()
    );
  },
  clearSearchText() {
    dispatch(
      clearSearchText()
    );
  },
  performSearch(searchText) {
    dispatch(
      fetchStock(searchText)
    );
  },
  updateSearchText(searchText) {
    dispatch(
      updateSearchText(searchText)
    );
  }
});

const mapStateToProps = state => ({
  searchText: state.search.currentSearchText
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);