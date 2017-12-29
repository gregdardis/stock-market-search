import React from 'react';
import PropTypes from 'prop-types';

import Search from './components/search';


// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Search />
//       </div>
//     );
//   }
// }

const App = (props) => (
  <div>
    <Search
      searchTerm={props.searchTerm}
    />
  </div>
);

App.propTypes = {
  searchTerm: PropTypes.string.isRequired
};

export default App;