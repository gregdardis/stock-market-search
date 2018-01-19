import React from 'react';
import PropTypes from 'prop-types';

import './PriceAndTodaysPriceChange.css';

const PriceAndTodaysPriceChange = ({
  currentPrice,
  priceChange,
  priceChangePercentage,
  isPositiveChange
}) => (
  <div className='priceAndTodaysPriceChange'>
    <h1>{ currentPrice }</h1>
    { isPositiveChange ?
      <h2 className='green'>{ priceChange } ({ priceChangePercentage })</h2>
      : <h2 className='red'>{ priceChange } ({ priceChangePercentage })</h2>
    }
  </div>
);
PriceAndTodaysPriceChange.propTypes = {
  currentPrice: PropTypes.string.isRequired,
  priceChange: PropTypes.string.isRequired,
  priceChangePercentage: PropTypes.string.isRequired,
  isPositiveChange: PropTypes.bool
};
export default PriceAndTodaysPriceChange;