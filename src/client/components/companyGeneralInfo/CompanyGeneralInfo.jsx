import React from 'react';

import CompanyNameAndSymbol from '../companyNameAndSymbol';
import Exchange from '../exchange';
import PriceAndTodaysPriceChange from '../priceAndTodaysPriceChange';
import './companyGeneralInfo.css';

const CompanyGeneralInfo = () => (
  <div className='companyGeneralInfo'>
    <div className='topRow'>
      <CompanyNameAndSymbol />
      <Exchange />
    </div>
    <PriceAndTodaysPriceChange />
  </div>
);
export default CompanyGeneralInfo;