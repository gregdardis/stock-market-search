import dateFormat from 'dateformat';

import { MILLISECONDS_PER_SECOND } from '../../constants/numeric';

// NOTE: this date has timezone UTC
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

export function getStartOfDayTimestampIndex(dayIndex, timestampsPerDay) {
  if (dayIndex < 0
    || timestampsPerDay < 0
    || typeof dayIndex !== 'number'
    || typeof timestampsPerDay !== 'number') {
    throw new Error(
      `${getStartOfDayTimestampIndex.name} requires positive number inputs.`
    );
  }
  return Math.floor(dayIndex * timestampsPerDay);
}

export function getEndOfDayTimestampIndex(dayIndex, timestampsPerDay) {
  if (dayIndex < 0
    || timestampsPerDay < 0
    || typeof dayIndex !== 'number'
    || typeof timestampsPerDay !== 'number') {
    throw new Error(
      `${getEndOfDayTimestampIndex.name} requires positive number inputs.`
    );
  }
  return Math.floor((dayIndex + 1) * timestampsPerDay);
}

export function getTimestampForDay(dayIndex, meta, isStart = true) {
  // regular consists of an array of arrays, where the first array
  // index corresponds to the day, second is always a single element array
  return meta.tradingPeriods.regular[dayIndex][0][isStart ? 'start' : 'end'];
}
