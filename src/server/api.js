import express from 'express';
import {
  quote,
  historical
} from 'yahoo-finance';
import rp from 'request-promise';
import dateFormat from 'dateformat';
import async from 'async';

import { formatDateForMaxStockData } from '../utils/dateUtils';
import {
  DATE_FORMAT_FIVE_DAY,
  DATE_FORMAT_ONE_DAY,
  ERROR_MESSAGE_STOCK_NOT_FOUND,
  FIVE_DAYS,
  LABEL_CURRENT_PRICE,
  LABEL_DIVIDEND,
  LABEL_FCFY,
  LABEL_HIGH,
  LABEL_LOW,
  LABEL_MARKET_CAP,
  LABEL_OPEN,
  LABEL_PE_RATIO,
  LABEL_PREVIOUS_CLOSE,
  LABEL_ROE,
  LABEL_VOLUME,
  MILLISECONDS_PER_SECOND,
  NUMBER_FORMAT_DEFAULT,
  NUMBER_FORMAT_PERCENT,
  NUMBER_FORMAT_SHORT_SUFFIXED,
  ONE_DAY,
  QUERY_INTERVAL_FIVE_DAY,
  QUERY_INTERVAL_ONE_DAY,
  QUERY_RANGE_FIVE_DAY,
  QUERY_RANGE_ONE_DAY
} from '../constants';

const router = express.Router();

const calculateFcfy = (freeCashflow, marketCap) => {
  const freeCashflowNum = parseInt(freeCashflow);
  const marketCapNum = parseInt(marketCap);
  return freeCashflowNum / marketCapNum;
};

const createStockDataEntry = (value, options = {}) => {
  const {
    optionalValue,
    valueFormat = NUMBER_FORMAT_DEFAULT,
    optionalValueFormat = NUMBER_FORMAT_DEFAULT
  } = options;
  return {
    value,
    optionalValue,
    valueFormat,
    optionalValueFormat
  };
};

const processStockData = ({
  averageVolume,
  currentPrice,
  dayHigh,
  dayLow,
  dividendRate,
  dividendYield,
  freeCashflow,
  marketCap,
  open,
  previousClose,
  returnOnEquity,
  trailingEps,
  trailingPE,
  volume
}) => {
  return {
    [LABEL_PREVIOUS_CLOSE]: createStockDataEntry(previousClose),
    [LABEL_CURRENT_PRICE]: createStockDataEntry(currentPrice),
    [LABEL_OPEN]: createStockDataEntry(open),
    [LABEL_HIGH]: createStockDataEntry(dayHigh),
    [LABEL_LOW]: createStockDataEntry(dayLow),
    [LABEL_DIVIDEND]: createStockDataEntry(
      dividendRate,
      {
        optionalValue: dividendYield,
        optionalValueFormat: NUMBER_FORMAT_PERCENT
      }
    ),
    [LABEL_MARKET_CAP]: createStockDataEntry(marketCap,
      {
        valueFormat: NUMBER_FORMAT_SHORT_SUFFIXED
      }),
    [LABEL_VOLUME]: createStockDataEntry(
      volume,
      {
        valueFormat: NUMBER_FORMAT_SHORT_SUFFIXED,
        optionalValue: averageVolume,
        optionalValueFormat: NUMBER_FORMAT_SHORT_SUFFIXED
      }
    ),
    [LABEL_PE_RATIO]: createStockDataEntry(
      trailingPE,
      {
        optionalValue: trailingEps
      }
    ),
    [LABEL_ROE]: createStockDataEntry(
      returnOnEquity,
      {
        valueFormat: NUMBER_FORMAT_PERCENT
      }
    ),
    [LABEL_FCFY]: createStockDataEntry(
      calculateFcfy(freeCashflow, marketCap),
      {
        valueFormat: NUMBER_FORMAT_PERCENT
      }
    )
  };
};

const createStock = stockQuote => {
  const {
    price,
    summaryDetail,
    financialData,
    defaultKeyStatistics
  } = stockQuote;
  return {
    companyName: price.shortName,
    symbol: price.symbol,
    exchange: price.exchangeName,
    stockOverviewData: processStockData(
      Object.assign(
        {},
        summaryDetail,
        financialData,
        defaultKeyStatistics
      )
    )
  };
};

// Used for historical() data obtained using period 'd'
const getDatesAndPrices = dailyData => {
  let datesAndPrices = [];
  dailyData.forEach(({
    date,
    close
  }) => {
    datesAndPrices.unshift({
      date: formatDateForMaxStockData(date),
      price: close
    });
  });
  return datesAndPrices;
};

// NOTE: this date has timezone UTC, which is incorrect but works in this
// case because we are just extracting the time
const getAdjustedDateForTimestamp = (gmtoffset, timestamp) => {
  const adjustedTimestamp =
    (timestamp + gmtoffset) * MILLISECONDS_PER_SECOND;
  return new Date(adjustedTimestamp);
};

