import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

import './search.css';

const Search = ({
  clearSearchError,
  clearSearchTerm,
  hasSearchError,
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
    clearSearchError();
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
        className={ classNames({
          searchText: true,
          searchError: hasSearchError
        }) }
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
  clearSearchError: PropTypes.func.isRequired,
  clearSearchTerm: PropTypes.func.isRequired,
  hasSearchError: PropTypes.bool.isRequired,
  performSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  updateSearchTerm: PropTypes.func.isRequired
};
export default Search;