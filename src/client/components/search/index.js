import { connect } from 'react-redux';

import Search from './search';
import {
  clearSearchError,
  clearSearchTerm,
  fetchStock,
  updateSearchTerm
} from '../../actions';

const mapDispatchToProps = dispatch => ({
  updateSearchTerm(searchTerm) {
    dispatch(
      updateSearchTerm(searchTerm)
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
  performSearch(searchTerm) {
    dispatch(
      fetchStock(searchTerm)
    );
  }
});

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);