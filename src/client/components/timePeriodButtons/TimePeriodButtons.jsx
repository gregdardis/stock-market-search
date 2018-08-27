import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import './timePeriodButtons.css';
import {
  CHART_META_DATA
} from '../../../constants/utilityConstants';

class TimePeriodButtons extends Component {
  constructor(props) {
    super(props);
    this.getButtonStyle = this.getButtonStyle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  getButtonStyle(buttonIndex) {
    const { chartTimePeriodIndex } = this.props;
    if (buttonIndex === chartTimePeriodIndex) {
      return { backgroundColor: '#5998ff' };
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
        { CHART_META_DATA.map((timePeriod, index) => (
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