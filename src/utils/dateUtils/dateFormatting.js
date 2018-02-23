import { padSingleDigitWithZero } from '../formatting';

// Reinventing the wheel here, but it was good unit testing
// practice and the method works
export const formatDateForMaxStockData = date => {
  if (!(date instanceof Date)) {
    throw new TypeError(`${formatDateForMaxStockData.name} requires a date`);
  }

  let day = date.getDate();
  day = padSingleDigitWithZero(day);

  // month is zero indexed in Date
  let month = date.getMonth() + 1;
  month = padSingleDigitWithZero(month);

  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};