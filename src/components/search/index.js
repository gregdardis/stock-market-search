import { connect } from 'react-redux';

import Search from './search';

// ACTION CREATORS
const updateSearchTerm = searchTerm => {
  return {
    type: 'UPDATE_SEARCH_TERM',
    searchTerm
  };
};

const clearSearchTerm = () => {
  return {
    type: 'CLEAR_SEARCH_TERM'
  };
};

// takes the state from the redux store
// and returns the props, calculated from it
const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: searchTerm => {
    dispatch(
      updateSearchTerm(searchTerm)
    );
  },
  clearSearchTerm: () => {
    dispatch(
      clearSearchTerm()
    );
  }
});

// connect is a function that returns another function
// connect uses mapStateToProps and mapDispatchToProps and
// takes Search as an argument and uses all of this to
// generate a container for Search
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);