import React from 'react';
import PropTypes from 'prop-types';

import Column from '../column';
import Row from '../row';
import CompanyGeneralInfo from '../companyGeneralInfo';
import { rowComponentsProps } from './childProps';
import SelectableTimePeriodChart from '../selectableTimePeriodChart';
import './stockDataRegion.css';

const StockDataRegion = ({
  hasData
}) => (
  hasData ?
    <div className='stockDataRegion'>
      <CompanyGeneralInfo />
      <SelectableTimePeriodChart />
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