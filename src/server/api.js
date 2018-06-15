import express from 'express';
import { quote } from 'yahoo-finance';
import async from 'async';

import { ERROR_MESSAGE_STOCK_NOT_FOUND } from '../constants';
import {
  createStock,
  requestFiveDayStockData,
  requestMaxStockData,
  requestOneDayStockData
} from '../utils/apiUtils/chartData';

const router = express.Router();

const requestQuote = (symbol, callback) => {
  const modules = [
    'summaryDetail',
    'defaultKeyStatistics',
    'financialData',
    'price'
  ];
  quote({
    symbol,
    modules
  }).then(
    stockQuote => {
      modules.forEach(module => {
        if (!stockQuote[module]) {
          throw new Error(`Module '${module}' was not found.`);
        }
      });
      callback(null, createStock(stockQuote));
    }
  );
};

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