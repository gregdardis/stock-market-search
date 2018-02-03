import { connect } from 'react-redux';

import Chart from './Chart';
import { getSelectedStockValueForKey } from '../../../utils/stateGetters';
import {
  calculateDateDaysInPast,
  calculateDateMonthsInPast,
  formatDate
} from '../../../utils/formatting/dateFormatting';
import {
  INDEX_MAX,
  INDEX_ONE_YEAR,
  INDEX_ONE_DAY,
  INDEX_FIVE_DAY,
  INDEX_ONE_MONTH,
  INDEX_THREE_MONTH,
  INDEX_FIVE_YEAR,
  MONTHS_PER_YEAR,
  VALID_DATE_NOT_FOUND
} from '../../../constants';

const getStockDataForPreviousMonths = (maxStockData, months) => {
  const date = new Date();
  let unformattedCutoffDate = calculateDateMonthsInPast(date, months);
  let cutoffDate;
  let elementPosition = VALID_DATE_NOT_FOUND;

  // If the date we are looking for is a weekend (and thus the stock has no data),
  // keep checking one day before that until a day with stock data is found
  while (elementPosition === VALID_DATE_NOT_FOUND) {
    cutoffDate = formatDate(unformattedCutoffDate);
    elementPosition = maxStockData.map(data => {
      return data.date;
    }).indexOf(cutoffDate);
    unformattedCutoffDate = calculateDateDaysInPast(unformattedCutoffDate, 1);
  }
  return maxStockData.slice(elementPosition);
};

const getStockDataForPreviousYears = (maxStockData, years) =>
  getStockDataForPreviousMonths(maxStockData, years * MONTHS_PER_YEAR);

// TODO: pass in a prop or something to Chart.jsx to format
// the x axis based on the time period selected in the state
const getStockDataForTimePeriod = state => {
  const timePeriodIndex = state.chartTimePeriod;
  const maxStockData = getSelectedStockValueForKey(state, 'maxStockData');
  switch (timePeriodIndex) {
  case INDEX_MAX:
    return maxStockData;
  case INDEX_ONE_YEAR:
    return getStockDataForPreviousYears(maxStockData, 1);
  case INDEX_FIVE_YEAR:
    return getStockDataForPreviousYears(maxStockData, 5);
  case INDEX_THREE_MONTH:
    return getStockDataForPreviousMonths(maxStockData, 3);
  case INDEX_ONE_MONTH:
    return getStockDataForPreviousMonths(maxStockData, 1);
  // TODO: get stock data for previous days.
  // this will involve getting data from the api by hour or whatever,
  // instead of just closing prices for each day, and only get it for 5 days
  // for 1 day, need time every 5 minutes
  // for 5 days, need time every 30 minutes
  default:
    return getStockDataForPreviousYears(maxStockData, 1);
  }
};

const mapStateToProps = state => ({
  data: getStockDataForTimePeriod(state),
  chartTimePeriod: state.chartTimePeriod
});

export default connect(
  mapStateToProps
)(Chart);