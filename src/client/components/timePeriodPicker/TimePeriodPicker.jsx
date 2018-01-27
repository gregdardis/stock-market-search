import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import './timePeriodPicker.css';
import {
  CHART_BUTTON_DEFAULT_LABEL_COLOR,
  CHART_BUTTON_SELECTED_LABEL_COLOR,
  TIME_PERIOD_FIVE_DAY,
  TIME_PERIOD_FIVE_YEAR,
  TIME_PERIOD_MAX,
  TIME_PERIOD_ONE_DAY,
  TIME_PERIOD_ONE_MONTH,
  TIME_PERIOD_ONE_YEAR,
  TIME_PERIOD_THREE_MONTH
} from '../../../constants';

const TimePeriodPicker = ({
  chartTimePeriod,
  updateChartTimePeriod
}) => {
  const timePeriods = [
    TIME_PERIOD_ONE_DAY,
    TIME_PERIOD_FIVE_DAY,
    TIME_PERIOD_ONE_MONTH,
    TIME_PERIOD_THREE_MONTH,
    TIME_PERIOD_ONE_YEAR,
    TIME_PERIOD_FIVE_YEAR,
    TIME_PERIOD_MAX
  ];
  const getLabelColor = buttonLabel => {
    if (chartTimePeriod === buttonLabel) {
      return CHART_BUTTON_SELECTED_LABEL_COLOR;
    }
    return CHART_BUTTON_DEFAULT_LABEL_COLOR;
  };
  const handleClick = timePeriod => {
    updateChartTimePeriod(timePeriod);
  };
  return (
    <div className='timePeriodPicker'>
      { timePeriods.map(timePeriod => (
        <RaisedButton
          key={ timePeriod }
          label={ timePeriod }
          labelColor={ getLabelColor(timePeriod) }
          onClick={ () => handleClick(timePeriod) }
        />)) }
    </div>
  );
};
TimePeriodPicker.propTypes = {
  updateChartTimePeriod: PropTypes.func.isRequired,
  chartTimePeriod: PropTypes.string.isRequired
};
export default TimePeriodPicker;