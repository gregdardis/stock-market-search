import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import { CHART_METADATA } from '../../../constants/formatting';
import { THEME_COLOR_MEDIUM1 } from '../../../constants/colors';
import './timePeriodButtons.css';

class TimePeriodButtons extends Component {
  constructor(props) {
    super(props);
    this.getButtonStyle = this.getButtonStyle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  getButtonStyle(buttonIndex) {
    const { chartTimePeriodIndex } = this.props;
    if (buttonIndex === chartTimePeriodIndex) {
      return { backgroundColor: THEME_COLOR_MEDIUM1 };
    }
    return {};
  }
  handleClick(index) {
    this.props.updateChartTimePeriodIndex(index);
  }
  render() {
    const { chartTimePeriodIndex } = this.props;
    return (
      <div className='timePeriodButtons'>
        { CHART_METADATA.map((timePeriod, index) => (
          <RaisedButton
            key={ index }
            label={ timePeriod.label }
            onClick={ () => this.handleClick(index) }
            buttonStyle={ this.getButtonStyle(index, chartTimePeriodIndex) }
          />
        )) }
      </div>
    );
  }
}
TimePeriodButtons.propTypes = {
  chartTimePeriodIndex: PropTypes.number.isRequired,
  updateChartTimePeriodIndex: PropTypes.func.isRequired
};
export default TimePeriodButtons;