const getDateAndTime = (gmtoffset, timestamp, dateAndTimeFormat) => {
  const dateAndTime = getAdjustedDateForTimestamp(gmtoffset, timestamp);
  return dateFormat(dateAndTime, dateAndTimeFormat, true);
};

const getStartOfDayTimestampIndex = (dayIndex, timestampsPerDay) =>
  Math.floor(dayIndex * timestampsPerDay);

const getEndOfDayTimestampIndex = (dayIndex, timestampsPerDay) =>
  Math.floor((dayIndex + 1) * timestampsPerDay);

const getDatesAndTimesForOneDay = (
  close,
  dayIndex,
  gmtoffset,
  numberOfDays,
  timestamp,
  timestampIntervals
) => {
  let datesTimesAndPrices = [];
  const timestampsPerDay = timestamp.length / numberOfDays;
  const dateAndTimeFormat = (numberOfDays === ONE_DAY)
    ? DATE_FORMAT_ONE_DAY
    : DATE_FORMAT_FIVE_DAY;

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
};

// days are 0 indexed
const getTimestampForDay = (dayIndex, meta, isStart = true) =>
  // regular consists of an array of arrays, where the first array
  // index corresponds to the day, second is always a single element array
  meta.tradingPeriods.regular[dayIndex][0][isStart ? 'start' : 'end'];

const getTimestampIntervals = (numberOfDays, meta) => {
  let timestampIntervals = [];
  for (let dayIndex = 0; dayIndex < numberOfDays; dayIndex++) {
    timestampIntervals.push({
      start: getTimestampForDay(dayIndex, meta),
      end: getTimestampForDay(dayIndex, meta, false)
    });
  }
  return timestampIntervals;
};

const getDatesTimesAndPrices = (
  close,
  gmtoffset,
  numberOfDays,
  timestamp,
  timestampIntervals
) => {
  let datesTimesAndPrices = [];
  for (let dayIndex = 0; dayIndex < numberOfDays; dayIndex++) {
    const intervalOfDatesTimesAndPrices = getDatesAndTimesForOneDay(
      close,
      dayIndex,
      gmtoffset,
      numberOfDays,
      timestamp,
      timestampIntervals
    );
    datesTimesAndPrices = datesTimesAndPrices.concat(
      intervalOfDatesTimesAndPrices
    );
  }
  return datesTimesAndPrices;
};

// numberOfDays much match the range used to obtain the intradayRes.
const getIntradayStockData = (intradayRes, numberOfDays) => {
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
    timestamp,
    timestampIntervals
  );
  return datesTimesAndPrices;
};

const getQueryForIntradayData = (symbol, range, interval) => {
  return `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}` +
  `?range=${range}&includePrePost=true&interval=${interval}` +
  '&corsDomain=finance.yahoo.com&.tsrc=finance';
};

const requestMaxStockData = (symbol, callback) => {
  historical({
    // gets all data because we didn't specify from/to
    symbol,
    period: 'd'
  }).then(
    dailyData => {
      console.log('max');
      if (!dailyData[0]) {
        throw new Error('Historical data was not found.');
      }
      callback(null, getDatesAndPrices(dailyData));
    });
};

const requestOneDayStockData = (symbol, callback) => {
  const queryOneDay = getQueryForIntradayData(
    symbol,
    QUERY_RANGE_ONE_DAY,
    QUERY_INTERVAL_ONE_DAY
  );
  rp(queryOneDay)
    .then(oneDayRes => {
      console.log('one');
      callback(null, getIntradayStockData(oneDayRes, ONE_DAY));
    });
};

const requestFiveDayStockData = (symbol, callback) => {
  const queryFiveDay = getQueryForIntradayData(symbol,
    QUERY_RANGE_FIVE_DAY,
    QUERY_INTERVAL_FIVE_DAY
  );
  rp(queryFiveDay)
    .then(fiveDayRes => {
      console.log('five');
      callback(null, getIntradayStockData(fiveDayRes, FIVE_DAYS));
    });
};

router.get('/stocks/:symbol', (req, res) => {
  const modules = [
    'summaryDetail',
    'defaultKeyStatistics',
    'financialData',
    'price'
  ];
  const symbol = req.params.symbol;
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
      const stock = createStock(stockQuote);
      async.parallel({
        maxStockData: callback => {
          requestMaxStockData(symbol, callback);
        },
        oneDayStockData: callback => {
          requestOneDayStockData(symbol, callback);
        },
        fiveDayStockData: callback => {
          requestFiveDayStockData(symbol, callback);
        }
      }, (err, results) => {
        for (const key in results) {
          if (!results.hasOwnProperty(key)) {
            continue;
          }
          stock[key] = results[key];
        }
        res.send(stock);
      });
    })
    .catch(() =>
      res.status(404).send(ERROR_MESSAGE_STOCK_NOT_FOUND)
    );
});

export default router;