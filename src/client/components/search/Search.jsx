import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

import './search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.focusEndOfInput = this.focusEndOfInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  focusEndOfInput(event) {
    const temp = event.target.value;
    event.target.value = '';
    event.target.value = temp;
  }
  handleSearch() {
    const {
      clearSearchError,
      fetchStock,
      setStockFromMemCache,
      stocks,
      text
    } = this.props;

    if (text) {
      if (stocks[text]) {
        setStockFromMemCache(text);
      }
      fetchStock(text);
      clearSearchError();
    }
  }
  handleChange(event) {
    const { clearSearchError, updateSearchText } = this.props;

    updateSearchText(event.target.value);
    clearSearchError();
  }
  handleKeyDown(event) {
    const { clearSearchText } = this.props;

    const keyPressed = event.key;
    if (keyPressed === 'Enter') {
      this.handleSearch();
    } else if (keyPressed === 'Escape') {
      clearSearchText();
    }
  }
  render() {
    const { hasError, text } = this.props;

    return (
      <div className='search'>
        <input
          type='text'
          className={ classNames({
            searchText: true,
            error: hasError
          }) }
          value={ text }
          onChange={ this.handleChange }
          onKeyDown={ this.handleKeyDown }
          placeholder='Stock symbol'
          autoFocus
          required
          onFocus={ this.focusEndOfInput }
          spellCheck={ false }
          maxLength={ 15 }
        />
        <FontAwesome
          className='searchButton'
          name='search'
          onClick={ this.handleSearch }
        />
      </div>
    );
  }
}
Search.propTypes = {
  clearSearchError: PropTypes.func.isRequired,
  clearSearchText: PropTypes.func.isRequired,
  fetchStock: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  setStockFromMemCache: PropTypes.func.isRequired,
  stocks: PropTypes.object,
  text: PropTypes.string.isRequired,
  updateSearchText: PropTypes.func.isRequired
};
export default Search;