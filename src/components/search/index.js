// import Search from './Search';

// // TODO: make index for each component the container if required

// export default Search;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Search from './search';

/* Contains all methods and non presentational parts of Search component */
class SearchContainer extends Component {
  componentDidMount() {
    const store = this.props.store;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const store = this.props.store;
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
SearchContainer.propTypes = {
  store: PropTypes.object.isRequired
};

export default SearchContainer;