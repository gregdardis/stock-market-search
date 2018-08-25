import { connect } from 'react-redux';

import Search from './search';
import { updateSearchTerm, clearSearchTerm, fetchStock } from '../../actions';

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