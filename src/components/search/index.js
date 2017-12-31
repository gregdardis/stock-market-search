import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from './search';

/* Contains all methods and non presentational parts of Search component */
class SearchContainer extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    return (
      <Search
        searchTerm={ store.getState().searchTerm }
        updateSearchTerm={ searchTerm =>
          store.dispatch({
            type: 'UPDATE_SEARCH_TERM',
            searchTerm
          })
        }
        clearSearchTerm={ () =>
          store.dispatch({
            type: 'CLEAR_SEARCH_TERM'
          })
        }
      />
    );
  }
}
SearchContainer.contextTypes = {
  store: PropTypes.object
};

// takes the state from the redux store
// and returns the props, calculated from it
const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: searchTerm => {
    dispatch({
      type: 'UPDATE_SEARCH_TERM',
      searchTerm: searchTerm
    });
  },
  clearSearchTerm: () => {
    dispatch({
      type: 'CLEAR_SEARCH_TERM'
    });
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

// export default SearchContainer;