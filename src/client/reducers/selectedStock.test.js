import { expect } from 'chai';

import { reducer } from './selectedStock';
import {
  RECEIVE_STOCK,
  SET_STOCK_FROM_MEM_CACHE
} from '../actions';

/* eslint-disable no-undefined */

describe('selectedStock reducer', () => {
  const previousStockSymbol = 'GOOG';
  const currentStockSymbol = 'MSFT';
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.equal('');
  });
  it('should handle RECEIVE_STOCK', () => {
    expect(
      reducer(
        previousStockSymbol,
        {
          type: RECEIVE_STOCK,
          symbol: currentStockSymbol
        }
      )
    ).to.equal(currentStockSymbol);
  });
  it('should handle SET_STOCK_FROM_MEM_CACHE', () => {
    expect(
      reducer(
        previousStockSymbol,
        {
          type: SET_STOCK_FROM_MEM_CACHE,
          symbol: currentStockSymbol
        }
      )
    ).to.equal(currentStockSymbol);
  });
});