import React from 'react';
import PropTypes from 'prop-types';

import Column from '../column';
import Row from '../row';
import { rowComponentsProps } from '../../dataItemProps';

const StockDataRegion = ({
  hasData
}) => (
  <div className='stockDataRegion'>
    { hasData
      ? <Row
        componentsProps={ rowComponentsProps }
        rowKeyName='rowKey'
        rowCellComponent={ Column }
      />
      : <p>No data to make a table with! PLACEHOLDER!!!!!</p>
    }
  </div>
);

StockDataRegion.propTypes = {
  hasData: PropTypes.bool.isRequired
};

export default StockDataRegion;