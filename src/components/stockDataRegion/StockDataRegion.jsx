import React from 'react';
import PropTypes from 'prop-types';

import Column from '../column';
import Row from '../row';
import CompanyNameAndSymbol from '../companyNameAndSymbol';
import PriceAndTodaysPriceChange from '../priceAndTodaysPriceChange';
import { rowComponentsProps } from '../../dataItemProps';
import Exchange from '../exchange';
import './stockDataRegion.css';

const StockDataRegion = ({
  hasData
}) => (
  hasData ?
    <div className='stockDataRegion'>
      <CompanyNameAndSymbol />
      <Exchange />
      <PriceAndTodaysPriceChange />
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