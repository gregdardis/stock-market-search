import express from 'express';
import {
  quote,
  historical
} from 'yahoo-finance';
import rp from 'request-promise';
import dateFormat from 'dateformat';

import * as constants from '../constants';
import { port } from './config';
import { formatDate } from '../utils/dateUtils';

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

const getDatesAndPrices = dailyData => {
  let datesAndPrices = [];
  dailyData.forEach(({
    date,
    close
  }) => {
    datesAndPrices.unshift({
      date: formatDate(date),
      price: close
    });
  });
  return datesAndPrices;
};

const getTime = (timestamp, gmtoffset) => {
  const adjustedTimestamp =
    (timestamp + gmtoffset) * constants.MILLISECONDS_PER_SECOND;
  // NOTE: this date has timezone UTC, which is incorrect but works in this
  // case because we are just extracting the time
  const time = new Date(adjustedTimestamp);
  return dateFormat(time, 'h:MM TT', true);
};

const getDatesAndTimesForInterval = (
  close,
  gmtoffset,
  intervalIndex,
  numberOfIntervals,
  timestamp,
  timestampIntervals
) => {
  let datesTimesAndPrices = [];
  for (
    // TODO: extract into shorter methods?
    let i = Math.floor(
      intervalIndex * (timestamp.length / numberOfIntervals)
    );
    i < Math.floor(
      (intervalIndex + 1) * (timestamp.length / numberOfIntervals)
    );
    i++) {
    if (timestamp[i] < timestampIntervals[intervalIndex].start) {
      continue;
    }
    if (timestamp[i] > timestampIntervals[intervalIndex].end) {
      continue;
    }
    datesTimesAndPrices.push({
      dateAndTime: getTime(timestamp[i], gmtoffset), // TODO: make this get the date and time, not just the time
      price: close[i]
    });
  }
  return datesTimesAndPrices;
};

// days are 0 indexed
const getEndForDay = (dayIndex, meta) =>
  meta.tradingPeriods.regular[dayIndex][0].end;

// days are 0 indexed
const getStartForDay = (dayIndex, meta) =>
  meta.tradingPeriods.regular[dayIndex][0].start;

const getTimestampIntervals = (numberOfDays, meta) => {
  let timestampIntervals = [];
  for (let i = 0; i < numberOfDays; i++) {
    timestampIntervals.push({
      start: getStartForDay(i, meta),
      end: getEndForDay(i, meta)
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
  for (let i = 0; i < numberOfDays; i++) {
    const intervalDatesTimesAndPrices = getDatesAndTimesForInterval(
      close,
      gmtoffset,
      i,
      numberOfDays,
      timestamp,
      timestampIntervals
    );
    datesTimesAndPrices = datesTimesAndPrices.concat(
      intervalDatesTimesAndPrices
    );
  }
  return datesTimesAndPrices;
};

// numberOfDays much match the range used to obtain the multiDayRes
const getMultiDayStockData = (multiDayRes, numberOfDays) => {
  const multiDayIntraDayData = JSON.parse(multiDayRes);
  // console.log(JSON.stringify(multiDayIntraDayData, null, 2));
  const result = multiDayIntraDayData.chart.result[0];
  const {
    indicators,
    meta,
    timestamp
  } = result;
  const { gmtoffset } = meta;

  // array of objects, one for each day,
  // each containing a start timestamp and end timestamp for that day
  const timestampIntervals = getTimestampIntervals(numberOfDays, meta);

  console.log('First date: ' + new Date((timestamp[0] + gmtoffset) * constants.MILLISECONDS_PER_SECOND));
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

// TODO: generalize as method that gives just times for parameter number of days?
// maybe not because this would only be used for one day, otherwise you'd want the date + times
const getOneDayStockData = oneDayRes => {
  const intradayData = JSON.parse(oneDayRes);
  const result = intradayData.chart.result[0];
  const {
    indicators,
    meta,
    timestamp
  } = result;
  const {
    start,
    end,
    gmtoffset
  } = meta.currentTradingPeriod.regular;
  const { close } = indicators.quote[0];

  let timesAndPrices = [];
  // TODO: extract into methods
  for (let i = 0; i < timestamp.length; i++) {
    if (timestamp[i] < start) {
      continue;
    }
    if (timestamp[i] > end) {
      return timesAndPrices;
    }
    timesAndPrices.push({
      time: getTime(timestamp[i], gmtoffset),
      price: close[i]
    });
  }
  return timesAndPrices;
};

// TODO: the nesting in here is horrible, we need to refactor. 
// We should be doing these multiple API calls in parallel somehow anyway.
// I maybe have an idea of how.
app.get('/api/stocks/:symbol', (req, res) => {
  const modules = ['summaryDetail', 'defaultKeyStatistics', 'financialData', 'price'];
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

          const range = '1d';
          const interval = '5m';
          const queryOneDay = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=${range}&includePrePost=true&interval=${interval}&corsDomain=finance.yahoo.com&.tsrc=finance`;
          rp(queryOneDay)
            .then(oneDayRes => {
              stock.oneDayStockData = getOneDayStockData(oneDayRes);
              
              const rangeFiveDay = '5d';
              // 30m interval seems to be 60m for some reason, so using 15m instead
              const intervalFiveDay = '15m';
              const queryFiveDay = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=${rangeFiveDay}&includePrePost=true&interval=${intervalFiveDay}&corsDomain=finance.yahoo.com&.tsrc=finance`;
              rp(queryFiveDay)
                .then(fiveDayRes => {
                  stock.fiveDayStockData = getMultiDayStockData(fiveDayRes, constants.FIVE_DAYS);
                  res.send(stock);
                });
            });
        });
    }

  ).catch(() =>
    res.status(404).send('Stock symbol not found.')
  );
});

// if statement stops a second server from trying to run on the same
// port when tests are running on server functions
if (!module.parent) {
  app.listen(port, () =>
    console.log(`app is listening on port ${port}`)
  );
}