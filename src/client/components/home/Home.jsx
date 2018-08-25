import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ScaleLoader } from 'react-spinners';

import Search from '../search';
import StockDataRegion from '../stockDataRegion';
import { THEME_COLOR_DARK1 } from '../../../constants';
import './home.css';

const SPINNER_SIZE = 20;
// The spinner is a little taller than it should be,
// so add 4px to its container's height
const SEARCH_STATUS_CONTAINER_SIZE = SPINNER_SIZE + 4;

const Home = ({
  loading,
  searchError
}) => (
  <div className='home'>
    <Search />
    <div className={ classNames({
      error: true,
      hidden: searchError === null
    }) }
    style={ { height: SEARCH_STATUS_CONTAINER_SIZE } }>
      <p>{ searchError }</p>
    </div>
    <div className={ classNames({
      loader: true,
      hidden: !loading
    }) }
    style={ { height: SEARCH_STATUS_CONTAINER_SIZE } }>
      <ScaleLoader
        color={ THEME_COLOR_DARK1 }
        loading={ loading }
        height={ SPINNER_SIZE }/>
    </div>
    <StockDataRegion />
  </div>
);
Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchError: PropTypes.string
};

export default Home;