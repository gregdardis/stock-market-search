import { expect } from 'chai';

import * as stock from './stock';
import { mockStockData } from './testData';

describe('search actions', () => {
  it('should create an action to set stock from memory cache', () => {
    const { symbol } = mockStockData;
    const expectedAction = {
      type: stock.SET_STOCK_FROM_MEM_CACHE,
      symbol
    };

    expect(stock.setStockFromMemCache(symbol))
      .to
      .deep
      .equal(expectedAction);
  });
});