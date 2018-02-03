const express = require('express');
const yahooFinanceApi1 = require('yahoo-finance');
const YahooFinanceApi2 = require('yahoo-finance-data');

const constants = require('../constants');
const config = require('./config');
const dateFormatting = require('../utils/formatting/dateFormatting');
const yahooApiCredentials = require('../../apiCredentials').yahooCredentials;

const app = express();

const yahooFinanceApi2 = new YahooFinanceApi2({
  key: yahooApiCredentials.key,
  secret: yahooApiCredentials.secret
});

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

const createStock = quote => {
  const {
    price,
    summaryDetail,
    financialData,
    defaultKeyStatistics
  } = quote;
  return {
    companyName: price.shortName,
    symbol: price.symbol,
    exchange: price.exchangeName,
    stockData: processStockData(
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
      date: dateFormatting.formatDate(date),
      price: close
    });
  });
  return datesAndPrices;
};

// TODO: the nesting in here is horrible, we need to refactor. 
// We should be doing these multiple API calls in parallel somehow anyway.
// I maybe have an idea of how.
app.get('/api/stocks/:symbol', (req, res) => {
  const modules = ['summaryDetail', 'defaultKeyStatistics', 'financialData', 'price'];
  const symbol = req.params.symbol;
  yahooFinanceApi1.quote({
    symbol,
    modules
  }).then(
    quote => {
      modules.forEach(module => {
        if (!quote[module]) {
          throw new Error(`Module '${module}' was not found.`);
        }
      });
      const stock = createStock(quote);
      yahooFinanceApi1.historical({
        // gets all data because we didn't specify from/to
        symbol,
        period: 'd'
      }).then(
        dailyData => {
          if (!dailyData[0]) {
            throw new Error('Historical data was not found.');
          }
          stock.maxStockData = getDatesAndPrices(dailyData);

          yahooFinanceApi2.getIntradayChartData(symbol)
            .then(intradayData => {
              console.log(JSON.stringify(intradayData));

              // TODO: process & send back the data
              // API is here: https://www.npmjs.com/package/yahoo-finance-data

              res.send(stock);
            });
        }
      );
    }
  ).catch(() =>
    res.status(404).send('Stock symbol not found.')
  );
});

const port = config.port;
// if statement stops a second server from trying to run on the same
// port when tests are running on server functions
if (!module.parent) {
  app.listen(port, () =>
    console.log(`app is listening on port ${port}`)
  );
}