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
  handleSearch(searchTerm) {
    dispatch(
      performSearch(searchTerm)
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);