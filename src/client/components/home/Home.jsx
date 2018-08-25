import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ScaleLoader } from 'react-spinners';

import Search from '../search';
import StockDataRegion from '../stockDataRegion';
import { THEME_COLOR_DARK1 } from '../../../constants';
import './home.css';

const SPINNER_SIZE = 20;

const Home = ({ loading }) => (
  <div className='home'>
    <Search />
    <div className={ classnames({
      loader: true,
      hidden: !loading
    }) }
    style={{
      // The loader is a little taller than it should be,
      // so add 4px to its container's height
      height: SPINNER_SIZE + 4
    }}>
      <ScaleLoader
        color={ THEME_COLOR_DARK1 }
        loading={ loading }
        height={ SPINNER_SIZE }/>
    </div>
    <StockDataRegion />
  </div>
);
Home.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Home;