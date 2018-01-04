import React from 'react';

import Search from './components/search';
import Column from './components/column';

const App = () => (
  <div>
    <Search />
    <Column
      componentsProps={[
        {
          label: 'Open'
        },
        {
          label: 'Div',
          optionalLabel: '%'
        },
        {
          label: 'High'
        }
      ]}
    />
  </div>
);

export default App;