import flatten from 'array-flatten';

import {
  formatAndAdjustDateForTimestamp,
  getEndOfDayTimestampIndex,
  getStartOfDayTimestampIndex,
  getTimestampForDay
} from './timestamps';

function getDatesAndTimesForOneDay(
  close,
  dayIndex,
  gmtoffset,
  numberOfDays,
  dateAndTimeFormat,
  timestamp,
  timestampIntervals
) {
  let datesTimesAndPrices = [];
  const timestampsPerDay = timestamp.length / numberOfDays;

  for (
    let i = getStartOfDayTimestampIndex(dayIndex, timestampsPerDay);
    i < getEndOfDayTimestampIndex(dayIndex, timestampsPerDay);
    i++
  ) {
    if (timestamp[i] < timestampIntervals[dayIndex].start
      || timestamp[i] > timestampIntervals[dayIndex].end) {
      continue;
    }
    datesTimesAndPrices.push({
      dateAndTime: formatAndAdjustDateForTimestamp(
        gmtoffset, timestamp[i], dateAndTimeFormat
      ),
      price: close[i]
    });
  }
  return datesTimesAndPrices;
}

function getTimestampIntervals(numberOfDays, metaData) {
  let timestampIntervals = [];
  for (let dayIndex = 0; dayIndex < numberOfDays; dayIndex++) {
    timestampIntervals.push({
      start: getTimestampForDay(dayIndex, metaData),
      end: getTimestampForDay(dayIndex, metaData, false)
    });
  }
  return timestampIntervals;
}

function getDatesTimesAndPrices(
  close,
  gmtoffset,
  numberOfDays,
  dateAndTimeFormat,
  timestamp,
  timestampIntervals
) {
  let datesTimesAndPrices = [];
  for (let dayIndex = 0; dayIndex < numberOfDays; dayIndex++) {
    const intervalOfDatesTimesAndPrices = getDatesAndTimesForOneDay(
      close,
      dayIndex,
      gmtoffset,
      numberOfDays,
      dateAndTimeFormat,
      timestamp,
      timestampIntervals
    );
    datesTimesAndPrices.push(intervalOfDatesTimesAndPrices);
  }
  return flatten(datesTimesAndPrices);
}

// numberOfDays much match the range used to obtain the intradayRes.
export function getIntradayStockData(
  intradayRes,
  numberOfDays,
  dateAndTimeFormat
) {
  const intradayData = JSON.parse(intradayRes);
  const result = intradayData.chart.result[0];
  const {
    indicators,
    meta,
    timestamp
  } = result;
  const { gmtoffset } = meta;

  // Array of objects, one for each day.
  // Each contains a start timestamp and end timestamp for that trading day.
  console.log('META:', meta);
  const timestampIntervals = getTimestampIntervals(numberOfDays, meta);

  const { close } = indicators.quote[0];
  const datesTimesAndPrices = getDatesTimesAndPrices(
    close,
    gmtoffset,
    numberOfDays,
    dateAndTimeFormat,
    timestamp,
    timestampIntervals
  );
  return datesTimesAndPrices;
}