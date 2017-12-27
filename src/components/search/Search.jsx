import React, { Component } from 'react';

import SearchBar from '../searchBar';
import './search.css';

class Search extends Component {
  render() {
    return (
      <div className='search'>
        <SearchBar />
      </div>
    );
  }
}

export default Search;