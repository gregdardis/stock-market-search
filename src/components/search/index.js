import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

export default SearchContainer;