import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import './timePeriodButtons.css';
import {
  CHART_BUTTON_LABEL_COLOR_DEFAULT,
  CHART_BUTTON_LABEL_COLOR_SELECTED,
  CHART_META_DATA
} from '../../../constants';

const TimePeriodButtons = ({
  chartTimePeriod,
  updateChartTimePeriod
}) => {
  const getLabelColor = buttonIndex => {
    if (chartTimePeriod === buttonIndex) {
      return CHART_BUTTON_LABEL_COLOR_SELECTED;
    }
    return CHART_BUTTON_LABEL_COLOR_DEFAULT;
  };
  const handleClick = index => {
    updateChartTimePeriod(index);
  };
  return (
    <div className='timePeriodButtons'>
      { CHART_META_DATA.map((timePeriod, index) => (
        <RaisedButton
          key={ index }
          label={ timePeriod.label }
          labelColor={ getLabelColor(index) }
          onClick={ () => handleClick(index) }
        />)) }
    </div>
  );
};
TimePeriodButtons.propTypes = {
  updateChartTimePeriod: PropTypes.func.isRequired,
  chartTimePeriod: PropTypes.number.isRequired
};
export default TimePeriodButtons;