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

app.get('/api/stocks/:symbol', (req, res) => {
  // const symbol = req.params.symbol;
  // const options = {
  //   symbol,
  //   from: '2016-01-01',
  //   to: '2017-12-25',
  //   period: 'm'
  // };
  res.send(stock);
  // yahooFinance.historical(options).then(quotes => {
  //   console.log(JSON.stringify(quotes[0], null, 2));
  //   res.send(quotes);
  // });
});

const port = 3000;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});