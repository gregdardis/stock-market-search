import { connect } from 'react-redux';

import Search from './search';
import { updateSearchTerm, clearSearchTerm, performSearch } from '../../actions';

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm(searchTerm) {
    dispatch(
      updateSearchTerm(searchTerm)
    );
  },
  clearSearchTerm() {
    dispatch(
      clearSearchTerm()
    );
  },
  handleSearch() {
    dispatch(
      performSearch()
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);