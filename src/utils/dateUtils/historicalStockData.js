import { MONTHS_PER_YEAR } from '../../constants/numeric';

import {
  calculateDateDaysInPast,
  calculateDateMonthsInPast,
  formatDateForMaxStockData
} from '.';

export const getStockDataForPreviousMonths = (maxStockData, months) => {
  const date = new Date();
  let unformattedCutoffDate = calculateDateMonthsInPast(date, months);
  let cutoffDate;
  let elementPosition = -1;

  // If the date we are looking for is a weekend (and thus the stock
  // has no data), keep checking one day before that until a
  // day with stock data is found.
  while (elementPosition < 0) {
    cutoffDate = formatDateForMaxStockData(unformattedCutoffDate);
    elementPosition = maxStockData.map(data => data.date).indexOf(cutoffDate);
    unformattedCutoffDate = calculateDateDaysInPast(unformattedCutoffDate, 1);
  }
  return maxStockData.slice(elementPosition);
};

export const getStockDataForPreviousYears = (maxStockData, years) =>
  getStockDataForPreviousMonths(maxStockData, years * MONTHS_PER_YEAR);