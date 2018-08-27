import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Search from '../search';
import SearchLoader from '../searchLoader';
import StockDataRegion from '../stockDataRegion';
import './home.css';

const SEARCH_STATUS_CONTAINER_HEIGHT = 24;

class Home extends Component {
  getSearchStatusDivClassNames() {
    const { searchError, loading } = this.props;
    return classNames({
      hidden: !searchError && !loading,
      searchStatus: true
    });
  }

  render() {
    const { loading, searchError } = this.props;
    return (
      <div className='home'>
        <Search hasError={ !!searchError } />
        <div
          className={ this.getSearchStatusDivClassNames() }
          style={ { height: SEARCH_STATUS_CONTAINER_HEIGHT } }>
          { loading
            ? <SearchLoader />
            : <p className='error'>{ searchError }</p>
          }
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