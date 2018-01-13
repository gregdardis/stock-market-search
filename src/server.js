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
  summaryDetail,
  financialData,
  defaultKeyStatistics
}) => {
  const stockData = {
    Open: createStockDataEntry(
      summaryDetail.open
    ),
    High: createStockDataEntry(
      summaryDetail.dayHigh
    ),
    Low: createStockDataEntry(
      summaryDetail.dayLow
    ),
    Div: createStockDataEntry(
      summaryDetail.dividendYield,
      {
        optionalValue: summaryDetail.dividendRate,
        optionalValueSuffix: '%'
      }
    ),
    'Mkt Cap': createStockDataEntry(summaryDetail.marketCap),
    Volume: createStockDataEntry(
      summaryDetail.volume,
      {
        optionalValue: summaryDetail.averageVolume
      }
    ),
    'P/E Ratio': createStockDataEntry(
      summaryDetail.trailingPE,
      {
        optionalValue: defaultKeyStatistics.trailingEps
      }
    ),
    ROE: createStockDataEntry(
      convertDecimalToPercent(financialData.returnOnEquity),
      {
        valueSuffix: '%'
      }
    ),
    FCFY: createStockDataEntry(
      calculateFcfy(financialData.freeCashflow, summaryDetail.marketCap),
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
    stockData: processStockData({ summaryDetail, financialData, defaultKeyStatistics })
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
//     High: {
//       value: 26.78,
//       optionalValue: null,
//       valueSuffix: '',
//       optionalValueSuffix: ''
//     },
//     Low: {
//       value: 25.90,
//       optionalValue: null,
//       valueSuffix: '',
//       optionalValueSuffix: ''
//     },
//     Div: {
//       value: 1.50,
//       optionalValue: 6.04,
//       valueSuffix: '',
//       optionalValueSuffix: '%'
//     },
//     'Mkt Cap': {
//       value: 1,
//       optionalValue: null,
//       valueSuffix: 'B',
//       optionalValueSuffix: ''
//     },
//     Volume: {
//       value: 403214,
//       optionalValue: 532423,
//       valueSuffix: '',
//       optionalValueSuffix: ''
//     },
//     'P/E Ratio': {
//       value: 50,
//       optionalValue: 0.02,
//       valueSuffix: '',
//       optionalValueSuffix: ''
//     },
//     ROE: {
//       value: 21,
//       optionalValue: null,
//       valueSuffix: '%',
//       optionalValueSuffix: ''
//     },
//     FCFY: {
//       value: 10,
//       optionalValue: null,
//       valueSuffix: '%',
//       optionalValueSuffix: ''
//     }
//   }
// };