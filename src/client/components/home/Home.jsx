import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Search from '../search';
import SearchLoader from '../searchLoader';
import StockDataRegion from '../stockDataRegion';
import './home.css';

class Home extends Component {
  render() {
    const { loading, searchError } = this.props;
    return (
      <div className='home'>
        <Search hasError={ !!searchError } />
        <div className='searchStatus'>
          { loading
            ? <SearchLoader />
            : null }
          { searchError && !loading
            ? <p className='error'>{ searchError }</p>
            : null }
        </div>
        <StockDataRegion />
      </div>
    );
  }
}
Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchError: PropTypes.string
};
export default Home;