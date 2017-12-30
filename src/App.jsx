import React from 'react';
import PropTypes from 'prop-types';

import Search from './components/search';

const App = ({
  searchTerm,
  updateSearchTerm,
  clearSearchTerm
}) => (
  <div>
    <Search
      searchTerm={ searchTerm }
      updateSearchTerm={ updateSearchTerm }
      clearSearchTerm={ clearSearchTerm }
    />
  </div>
);

App.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
  clearSearchTerm: PropTypes.func.isRequired
};

export default App;