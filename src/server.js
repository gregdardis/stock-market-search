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
  dayHigh,
  dayLow,
  dividendRate,
  dividendYield,
  freeCashflow,
  marketCap,
  open,
  returnOnEquity,
  trailingEps,
  trailingPE,
  volume
}) => {
  const stockData = {
    Open: createStockDataEntry(open),
    High: createStockDataEntry(dayHigh),
    Low: createStockDataEntry(dayLow),
    Div: createStockDataEntry(
      dividendYield,
      {
        optionalValue: dividendRate,
        optionalValueSuffix: '%'
      }
    ),
    'Mkt Cap': createStockDataEntry(marketCap),
    Volume: createStockDataEntry(
      volume,
      {
        optionalValue: averageVolume
      }
    ),
    'P/E Ratio': createStockDataEntry(
      trailingPE,
      {
        optionalValue: trailingEps
      }
    ),
    ROE: createStockDataEntry(
      convertDecimalToPercent(returnOnEquity),
      {
        valueSuffix: '%'
      }
    ),
    FCFY: createStockDataEntry(
      calculateFcfy(freeCashflow, marketCap),
      {
        valueSuffix: '%'
      }
    )
  };
  return stockData;
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

app.get('/api/stocks/:symbol', (req, res) => {
  const symbol = req.params.symbol;
  yahooFinance.quote({
    symbol,
    modules: ['summaryDetail', 'defaultKeyStatistics', 'financialData', 'price']
  }).then(
    quote => res.send(createStock(quote)),
    error => console.log(error)
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

// const stock = {
//   companyName: 'Alphabet Inc Class C',
//   symbol: 'GOOG',
//   stockData: {
//     Open: {
//       value: 26.50,
//       optionalValue: null,
//       valueSuffix: '',
//       optionalValueSuffix: ''
//     },