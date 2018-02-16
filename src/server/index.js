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

const getStartForDay = (day, meta) =>
  meta.tradingPeriods.regular[day - 1][0].start;

const getFiveDayStockData = fiveDayRes => {
  const fiveDayIntradayData = JSON.parse(fiveDayRes);
  console.log(JSON.stringify(fiveDayIntradayData, null, 2));
  const result = fiveDayIntradayData.chart.result[0];
  const {
    indicators,
    meta,
    timestamp
  } = result;
  const { gmtoffset } = meta;
  // const startDayOne = meta.tradingPeriods.regular[1][0].start; 
  const startDayOne = getStartForDay(1, meta);
  console.log('Start day 1: ' + startDayOne + '...Expected: ' + 1518445800);
  // const endDayOne = meta.tradingPeriods.regular[0][0].end;
  const startDayTwo = getStartForDay(2, meta);
  // const startDayTwo = meta.tradingPeriods.regular[0][1].start;
  console.log('Start day 2: ' + startDayTwo + '...Expected: ' + 1518532200);
  console.log('First: ' + getTime(timestamp[7], gmtoffset));
  console.log('Second time: ' + getTime(timestamp[8], gmtoffset));
  // console.log('Third time: ' + getTime(timestamp[9], gmtoffset));
  // console.log('Start time: ' + getTime(start, gmtoffset));
  // console.log('End time: ' + getTime(end, gmtoffset));
  console.log('First date: ' + new Date((timestamp[0] + gmtoffset) * constants.MILLISECONDS_PER_SECOND));
  const { close } = indicators.quote[0];

  let datesTimesAndPrices = [];
  // for (let i = 0; i < timestamp.length; i++) {
  //   if (timestamp[i] < start) {
  //     continue;
  //   }
  //   if (timestamp[i] > end) {
  //     continue;
  //   }
  //   datesTimesAndPrices.push({
  //     dateAndTime: getTime(timestamp[i], gmtoffset),
  //     price: close[i]
  //   });
  // }
  return datesTimesAndPrices;
};

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
              const intervalFiveDay = '60m'; // TODO: change back
              const queryFiveDay = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=${rangeFiveDay}&includePrePost=true&interval=${intervalFiveDay}&corsDomain=finance.yahoo.com&.tsrc=finance`;
              rp(queryFiveDay)
                .then(fiveDayRes => {
                  stock.fiveDayStockData = getFiveDayStockData(fiveDayRes);
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