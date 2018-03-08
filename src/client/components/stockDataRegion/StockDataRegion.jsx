import React from 'react';
import PropTypes from 'prop-types';

import Column from '../column';
import CompanyGeneralInfo from '../companyGeneralInfo';
import { columnComponentsProps } from './childProps';
import SelectableTimePeriodChart from '../selectableTimePeriodChart';
import './stockDataRegion.css';

const StockDataRegion = ({
  hasData
}) => (
  hasData ?
    <div className='stockDataRegion'>
      <div className='textData'>
        <CompanyGeneralInfo />
        <Column { ...columnComponentsProps } />
      </div>
      <SelectableTimePeriodChart />
    </div>
    : <p style={ { textAlign: 'center' } }>
      Nothing to display - please search for a stock.
    </p>
);

StockDataRegion.propTypes = {
  hasData: PropTypes.bool.isRequired
};

export default StockDataRegion;