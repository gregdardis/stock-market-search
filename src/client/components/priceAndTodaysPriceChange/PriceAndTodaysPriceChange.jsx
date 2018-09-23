import React from 'react';
import PropTypes from 'prop-types';

import './PriceAndTodaysPriceChange.css';

const PriceAndTodaysPriceChange = ({
  currentPrice,
  isPositiveChange,
  priceChange,
  priceChangePercentage
}) => (
  <div className='priceAndTodaysPriceChange'>
    <div className='currentPrice'>{ currentPrice }</div>
    { isPositiveChange
      ? <div className='positive'>
        +{ priceChange } (+{ priceChangePercentage })
      </div>
      : <div className='negative'>
        { priceChange } ({ priceChangePercentage })
      </div>
    }
  </div>
);

PriceAndTodaysPriceChange.propTypes = {
  currentPrice: PropTypes.string.isRequired,
  isPositiveChange: PropTypes.bool.isRequired,
  priceChange: PropTypes.string.isRequired,
  priceChangePercentage: PropTypes.string.isRequired
};
export default PriceAndTodaysPriceChange;