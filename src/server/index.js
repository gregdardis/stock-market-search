const constants = require('../constants');
const config = require('./config');

const express = require('express');
const yahooFinance = require('yahoo-finance');

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

const calculateDateYearsInPast = years => {
  const year = new Date().getFullYear() - years;
  const date = new Date();
  date.setFullYear(year);
  return date;
};

const padSingleDigitWithZero = value => {
  let num = parseInt(value);
  // need to check value because parseInt turns '12hello' into a number
  if (isNaN(value) || isNaN(num)) {
    throw new TypeError(`${padSingleDigitWithZero.name} requires a number or numeric string`);
  }
  return num < 10 ? '0' + num : num.toString();
};

const formatDate = date => {
  if (!(date instanceof Date)) {
    throw new TypeError(`${formatDate.name} requires a date`);
  }

  let day = date.getDate();
  day = padSingleDigitWithZero(day);

  // month is zero indexed
  let month = date.getMonth() + 1;
  month = padSingleDigitWithZero(month);

  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const getDatesAndPrices = quotes => {
  let datesAndPrices = [];
  quotes.forEach(({
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

app.get('/api/stocks/:symbol', (req, res) => {
  const modules = ['summaryDetail', 'defaultKeyStatistics', 'financialData', 'price'];
  const symbol = req.params.symbol;
  yahooFinance.quote({
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
      yahooFinance.historical({
        symbol: symbol,
        from: formatDate(calculateDateYearsInPast(constants.MAX_YEARS)),
        period: 'd'
      }).then(
        quotes => {
          if (!quotes[0]) {
            throw new Error('Historical data was not found.');
          }
          stock.maxStockData = getDatesAndPrices(quotes);
          res.send(stock);
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

// exports for unit testing
module.exports = Object.freeze({
  padSingleDigitWithZero,
  formatDate
});