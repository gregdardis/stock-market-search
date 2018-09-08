import flatten from 'array-flatten';
import {
  historical,
  quote
} from 'yahoo-finance';
import rp from 'request-promise';
import dateFormat from 'dateformat';

import {
  DATE_FORMAT_FIVE_DAY,
  DATE_FORMAT_ONE_DAY
} from '../../constants/formatting';
import {
  MILLISECONDS_PER_SECOND,
  QUERY_INTERVAL_FIVE_DAY,
  QUERY_INTERVAL_ONE_DAY,
  QUERY_RANGE_FIVE_DAY,
  QUERY_RANGE_ONE_DAY
} from '../../constants/numeric';
import {
  getDatesAndPrices
} from '../stockDataUtils/datesAndPricesProcessing';

import { createStock } from '../stockDataUtils/createStock';

// NOTE: this date has timezone UTC, which is incorrect but works in this
// case because we are just extracting the time
export function getAdjustedDateForTimestamp(gmtoffset, timestamp) {
  const adjustedTimestamp =
    (timestamp + gmtoffset) * MILLISECONDS_PER_SECOND;
  return new Date(adjustedTimestamp);
}

export function getDateAndTime(gmtoffset, timestamp, dateAndTimeFormat) {
  const dateAndTime = getAdjustedDateForTimestamp(gmtoffset, timestamp);
  return dateFormat(dateAndTime, dateAndTimeFormat, true);
}

export function getStartOfDayTimestampIndex(dayIndex, timestampsPerDay) {
  return Math.floor(dayIndex * timestampsPerDay);
}

export function getEndOfDayTimestampIndex(dayIndex, timestampsPerDay) {
  return Math.floor((dayIndex + 1) * timestampsPerDay);
}

// TODO: test
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
      dateAndTime: getDateAndTime(gmtoffset, timestamp[i], dateAndTimeFormat),
      price: close[i]
    });
  }
  return datesTimesAndPrices;
}

// TODO: test
// days are 0 indexed
function getTimestampForDay(dayIndex, meta, isStart = true) {
  // regular consists of an array of arrays, where the first array
  // index corresponds to the day, second is always a single element array
  return meta.tradingPeriods.regular[dayIndex][0][isStart ? 'start' : 'end'];
}

// TODO: test
function getTimestampIntervals(numberOfDays, meta) {
  let timestampIntervals = [];
  for (let dayIndex = 0; dayIndex < numberOfDays; dayIndex++) {
    timestampIntervals.push({
      start: getTimestampForDay(dayIndex, meta),
      end: getTimestampForDay(dayIndex, meta, false)
    });
  }
  return timestampIntervals;
}

// TODO: test
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

// TODO: test
// numberOfDays much match the range used to obtain the intradayRes.
function getIntradayStockData(intradayRes, numberOfDays, dateAndTimeFormat) {
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

// TODO: test
function getQueryForIntradayData(symbol, range, interval) {
  return `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}` +
  `?range=${range}&includePrePost=true&interval=${interval}` +
  '&corsDomain=finance.yahoo.com&.tsrc=finance';
}

// TODO: test
function generateStockDataRequestError(functionName, err) {
  return `Failed in ${functionName} with error: ${err}`;
}

// TODO: test
export function requestQuote(symbol, callback) {
  const modules = [
    'summaryDetail',
    'defaultKeyStatistics',
    'financialData',
    'price'
  ];
  quote({
    symbol,
    modules
  }).then(
    stockQuote => {
      modules.forEach(module => {
        if (!stockQuote[module]) {
          throw new Error(`Module '${module}' was not found.`);
        }
      });
      callback(null, createStock(stockQuote));
    }
  ).catch(err => {
    callback(
      generateStockDataRequestError(requestQuote.name, err)
    );
  });
}

// TODO: test
export function requestMaxStockData(symbol, callback) {
  historical({
    // gets all data because we didn't specify from/to
    symbol,
    period: 'd'
  }).then(
    dailyData => {
      if (!dailyData[0]) {
        throw new Error('Historical data was not found.');
      }
      callback(null, getDatesAndPrices(dailyData));
    }
  ).catch(err => {
    callback(
      generateStockDataRequestError(requestMaxStockData.name, err)
    );
  });
}

// TODO: test
export function requestOneDayStockData(symbol, callback) {
  const queryOneDay = getQueryForIntradayData(
    symbol,
    QUERY_RANGE_ONE_DAY,
    QUERY_INTERVAL_ONE_DAY
  );
  rp(queryOneDay)
    .then(oneDayRes => {
      const oneDay = 1;
      callback(
        null,
        getIntradayStockData(oneDayRes, oneDay, DATE_FORMAT_ONE_DAY)
      );
    }).catch(err => {
      callback(
        generateStockDataRequestError(requestOneDayStockData.name, err)
      );
    });
}

// TODO: test
export function requestFiveDayStockData(symbol, callback) {
  const queryFiveDay = getQueryForIntradayData(symbol,
    QUERY_RANGE_FIVE_DAY,
    QUERY_INTERVAL_FIVE_DAY
  );
  rp(queryFiveDay)
    .then(fiveDayRes => {
      const fiveDays = 5;
      callback(
        null,
        getIntradayStockData(fiveDayRes, fiveDays, DATE_FORMAT_FIVE_DAY)
      );
    }).catch(err => {
      callback(
        generateStockDataRequestError(requestFiveDayStockData.name, err)
      );
    });
}