import React from 'react';

import Search from '../search';
import SearchStatus from '../searchStatus';
import StockDataRegion from '../stockDataRegion';
import './home.css';

const Home = () => (
  <div className='home'>
    <Search />
    <SearchStatus/>
    <StockDataRegion />
  </div>
);
export default Home;