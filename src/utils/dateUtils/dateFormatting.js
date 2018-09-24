import dateFormat from 'dateformat';

import { padSingleDigitWithZero } from '../formatting/numberFormatting';
import {
  MILLISECONDS_PER_SECOND,
  SECONDS_PER_MINUTE
} from '../../constants/numeric';

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

export function tryFormatDateWithoutTime(dateString, format) {
  try {
    const date = new Date(dateString);
    const timezoneOffsetMinutes = date.getTimezoneOffset();
    const dateWithCorrectTimezone = new Date(
      date.getTime() +
      Math.abs(
        timezoneOffsetMinutes * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND
      )
    );
    return dateFormat(dateWithCorrectTimezone, format);
  } catch (error) {
    console.error(`An error occurred in ${tryFormatDateWithoutTime.name}`);
  }
  return dateString;
}

export function tryFormatDateWithTime(dateString, format) {
  try {
    return dateFormat(dateString, format);
  } catch (error) {
    console.error(`An error occurred in ${tryFormatDateWithTime.name}`);
  }
  return dateString;
}