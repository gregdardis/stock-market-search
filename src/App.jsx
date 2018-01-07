import React from 'react';

import Search from './components/search';
import Column from './components/column';
import Row from './components/row';
import { rowComponentsProps } from './testData';

const App = () => (
  <div>
    <Search />
    <Row
      componentsProps={ rowComponentsProps }
      rowKeyName='rowKey'
      rowCellComponent={ Column }
    />
  </div>
);

export default App;