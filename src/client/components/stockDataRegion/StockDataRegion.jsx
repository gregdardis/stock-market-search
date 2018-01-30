import React from 'react';
import PropTypes from 'prop-types';

import Column from '../column';
import Row from '../row';
import CompanyNameAndSymbol from '../companyNameAndSymbol';
import PriceAndTodaysPriceChange from '../priceAndTodaysPriceChange';
import { rowComponentsProps } from './childProps';
import Exchange from '../exchange';
import ChartAndButtons from '../chartAndButtons';
import './stockDataRegion.css';

const StockDataRegion = ({
  hasData
}) => (
  hasData ?
    <div className='stockDataRegion'>
      <CompanyNameAndSymbol />
      <Exchange />
      <PriceAndTodaysPriceChange />
      <ChartAndButtons />
      <Row
        componentsProps={ rowComponentsProps }
        rowKeyName='rowKey'
        rowCellComponent={ Column }
      />
    </div>
    : <p>No data to make a table with! PLACEHOLDER!!!!!</p>
);

StockDataRegion.propTypes = {
  hasData: PropTypes.bool.isRequired
};

export default StockDataRegion;