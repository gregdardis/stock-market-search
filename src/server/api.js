import express from 'express';
import async from 'async';

import { errorMessageStockNotFound } from '../constants/userFacingStrings';
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
      return res.status(404).send(errorMessageStockNotFound(symbol));
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