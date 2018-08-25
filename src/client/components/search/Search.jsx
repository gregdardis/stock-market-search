import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './search.css';

const Search = ({
  clearSearchTerm,
  performSearch,
  searchText,
  updateSearchTerm
}) => {
  const focusEndOfInput = event => {
    const temp = event.target.value;
    event.target.value = '';
    event.target.value = temp;
  };
  const handleSearch = () => {
    if (searchText !== '') {
      performSearch(searchText);
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
        value={ searchText }
        onChange={ handleChange }
        onKeyDown={ handleKeyDown }
        placeholder='Stock symbol'
        autoFocus
        required
        onFocus={ focusEndOfInput }
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
  searchText: PropTypes.string.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
  clearSearchTerm: PropTypes.func.isRequired,
  performSearch: PropTypes.func.isRequired
};
export default Search;