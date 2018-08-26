import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Search from '../search';
import SearchLoader from '../searchLoader';
import StockDataRegion from '../stockDataRegion';
import { SEARCH_STATUS_REGION_HEIGHT } from '../../../constants';
import './home.css';

const Home = ({
  loading,
  showingCachedStock
}) => (
  <div className='home'>
    <Search />
    <div className={ classnames({
      loader: true,
      hidden: !loading
    }) }
    style={{ height: SEARCH_STATUS_REGION_HEIGHT }}>
      <SearchLoader
        loading={ loading }
        showingCachedStock={ showingCachedStock }/>
    </div>
    <StockDataRegion />
  </div>
);
Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  showingCachedStock: PropTypes.bool
};

export default Home;