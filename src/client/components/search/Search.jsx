import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

import './search.css';

const Search = ({
  clearSearchError,
  clearSearchText,
  hasError,
  performSearch,
  searchText,
  updateSearchText
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
    updateSearchText(event.target.value);
    clearSearchError();
  };
  const handleKeyDown = event => {
    const keyPressed = event.key;
    if (keyPressed === 'Enter') {
      handleSearch();
    } else if (keyPressed === 'Escape') {
      clearSearchText();
    }
  };
  return (
    <div className='search'>
      <input
        type='text'
        className={ classNames({
          searchText: true,
          error: hasError
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
  clearSearchText: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  performSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  updateSearchText: PropTypes.func.isRequired
};
export default Search;