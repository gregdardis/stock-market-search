import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import Column from '../column';
import CompanyGeneralInfo from '../companyGeneralInfo';
import { columnComponentsProps } from './childProps';
import { MESSAGE_NO_DATA } from '../../../constants/userFacingStrings';
import SelectableTimePeriodChart from '../selectableTimePeriodChart';
import './stockDataRegion.css';

export const Message = () => (
  <p className='noDataMessage'>
    { MESSAGE_NO_DATA }
  </p>
);

const StockDataRegion = ({
  showNoDataMessage,
  showResults
}) => (
  <div>
    { showResults
      ? <div className='stockDataRegion'>
        <div className='textData'>
          <CompanyGeneralInfo />
          <Column { ...columnComponentsProps } />
        </div>
        <SelectableTimePeriodChart />
      </div>
      : null
    }
    <CSSTransitionGroup
      transitionName='fade'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      { showNoDataMessage ? <Message /> : null }
    </CSSTransitionGroup>
  </div>
);

StockDataRegion.propTypes = {
  showNoDataMessage: PropTypes.bool.isRequired,
  showResults: PropTypes.bool.isRequired
};

export default StockDataRegion;