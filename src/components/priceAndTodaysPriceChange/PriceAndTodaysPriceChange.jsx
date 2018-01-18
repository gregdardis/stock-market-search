import React from 'react';
import PropTypes from 'prop-types';

import './PriceAndTodaysPriceChange.css';

const PriceAndTodaysPriceChange = ({
  currentPrice,
  priceChange,
  priceChangePercentage
}) => {
  return (
    <div className='priceAndTodaysPriceChange'>
      <h1>{ currentPrice }</h1> <h2>{ priceChange } ({ priceChangePercentage })</h2>
    </div>
  );
};