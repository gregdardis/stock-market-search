import { connect } from 'react-redux';

import Search from './search';
import {
  clearSearchError,
  clearSearchText,
  fetchStock,
  updateSearchText
} from '../../actions';

const mapDispatchToProps = dispatch => ({
  clearError() {
    dispatch(
      clearSearchError()
    );
  },
  clearText() {
    dispatch(
      clearSearchText()
    );
  },
  performSearch(searchText) {
    dispatch(
      fetchStock(searchText)
    );
  },
  updateText(searchText) {
    dispatch(
      updateSearchText(searchText)
    );
  }
});

const mapStateToProps = state => ({
  text: state.search.currentText
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);