import React from 'react';
import PropTypes from 'prop-types';

import Column from '../column';
import CompanyGeneralInfo from '../companyGeneralInfo';
import { columnComponentsProps } from './childProps';
import { MESSAGE_NO_DATA } from '../../../constants/index';
import SelectableTimePeriodChart from '../selectableTimePeriodChart';
import './stockDataRegion.css';

const StockDataRegion = ({
  showNoDataMessage,
  showResults
}) => {
  if (showResults) {
    return (
      <div className='stockDataRegion'>
        <div className='textData'>
          <CompanyGeneralInfo />
          <Column { ...columnComponentsProps } />
        </div>
        <SelectableTimePeriodChart />
      </div>
    );
  }
  if (showNoDataMessage) {
    return (
      <p className='noDataMessage'>
        { MESSAGE_NO_DATA }
      </p>
    );
  }
  return null;
};

StockDataRegion.propTypes = {
  showNoDataMessage: PropTypes.bool.isRequired,
  showResults: PropTypes.bool.isRequired
};

export default StockDataRegion;