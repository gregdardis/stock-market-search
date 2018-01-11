import React from 'react';

import Search from './components/search';
import StockDataRegion from './components/stockDataRegion';

import './app.css';

const App = () => (
  <div className='app'>
    <Search />
    <StockDataRegion />
  </div>
);

export default App;