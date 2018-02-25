import React from 'react';
import PropTypes from 'prop-types';

import './PriceAndTodaysPriceChange.css';

const PriceAndTodaysPriceChange = ({
  currentPrice,
  priceChange,
  priceChangePercentage
}) => {
  const isPositiveChange = priceChange >= 0;
  return (
    <div className='priceAndTodaysPriceChange'>
      <span className='currentPrice'>{ currentPrice }</span>
      { isPositiveChange
        ? <span className='positive'>
          +{ priceChange } (+{ priceChangePercentage })
        </span>
        : <span className='negative'>
          { priceChange } ({ priceChangePercentage })
        </span>
      }
    </div>
  );
};
PriceAndTodaysPriceChange.propTypes = {
  currentPrice: PropTypes.string.isRequired,
  priceChange: PropTypes.string.isRequired,
  priceChangePercentage: PropTypes.string.isRequired
};
export default PriceAndTodaysPriceChange;