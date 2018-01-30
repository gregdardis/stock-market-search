import { connect } from 'react-redux';

import Chart from './Chart';
import { getSelectedStockValueForKey } from '../../../utils/stateGetters';
import {
  TIME_PERIOD_FIVE_DAY,
  TIME_PERIOD_FIVE_YEAR,
  TIME_PERIOD_MAX,
  TIME_PERIOD_ONE_DAY,
  TIME_PERIOD_ONE_MONTH,
  TIME_PERIOD_ONE_YEAR,
  TIME_PERIOD_THREE_MONTH
} from '../../../constants';

// TODO: extract this and the one in server into utils
const calculateDateYearsInPast = years => {
  const year = new Date().getFullYear() - years;
  const date = new Date();
  date.setFullYear(year);
  return date;
};

// TODO: extract this and the one in server into utils
const padSingleDigitWithZero = value => {
  let num = parseInt(value);
  // need to check value because parseInt turns '12hello' into a number
  if (isNaN(value) || isNaN(num)) {
    throw new TypeError(`${padSingleDigitWithZero.name} requires a number or numeric string`);
  }
  return num < 10 ? '0' + num : num.toString();
};

// TODO: extract this and the one in server into utils
const formatDate = date => {
  if (!(date instanceof Date)) {
    throw new TypeError(`${formatDate.name} requires a date`);
  }

  let day = date.getDate();
  day = padSingleDigitWithZero(day);

  // month is zero indexed
  let month = date.getMonth() + 1;
  month = padSingleDigitWithZero(month);

  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const getStockDataForPreviousYears = (maxStockData, years) => {
  const cutoffDate = formatDate(calculateDateYearsInPast(years));
  const elementPosition = maxStockData.map(data => {
    return data.date;
  }).indexOf(cutoffDate);
  return maxStockData.slice(elementPosition);
};

const getStockDataForTimePeriod = state => {
  const timePeriod = state.chartTimePeriod;
  const maxStockData = getSelectedStockValueForKey(state, 'maxStockData');
  switch (timePeriod) {
  case TIME_PERIOD_MAX:
    return maxStockData;
  case TIME_PERIOD_ONE_YEAR:
    return getStockDataForPreviousYears(maxStockData, 1);
  case TIME_PERIOD_FIVE_YEAR:
    return getStockDataForPreviousYears(maxStockData, 5);
  default:
    return maxStockData;
  }
};

const mapStateToProps = state => ({
  data: getStockDataForTimePeriod(state)
});

export default connect(
  mapStateToProps
)(Chart);