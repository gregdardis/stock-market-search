import React from 'react';
import PropTypes from 'prop-types';
import { BeatLoader, ScaleLoader } from 'react-spinners';

import { SEARCH_STATUS_REGION_HEIGHT } from '../../../constants/formatting';
import { THEME_COLOR_DARK1 } from '../../../constants/colors';

const SearchLoader = ({ showingCachedStock }) => {
  const loaderProps = {
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
  showingCachedStock: PropTypes.bool
};

export default SearchLoader;