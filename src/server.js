const express = require('express');
const yahooFinance = require('yahoo-finance');

const app = express();

app.get('/stocks/:symbol', (req, res) => {
  const symbol = req.params.symbol;
  const options = {
    symbol,
    from: '2016-01-01',
    to: '2017-12-25',
    period: 'm'
  };
  yahooFinance.historical(options).then(quotes => {
    console.log(JSON.stringify(quotes[0], null, 2));
    res.send(quotes);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});