const express = require('express');
const yahooFinance = require('yahoo-finance');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const options = {
  symbol: 'AAPL',
  from: '2016-01-01', 
  to: '2017-12-25',
  period: 'm'
};

yahooFinance.historical(options).then(quotes => {
  console.log(JSON.stringify(quotes[0], null, 2));
});

const port = 3000;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});