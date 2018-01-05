import React from 'react';

import Search from './components/search';
import Column from './components/column';
import DataItem from './components/dataItem';

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
      columnCellComponent={ DataItem }
    />
  </div>
);

export default App;