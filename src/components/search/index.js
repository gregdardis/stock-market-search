import { connect } from 'react-redux';

import Search from './search';
import { updateSearchTerm, clearSearchTerm, fetchStock } from '../../actions';

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
  performSearch(searchTerm) {
    dispatch(
      fetchStock(searchTerm)
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);