import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './search.css';

const Search = ({
  searchTerm,
  updateSearchTerm,
  clearSearchTerm,
  performSearch
}) => {
  const handleSearch = () => {
    if (searchTerm !== '') {
      performSearch(searchTerm);
    }
  };
  const handleChange = event => {
    updateSearchTerm(event.target.value);
  };
  const handleKeyDown = event => {
    const keyPressed = event.key;
    if (keyPressed === 'Enter') {
      handleSearch();
    } else if (keyPressed === 'Escape') {
      clearSearchTerm();
    }
  };
  return (
    <div className='search'>
      <input
        type='text'
        className='searchText'
        value={ searchTerm }
        onChange={ handleChange }
        onKeyDown={ handleKeyDown }
        placeholder='Stock symbol'
        required
      />
      <FontAwesome
        className='searchButton'
        name='search'
        onClick={ handleSearch }
      />
    </div>
  );
};
Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
  clearSearchTerm: PropTypes.func.isRequired,
  performSearch: PropTypes.func.isRequired
};
export default Search;