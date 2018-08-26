import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './search.css';

const Search = ({
  clearSearchTerm,
  performSearch,
  searchText,
  stocks = {},
  updateSearchTerm
}) => {
  const focusEndOfInput = event => {
    const temp = event.target.value;
    event.target.value = '';
    event.target.value = temp;
  };
  const handleSearch = () => {
    if (searchText !== '') {
      performSearch(searchText, stocks);
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
        spellCheck="false"
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
  clearSearchTerm: PropTypes.func.isRequired,
  performSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  stocks: PropTypes.object,
  updateSearchTerm: PropTypes.func.isRequired
};
export default Search;