import React, { Component } from 'react';

import './search.css';

class Search extends Component {
  render() {
    return (
      <div className='search'>
        <input type='text'
          placeholder='Ticker or name'
          className='searchText' />
        <button className='searchButton'>
          Search
        </button>
      </div>
    );
  }
}

export default Search;