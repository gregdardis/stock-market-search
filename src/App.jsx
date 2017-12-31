import React from 'react';

import Search from './components/search';
import DataItem from './components/dataItem';

const App = () => (
  <div>
    <Search />
    <DataItem
      label='Open'
    />
    <DataItem
      label='Div'
      optionalLabel='%'
    />
  </div>
);

export default App;