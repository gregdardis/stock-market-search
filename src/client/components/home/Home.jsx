import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BeatLoader, ScaleLoader } from 'react-spinners';

import Search from '../search';
import StockDataRegion from '../stockDataRegion';
import { THEME_COLOR_DARK1 } from '../../../constants';
import './home.css';

const STATUS_REGION_HEIGHT = 24;

const Loader = ({ loading, showingCachedStock }) => {
  const loaderProps = {
    loading: loading,
    color: THEME_COLOR_DARK1
  };
  return showingCachedStock
    ? <BeatLoader
      // - 12 because it's a size that looks good
      size = { STATUS_REGION_HEIGHT - 12 }
      { ...loaderProps } />
    : <ScaleLoader
      // - 4 because it's a height that looks good
      height={ STATUS_REGION_HEIGHT - 4 }
      { ...loaderProps } />;
};
Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  showingCachedStock: PropTypes.bool
};

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
    style={{ height: STATUS_REGION_HEIGHT }}>
      <Loader
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