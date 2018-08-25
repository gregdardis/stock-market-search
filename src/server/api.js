import express from 'express';
import async from 'async';

import { ERROR_MESSAGE_STOCK_NOT_FOUND } from '../constants';
import {
  requestFiveDayStockData,
  requestMaxStockData,
  requestOneDayStockData,
  requestQuote
} from '../utils/apiUtils/chartData';

const router = express.Router();

router.get('/stocks/:symbol', (req, res) => {
  const symbol = req.params.symbol;
  async.parallel({
    stock: callback => {
      requestQuote(symbol, callback);
    },
    maxStockData: callback => {
      requestMaxStockData(symbol, callback);
    },
    oneDayStockData: callback => {
      requestOneDayStockData(symbol, callback);
    },
    fiveDayStockData: callback => {
      requestFiveDayStockData(symbol, callback);
    }
  }, (err, results) => {
    if (err) {
      console.log(`ERROR!!: ${err}`);
      return res.status(404).send(ERROR_MESSAGE_STOCK_NOT_FOUND);
    }
    const stock = results.stock;
    for (const key in results) {
      if (!results.hasOwnProperty(key) || key === 'stock') {
        continue;
      }
      stock[key] = results[key];
    }
    return res.send(stock);
  });
});

export default router;