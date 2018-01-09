import React from 'react';

import Search from './components/search';
import Column from './components/column';
import Row from './components/row';
import { rowComponentsProps } from './testData';

import './app.css';

const App = () => (
  <div className='app'>
    <Search />
    <Row
      componentsProps={ rowComponentsProps }
      rowKeyName='rowKey'
      rowCellComponent={ Column }
    />
  </div>
);

export default App;