import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import './timePeriodPicker.css';
import {
  CHART_BUTTON_LABEL_COLOR_DEFAULT,
  CHART_BUTTON_LABEL_COLOR_SELECTED,
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
      return CHART_BUTTON_LABEL_COLOR_SELECTED;
    }
    return CHART_BUTTON_LABEL_COLOR_DEFAULT;
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