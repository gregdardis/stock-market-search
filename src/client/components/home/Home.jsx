import React from 'react';
import PropTypes from 'prop-types';

import Search from '../search';
import SearchStatus from '../searchStatus';
import StockDataRegion from '../stockDataRegion';
import './home.css';

const Home = ({ loading, searchError }) => (
  <div className='home'>
    <Search />
    <SearchStatus loading={ loading } searchError={ searchError }/>
    <StockDataRegion />
  </div>
);
Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchError: PropTypes.string
};
export default Home;