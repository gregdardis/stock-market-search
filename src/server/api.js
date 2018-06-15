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

router.get('/stocks/:symbol', (req, res) => {
  const modules = [
    'summaryDetail',
    'defaultKeyStatistics',
    'financialData',
    'price'
  ];
  const symbol = req.params.symbol;
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
      const stock = createStock(stockQuote);
      async.parallel({
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
        for (const key in results) {
          if (!results.hasOwnProperty(key)) {
            continue;
          }
          stock[key] = results[key];
        }
        res.send(stock);
      });
    })
    .catch(() =>
      res.status(404).send(ERROR_MESSAGE_STOCK_NOT_FOUND)
    );
});

export default router;