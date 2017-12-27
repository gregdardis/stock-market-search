import React, { Component } from 'react';

import './search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleSearch() {
    alert('Text submitted: ' + this.state.searchText);
  }

  render() {
    return (
      <div className='search'>
        <input
          type='text'
          className='searchText'
          value={ this.state.searchText }
          onChange={ this.handleChange }
          placeholder='Ticker or name'
        />
        <button
          className='searchButton'
          onClick={ this.handleSearch }>
          Search
        </button>
      </div>
    );
  }
}

export default Search;