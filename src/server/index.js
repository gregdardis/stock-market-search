import express from 'express';
import {
  quote,
  historical
} from 'yahoo-finance';
import rp from 'request-promise';
import dateFormat from 'dateformat';

import * as constants from '../constants';
import { port } from './config';
import { formatDateForMaxStockData } from '../utils/dateUtils';

const app = express();

const convertDecimalToPercent = decimal => (
  decimal * 100
);

const calculateFcfy = (freeCashflow, marketCap) => {
  const freeCashflowNum = parseInt(freeCashflow);
  const marketCapNum = parseInt(marketCap);
  return convertDecimalToPercent(freeCashflowNum / marketCapNum);
};

const createStockDataEntry = (value, options = {}) => {
  const {
    optionalValue,
    valueSuffix = '',
    optionalValueSuffix = ''
  } = options;
  return {
    value,
    optionalValue,
    valueSuffix,
    optionalValueSuffix
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
    [constants.LABEL_PREVIOUS_CLOSE]: createStockDataEntry(previousClose),
    [constants.LABEL_CURRENT_PRICE]: createStockDataEntry(currentPrice),
    [constants.LABEL_OPEN]: createStockDataEntry(open),
    [constants.LABEL_HIGH]: createStockDataEntry(dayHigh),
    [constants.LABEL_LOW]: createStockDataEntry(dayLow),
    [constants.LABEL_DIVIDEND]: createStockDataEntry(
      dividendYield,
      {
        optionalValue: dividendRate,
        optionalValueSuffix: constants.OPTIONAL_VALUE_SUFFIX_DIVIDEND
      }
    ),
    [constants.LABEL_MARKET_CAP]: createStockDataEntry(marketCap),
    [constants.LABEL_VOLUME]: createStockDataEntry(
      volume,
      {
        optionalValue: averageVolume
      }
    ),
    [constants.LABEL_PE_RATIO]: createStockDataEntry(
      trailingPE,
      {
        optionalValue: trailingEps
      }
    ),
    [constants.LABEL_ROE]: createStockDataEntry(
      convertDecimalToPercent(returnOnEquity),
      {
        valueSuffix: constants.VALUE_SUFFIX_ROE
      }
    ),
    [constants.LABEL_FCFY]: createStockDataEntry(
      calculateFcfy(freeCashflow, marketCap),
      {
        valueSuffix: constants.VALUE_SUFFIX_FCFY
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
    (timestamp + gmtoffset) * constants.MILLISECONDS_PER_SECOND;
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

// Could be buggy depending on how the timestamps in their API are given.
// Couldn't find info on this so will need to test at certain times of day.
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
  const dateAndTimeFormat = (numberOfDays === constants.ONE_DAY)
    ? constants.DATE_FORMAT_ONE_DAY
    : constants.DATE_FORMAT_FIVE_DAY;

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
const getEndTimestampForDay = (dayIndex, meta) =>
  meta.tradingPeriods.regular[dayIndex][0].end;

// days are 0 indexed
const getStartTimestampForDay = (dayIndex, meta) =>
  meta.tradingPeriods.regular[dayIndex][0].start;

const getTimestampIntervals = (numberOfDays, meta) => {
  let timestampIntervals = [];
  for (let dayIndex = 0; dayIndex < numberOfDays; dayIndex++) {
    timestampIntervals.push({
      start: getStartTimestampForDay(dayIndex, meta),
      end: getEndTimestampForDay(dayIndex, meta)
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
  // TODO: somehow extract this string to constants? Tagged template?
  return `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}` +
  `?range=${range}&includePrePost=true&interval=${interval}` +
  '&corsDomain=finance.yahoo.com&.tsrc=finance';
};

// TODO: the nesting in here is horrible, we need to refactor. 
// We should be doing these multiple API calls in parallel somehow anyway.
// I maybe have an idea of how.
app.get('/api/stocks/:symbol', (req, res) => {
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
      historical({
        // gets all data because we didn't specify from/to
        symbol,
        period: 'd'
      }).then(
        dailyData => {
          if (!dailyData[0]) {
            throw new Error('Historical data was not found.');
          }
          stock.maxStockData = getDatesAndPrices(dailyData);

          const queryOneDay = getQueryForIntradayData(
            symbol,
            constants.QUERY_RANGE_ONE_DAY,
            constants.QUERY_INTERVAL_ONE_DAY
          );
          rp(queryOneDay)
            .then(oneDayRes => {
              stock.oneDayStockData = getIntradayStockData(
                oneDayRes,
                constants.ONE_DAY
              );

              const queryFiveDay = getQueryForIntradayData(symbol,
                constants.QUERY_RANGE_FIVE_DAY,
                constants.QUERY_INTERVAL_FIVE_DAY
              );
              rp(queryFiveDay)
                .then(fiveDayRes => {
                  stock.fiveDayStockData = getIntradayStockData(
                    fiveDayRes,
                    constants.FIVE_DAYS
                  );
                  res.send(stock);
                });
            });
        });
    }

  ).catch(() =>
    res.status(404).send(constants.ERROR_MESSAGE_STOCK_NOT_FOUND)
  );
});

// if statement stops a second server from trying to run on the same
// port when tests are running on server functions
if (!module.parent) {
  app.listen(port, () =>
    console.log(`app is listening on port ${port}`)
  );
}