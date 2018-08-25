import { connect } from 'react-redux';

import Search from './search';
import {
  clearSearchError,
  clearSearchTerm,
  fetchStock,
  updateSearchTerm
} from '../../actions';

const mapDispatchToProps = dispatch => ({
  updateSearchTerm(searchText) {
    dispatch(
      updateSearchTerm(searchText)
    );
  },
  clearSearchError() {
    dispatch(
      clearSearchError()
    );
  },
  clearSearchTerm() {
    dispatch(
      clearSearchTerm()
    );
  },
  performSearch(searchText) {
    dispatch(
      fetchStock(searchText)
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