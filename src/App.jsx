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
    <DataItem
      label='High'
    />
  </div>
);

export default App;