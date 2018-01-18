import React from 'react';
import PropTypes from 'prop-types';

import Column from '../column';
import Row from '../row';
import CompanyName from '../companyName';
import { rowComponentsProps } from '../../dataItemProps';

const StockDataRegion = ({
  hasData
}) => (
  hasData ?
    <div className='stockDataRegion'>
      <CompanyName />
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