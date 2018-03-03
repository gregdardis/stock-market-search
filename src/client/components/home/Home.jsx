import React from 'react';

import Search from '../search';
import StockDataRegion from '../stockDataRegion';
import './home.css';

const Home = () => (
  <div className='home'>
    <Search />
    <StockDataRegion />
  </div>
);

export default Home;