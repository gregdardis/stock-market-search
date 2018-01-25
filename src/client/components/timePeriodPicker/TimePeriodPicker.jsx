import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import './timePeriodPicker.css';
import {
  CHART_BUTTON_DEFAULT_LABEL_COLOR,
  CHART_BUTTON_SELECTED_LABEL_COLOR,
  TIME_PERIOD_ONE_DAY,
  TIME_PERIOD_FIVE_DAY,
  TIME_PERIOD_ONE_MONTH,
  TIME_PERIOD_THREE_MONTH,
  TIME_PERIOD_ONE_YEAR,
  TIME_PERIOD_FIVE_YEAR,
  TIME_PERIOD_MAX
} from '../../../constants';

const TimePeriodPicker = ({
  updateChartTimePeriod,
  chartTimePeriod
}) => {
  const handleClick = timePeriod => {
    updateChartTimePeriod(timePeriod);
  };
  const setLabelColor = buttonLabel => {
    if (chartTimePeriod === buttonLabel) {
      return CHART_BUTTON_SELECTED_LABEL_COLOR;
    }
    return CHART_BUTTON_DEFAULT_LABEL_COLOR;
  };
  return (
    <div className='timePeriodPicker'>
      <RaisedButton label={ TIME_PERIOD_ONE_DAY }
        labelColor={ setLabelColor(TIME_PERIOD_ONE_DAY) }
        onClick={ () => {
          handleClick(TIME_PERIOD_ONE_DAY);
        } } />
      <RaisedButton label={ TIME_PERIOD_FIVE_DAY }
        labelColor={ setLabelColor(TIME_PERIOD_FIVE_DAY) }
        onClick={ () => {
          handleClick(TIME_PERIOD_FIVE_DAY);
        } } />
      <RaisedButton label={ TIME_PERIOD_ONE_MONTH }
        labelColor={ setLabelColor(TIME_PERIOD_ONE_MONTH) }
        onClick={ () => {
          handleClick(TIME_PERIOD_ONE_MONTH);
        } } />
      <RaisedButton label={ TIME_PERIOD_THREE_MONTH }
        labelColor={ setLabelColor(TIME_PERIOD_THREE_MONTH) }
        onClick={ () => {
          handleClick(TIME_PERIOD_THREE_MONTH);
        } } />
      <RaisedButton label={ TIME_PERIOD_ONE_YEAR }
        labelColor={ setLabelColor(TIME_PERIOD_ONE_YEAR) }
        onClick={ () => {
          handleClick(TIME_PERIOD_ONE_YEAR);
        } } />
      <RaisedButton label={ TIME_PERIOD_FIVE_YEAR }
        labelColor={ setLabelColor(TIME_PERIOD_FIVE_YEAR) }
        onClick={ () => {
          handleClick(TIME_PERIOD_FIVE_YEAR);
        } } />
      <RaisedButton label={ TIME_PERIOD_MAX }
        labelColor={ setLabelColor(TIME_PERIOD_MAX) }
        onClick={ () => {
          handleClick(TIME_PERIOD_MAX);
        } } />
    </div>
  );
};
TimePeriodPicker.propTypes = {
  updateChartTimePeriod: PropTypes.func.isRequired,
  chartTimePeriod: PropTypes.string.isRequired
};
export default TimePeriodPicker;