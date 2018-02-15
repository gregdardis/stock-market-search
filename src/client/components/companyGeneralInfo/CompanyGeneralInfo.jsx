import React from 'react';

import CompanyNameAndSymbol from '../companyNameAndSymbol';
import Exchange from '../exchange';
import PriceAndTodaysPriceChange from '../priceAndTodaysPriceChange';
import './companyGeneralInfo.css';

const CompanyGeneralInfo = () => (
  <div className='companyGeneralInfo'>
    <CompanyNameAndSymbol />
    <Exchange />
    <PriceAndTodaysPriceChange />
  </div>
);
export default CompanyGeneralInfo;