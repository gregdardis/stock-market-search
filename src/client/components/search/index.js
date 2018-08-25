import { connect } from 'react-redux';

import Search from './search';
import {
  clearSearchError,
  clearSearchTerm,
  fetchStock,
  updateSearchTerm
} from '../../actions';

const mapDispatchToProps = dispatch => ({
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
  },
  updateSearchTerm(searchText) {
    dispatch(
      updateSearchTerm(searchText)
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