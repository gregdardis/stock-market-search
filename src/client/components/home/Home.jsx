import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ScaleLoader } from 'react-spinners';

import Search from '../search';
import StockDataRegion from '../stockDataRegion';
import { THEME_COLOR_DARK1 } from '../../../constants';
import './home.css';

const Home = ({ loading }) => (
  <div className='home'>
    <Search />
    <div className={ classnames({
      loader: true,
      hidden: !loading
    }) }>
      <ScaleLoader
        color={ THEME_COLOR_DARK1 }
        loading={ loading } />
    </div>
    <StockDataRegion />
  </div>
);
Home.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Home;