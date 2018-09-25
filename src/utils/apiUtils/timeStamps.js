import dateFormat from 'dateformat';

import { MILLISECONDS_PER_SECOND } from '../../constants/numeric';

// NOTE: this date has timezone UTC, which is incorrect but works in this
// case because we are just extracting the time
export function getAdjustedDateForTimestamp(gmtoffset, timestamp) {
  const adjustedTimestamp =
    (timestamp + gmtoffset) * MILLISECONDS_PER_SECOND;
  return new Date(adjustedTimestamp);
}

export function formatAndAdjustDateForTimestamp(
  gmtoffset,
  timestamp,
  dateAndTimeFormat
) {
  const dateAndTime = getAdjustedDateForTimestamp(gmtoffset, timestamp);
  return dateFormat(dateAndTime, dateAndTimeFormat, true);
}