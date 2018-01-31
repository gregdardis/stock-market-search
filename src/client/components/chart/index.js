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

const calculateDateDaysInPast = (date, days) => {
  const currentDate = date.getDate();
  const newDate = currentDate - days;
  if (newDate > currentDate) {
    const currentMonth = date.getMonth();
    const newMonth = currentMonth - 1;
    date.setMonth(newMonth);
    if (newMonth > currentMonth) {
      date.setFullYear(date.getFullYear() - 1)
    }
  }
  date.setDate(newDate);
  return date;
};

// TODO: extract this and the one in server into utils
const calculateDateYearsInPast = years => {
  const year = new Date().getFullYear() - years;
  const date = new Date();
  date.setFullYear(year);
  return date;
};

// Only works for months between 0 and 11
const calculateDateMonthsInPast = months => {
  const date = new Date();
  const currentMonth = date.getMonth();
  const newMonth = currentMonth - months;
  if (newMonth > currentMonth) {
    date.setFullYear(date.getFullYear() - 1);
  }
  date.setMonth(newMonth);
  return date;
}

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

const getStockDataForPreviousMonths = (maxStockData, months) => {
  let unformattedCutoffDate = calculateDateMonthsInPast(months);
  let cutoffDate = formatDate(unformattedCutoffDate);
  let elementPosition = -1;
  // while loop because date we are looking for needs to change 
  // if the date we are looking for is a weekend and thus
  // doesn't exist in our maxStockData array
  while (elementPosition === -1) {
    elementPosition = maxStockData.map(data => {
      return data.date;
    }).indexOf(cutoffDate);
    unformattedCutoffDate = calculateDateDaysInPast(unformattedCutoffDate, 1);
    cutoffDate = formatDate(unformattedCutoffDate);
  }
  return maxStockData.slice(elementPosition);
};

// TODO: share code between this method and the one above it
// extract everything into methods and share as much as possible
const getStockDataForPreviousYears = (maxStockData, years) => {
  let unformattedCutoffDate = calculateDateYearsInPast(years);
  let cutoffDate = formatDate(unformattedCutoffDate);
  let elementPosition = -1;
  // while loop because date we are looking for needs to change 
  // if the date we are looking for is a weekend and thus
  // doesn't exist in our maxStockData array
  while (elementPosition === -1) {
    elementPosition = maxStockData.map(data => {
      return data.date;
    }).indexOf(cutoffDate);
    unformattedCutoffDate = calculateDateDaysInPast(unformattedCutoffDate, 1);
    cutoffDate = formatDate(unformattedCutoffDate);
  }
  return maxStockData.slice(elementPosition);
};

// TODO: pass in a prop or something to Chart.jsx to format
// the x axis based on the time period selected in the state
const getStockDataForTimePeriod = state => {
  const timePeriod = state.chartTimePeriod;
  const maxStockData = getSelectedStockValueForKey(state, 'maxStockData');
  switch (timePeriod) {
  case TIME_PERIOD_MAX:
    return maxStockData;
  case TIME_PERIOD_ONE_YEAR:
  // TODO: choose whether to use years or months here. 
    // return getStockDataForPreviousYears(maxStockData, 1);
    return getStockDataForPreviousMonths(maxStockData, 12);
  case TIME_PERIOD_FIVE_YEAR:
    return getStockDataForPreviousMonths(maxStockData, 60);
    // return getStockDataForPreviousYears(maxStockData, 5);
  case TIME_PERIOD_THREE_MONTH:
    return getStockDataForPreviousMonths(maxStockData, 3);
  case TIME_PERIOD_ONE_MONTH:
    return getStockDataForPreviousMonths(maxStockData, 1);
  // TODO: get stock data for previous days.
  // this will involve getting data from the api by hour or whatever,
  // instead of just closing prices for each day, and only get it for 5 days
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