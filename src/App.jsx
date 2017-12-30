import React from 'react';
import PropTypes from 'prop-types';

import Search from './components/search';

const App = (props) => (
  <div>
    <Search
      searchTerm={ props.searchTerm }
      updateSearchTerm={ props.updateSearchTerm }
      clearSearchTerm={ props.clearSearchTerm }
    />
  </div>
);

App.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
  clearSearchTerm: PropTypes.func.isRequired
};

export default App;