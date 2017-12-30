import React from 'react';
import PropTypes from 'prop-types';

import SearchContainer from './components/search/SearchContainer';

const App = ({
  store
}) => (
  <div>
    <SearchContainer
      store={ store }
    />
  </div>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;

// const App = ({
//   searchTerm,
//   updateSearchTerm,
//   clearSearchTerm
// }) => (
//   <div>
//     <Search
//       searchTerm={ searchTerm }
//       updateSearchTerm={ updateSearchTerm }
//       clearSearchTerm={ clearSearchTerm }
//     />
//   </div>
// );

// App.propTypes = {
//   searchTerm: PropTypes.string.isRequired,
//   updateSearchTerm: PropTypes.func.isRequired,
//   clearSearchTerm: PropTypes.func.isRequired
// };