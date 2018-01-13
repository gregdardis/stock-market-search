const express = require('express');
const yahooFinance = require('yahoo-finance');

const app = express();

const stock = {
  companyName: 'Alphabet Inc Class C',
  symbol: 'GOOG',
  stockData: {
    Open: {
      value: 26.50,
      optionalValue: null,
      valueSuffix: '',
      optionalValueSuffix: ''
    },
    High: {
      value: 26.78,
      optionalValue: null,
      valueSuffix: '',
      optionalValueSuffix: ''
    },
    Low: {
      value: 25.90,
      optionalValue: null,
      valueSuffix: '',
      optionalValueSuffix: ''
    },
    Div: {
      value: 1.50,
      optionalValue: 6.04,
      valueSuffix: '',
      optionalValueSuffix: '%'
    },
    'Mkt Cap': {
      value: 1,
      optionalValue: null,
      valueSuffix: 'B',
      optionalValueSuffix: ''
    },
    Volume: {
      value: 403214,
      optionalValue: 532423,
      valueSuffix: '',
      optionalValueSuffix: ''
    },
    'P/E Ratio': {
      value: 50,
      optionalValue: 0.02,
      valueSuffix: '',
      optionalValueSuffix: ''
    },
    ROE: {
      value: 21,
      optionalValue: null,
      valueSuffix: '%',
      optionalValueSuffix: ''
    },
    FCFY: {
      value: 10,
      optionalValue: null,
      valueSuffix: '%',
      optionalValueSuffix: ''
    }
  }
};

// summaryDetail: dayHigh, dayLow, open, marketCap, volume, averageVolume, 
// dividendYield, dividendRate, trailingPE

// financialData: returnOnEquity, freeCashFlow

// defaultKeyStatistics: trailingEps

const convertDecimalToPercent = decimal => (
  decimal * 100
);

const calculateFcfy = (freeCashflow, marketCap) => {
  const freeCashflowNum = parseInt(freeCashflow);
  const marketCapNum = parseInt(marketCap);
  return convertDecimalToPercent(freeCashflowNum / marketCapNum);
};

const createStockDataEntry = (value, optionalValue, valueSuffix = '', optionalValueSuffix = '') => ({
  value,
  optionalValue,
  valueSuffix,
  optionalValueSuffix
});

const processStockData = quote => {
  const { summaryDetail, financialData, defaultKeyStatistics } = quote;
  const stockData = {
    Open: createStockDataEntry(summaryDetail.open),
    High: createStockDataEntry(summaryDetail.dayHigh),
    Low: createStockDataEntry(summaryDetail.dayLow),
    Div: createStockDataEntry(summaryDetail.dividendYield, summaryDetail.dividendRate, '', '%'),
    'Mkt Cap': createStockDataEntry(summaryDetail.marketCap),
    Volume: createStockDataEntry(summaryDetail.volume, summaryDetail.averageVolume),
    'P/E Ratio': createStockDataEntry(summaryDetail.trailingPE, defaultKeyStatistics.trailingEps),
    ROE: createStockDataEntry(convertDecimalToPercent(financialData.returnOnEquity), null, '%'),
    FCFY: createStockDataEntry(calculateFcfy(financialData.freeCashflow, summaryDetail.marketCap), null, '%')
  };
  // console.log(stockData);
  console.log(defaultKeyStatistics);
  return stockData;
};

const createStock = quote => ({
  companyName: quote.price.shortName,
  symbol: quote.price.symbol,
  stockData: processStockData(quote)
});

app.get('/api/stocks/:symbol', (req, res) => {
  const symbol = req.params.symbol;
  // const options = {
  //   symbol,
  //   from: '2016-01-01',
  //   to: '2017-12-25',
  //   period: 'm'
  // };
  yahooFinance.quote({
    symbol,
    modules: ['summaryDetail', 'defaultKeyStatistics', 'financialData', 'price']
  }).then(
    quote => res.send(createStock(quote)),
    error => console.log(error)
  );

  // yahooFinance.historical(options).then(quotes => {
  //   console.log(JSON.stringify(quotes[0], null, 2));
  //   res.send(quotes);
  // });
});

const port = 3000;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});