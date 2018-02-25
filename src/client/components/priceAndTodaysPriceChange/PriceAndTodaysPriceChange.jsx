import React from 'react';
import PropTypes from 'prop-types';

import './PriceAndTodaysPriceChange.css';

const PriceAndTodaysPriceChange = ({
  currentPrice,
  isPositiveChange,
  priceChange,
  priceChangePercentage
}) => {
  return (
    <div className='priceAndTodaysPriceChange'>
      <span className='currentPrice'>{ currentPrice }</span>
      { isPositiveChange
        ? <span className='positive'>+{ priceChange } (+{ priceChangePercentage })</span>
        : <span className='negative'>{ priceChange } ({ priceChangePercentage })</span>
      }
    </div>
  );
};
PriceAndTodaysPriceChange.propTypes = {
  currentPrice: PropTypes.string.isRequired,
  isPositiveChange: PropTypes.bool.isRequired,
  priceChange: PropTypes.string.isRequired,
  priceChangePercentage: PropTypes.string.isRequired
};
export default PriceAndTodaysPriceChange;