import React from 'react';
import PropTypes from 'prop-types';
import { BeatLoader, ScaleLoader } from 'react-spinners';

import {
  SEARCH_STATUS_REGION_HEIGHT,
  THEME_COLOR_DARK1
} from '../../../constants';

const SearchLoader = ({ loading, showingCachedStock }) => {
  const loaderProps = {
    loading: loading,
    color: THEME_COLOR_DARK1
  };
  return showingCachedStock
    ? <BeatLoader
      // - 12 because it's a size that looks good
      size = { SEARCH_STATUS_REGION_HEIGHT - 12 }
      { ...loaderProps } />
    : <ScaleLoader
      // - 4 because it's a height that looks good
      height={ SEARCH_STATUS_REGION_HEIGHT - 4 }
      { ...loaderProps } />;
};
SearchLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
  showingCachedStock: PropTypes.bool
};

export default SearchLoader;