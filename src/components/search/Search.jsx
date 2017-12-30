import React from 'react';
import PropTypes from 'prop-types';

import './search.css';

// class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { searchText: '' };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSearch = this.handleSearch.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ searchText: event.target.value });
//   }

//   handleSearch() {
//     fetch(`/stocks/${this.state.searchText}`)
//       .then(res => res.json())
//       .then(jsonData => console.log(jsonData));
//   }

//   render() {
//     return (
//       <div className='search'>
//         <input
//           type='text'
//           className='searchText'
//           value={ this.state.searchText }
//           onChange={ this.handleChange }
//           placeholder='Ticker or name'
//         />
//         <button
//           className='searchButton'
//           onClick={ this.handleSearch }>
//           Search
//         </button>
//       </div>
//     );
//   }
// }

const Search = (props) => {
  return (
    <div className='search'>
      <input
        type='text'
        className='searchText'
        value={ props.searchTerm }
        onChange={ event => props.updateSearchTerm(event.target.value) }
        placeholder='Ticker or name'
      />
      <button
        className='searchButton'
        // onClick={ this.handleSearch }
      >
          Search
      </button>
    </div>
  );
};

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  updateSearchTerm: PropTypes.func.isRequired
};

export default Search;