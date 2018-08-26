import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ScaleLoader } from 'react-spinners';

import Search from '../search';
import StockDataRegion from '../stockDataRegion';
import { THEME_COLOR_DARK1 } from '../../../constants/utilityConstants';
import './home.css';

class Home extends Component {
  render() {
    const SPINNER_HEIGHT = 20;

    // The spinner is a little taller than it should be,
    // so add 4px to its container's height
    const SEARCH_STATUS_CONTAINER_HEIGHT = SPINNER_HEIGHT + 4;

    const { isLoading, searchError } = this.props;

    const getSearchStatusDivClassNames = () => classNames({
      hidden: searchError === null && !isLoading,
      searchStatus: true
    });

    return (
      <div className='home'>
        <Search hasError={ searchError !== null }/>
        <div className={ getSearchStatusDivClassNames() }
          style={ { height: SEARCH_STATUS_CONTAINER_HEIGHT } }>
          { isLoading
            ? <ScaleLoader
              color={ THEME_COLOR_DARK1 }
              height={ SPINNER_HEIGHT }
            />
            : <p className='error'>{ searchError }</p>
          }
        </div>
        <StockDataRegion />
      </div>
    );
  }
}

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  searchError: PropTypes.string
};

export default Home;