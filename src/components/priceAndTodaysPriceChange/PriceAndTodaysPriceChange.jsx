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
    <span className='currentPrice'>{ currentPrice }</span>
    { isPositiveChange ?
      <span className='positive'>+{ priceChange } (+{ priceChangePercentage })</span>
      : <span className='negative'>{ priceChange } ({ priceChangePercentage })</span>
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