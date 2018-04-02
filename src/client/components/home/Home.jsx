import React from 'react';
import PropTypes from 'prop-types'
import { RingLoader } from 'react-spinners';

import Search from '../search';
import StockDataRegion from '../stockDataRegion';
import './home.css';

const Home = ({ loading }) => (
  <div className='home'>
    <Search />
    { loading ?
      <div className='loader'>
        <RingLoader
          color={ '#123abc' }
          loading={ true } />
      </div> :
      <StockDataRegion />
    }
  </div>
);
Home.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Home;