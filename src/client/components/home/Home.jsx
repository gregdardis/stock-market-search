import React from 'react';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'react-spinners';

import Search from '../search';
import StockDataRegion from '../stockDataRegion';
import { THEME_COLOR_DARK1 } from '../../../constants';
import './home.css';

const Home = ({ loading }) => (
  <div className='home'>
    <Search />
    { loading ?
      <div className='loader'>
        <ScaleLoader
          color={ THEME_COLOR_DARK1 }
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