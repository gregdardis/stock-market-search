import React from 'react';

import Search from '../search';
import StockDataRegion from '../stockDataRegion';

import './app.css';

const App = () => (
  <div className='app'>
    <Search />
    <StockDataRegion />
  </div>
);

export default App;