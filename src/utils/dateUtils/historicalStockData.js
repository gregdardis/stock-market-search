import {
  MONTHS_PER_YEAR,
  VALID_DATE_NOT_FOUND
} from '../../constants';

import {
  calculateDateDaysInPast,
  calculateDateMonthsInPast,
  formatDateForMaxStockData
} from '.';

export const getStockDataForPreviousMonths = (maxStockData, months) => {
  const date = new Date();
  let unformattedCutoffDate = calculateDateMonthsInPast(date, months);
  let cutoffDate;
  let elementPosition = VALID_DATE_NOT_FOUND;

  // If the date we are looking for is a weekend (and thus the stock has no data),
  // keep checking one day before that until a day with stock data is found
  while (elementPosition === VALID_DATE_NOT_FOUND) {
    cutoffDate = formatDateForMaxStockData(unformattedCutoffDate);
    elementPosition = maxStockData.map(data => {
      return data.date;
    }).indexOf(cutoffDate);
    unformattedCutoffDate = calculateDateDaysInPast(unformattedCutoffDate, 1);
  }
  return maxStockData.slice(elementPosition);
};

export const getStockDataForPreviousYears = (maxStockData, years) =>
  getStockDataForPreviousMonths(maxStockData, years * MONTHS_PER_YEAR);