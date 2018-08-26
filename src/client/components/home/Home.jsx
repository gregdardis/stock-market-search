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
  isLoading,
  searchError
}) => (
  <div className='home'>
    <Search hasError={ searchError !== null }/>
    <div className={ classNames({
      hidden: searchError === null && !isLoading,
      searchStatus: true
    })}
    style={ { height: SEARCH_STATUS_CONTAINER_SIZE } }>
      { isLoading
        ? <ScaleLoader
          color={ THEME_COLOR_DARK1 }
          height={ SPINNER_SIZE }
        />
        : <p className='error'>{ searchError }</p>
      }
    </div>
    <StockDataRegion />
  </div>
);
Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  searchError: PropTypes.string
};

export default Home;