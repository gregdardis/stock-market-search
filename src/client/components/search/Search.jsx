import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

import './search.css';

const Search = ({
  clearError,
  clearText,
  fetchStock,
  hasError,
  setStockFromMemCache,
  stocks = {},
  text,
  updateText
}) => {
  const focusEndOfInput = event => {
    const temp = event.target.value;
    event.target.value = '';
    event.target.value = temp;
  };
  const handleSearch = () => {
    if (text) {
      if (stocks[text]) {
        setStockFromMemCache(text);
      }
      fetchStock(text);
      clearError();
    }
  };
  const handleChange = event => {
    updateText(event.target.value);
    clearError();
  };
  const handleKeyDown = event => {
    const keyPressed = event.key;
    if (keyPressed === 'Enter') {
      handleSearch();
    } else if (keyPressed === 'Escape') {
      clearText();
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
        value={ text }
        onChange={ handleChange }
        onKeyDown={ handleKeyDown }
        placeholder='Stock symbol'
        autoFocus
        required
        onFocus={ focusEndOfInput }
        spellCheck={ false }
        maxLength={ 15 }
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
  clearError: PropTypes.func.isRequired,
  clearText: PropTypes.func.isRequired,
  fetchStock: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  setStockFromMemCache: PropTypes.func.isRequired,
  stocks: PropTypes.object,
  text: PropTypes.string.isRequired,
  updateText: PropTypes.func.isRequired
};
export default Search;