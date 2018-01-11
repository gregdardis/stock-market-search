import React from 'react';
import PropTypes from 'prop-types';

import './search.css';

const Search = ({
  searchTerm,
  updateSearchTerm,
  clearSearchTerm,
  handleSearch
}) => {
  const handleChange = event => {
    updateSearchTerm(event.target.value);
  };
  const handleKeyDown = event => {
    const keyPressed = event.key;
    if (keyPressed === 'Enter') {
      handleSearch(searchTerm);
    } else if (keyPressed === 'Escape') {
      clearSearchTerm();
    }
  };
  return (
    <div className='search'>
      <input
        type='text'
        className='searchText'
        value={ searchTerm }
        onChange={ handleChange }
        onKeyDown={ handleKeyDown }
        placeholder='Ticker or name'
      />
      <button
        className='searchButton'
        onClick={ () => handleSearch(searchTerm) }>
        Search
      </button>
    </div>
  );
};

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
  clearSearchTerm: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default Search;

// TODO: use this code to help us fetch api data before deleting this
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