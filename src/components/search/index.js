import { connect } from 'react-redux';

import Search from './search';
import { updateSearchTerm, clearSearchTerm, handleSearch } from '../../actions';

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
      handleSearch()
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);