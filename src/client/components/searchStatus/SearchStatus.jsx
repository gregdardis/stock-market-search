import React from 'react';
import PropTypes from 'prop-types';

import SearchLoader from '../searchLoader';
import './searchStatus.css';

const SearchStatus = ({ loading, searchError }) => (
  <div className='searchStatus'>
    { loading
      ? <SearchLoader />
      : null }
    { searchError && !loading
      ? <p className='error'>{ searchError }</p>
      : null }
  </div>
);
SearchStatus.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchError: PropTypes.string
};
export default SearchStatus;