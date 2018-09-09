import { expect } from 'chai';

import { reducer } from './fetching';
import {
  RECEIVE_SEARCH_ERROR,
  RECEIVE_STOCK,
  SET_FETCHING
} from '../actions';

/* eslint-disable no-undefined */

const mockStockSymbol = 'JWN';

describe('fetching reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.equal(null);
  });
  it('should handle SET_FETCHING', () => {
    expect(
      reducer(
        null,
        {
          type: SET_FETCHING,
          stockSymbol: mockStockSymbol
        }
      )
    ).to.equal(mockStockSymbol);
  });
  it('should handle RECEIVE_SEARCH_ERROR', () => {
    expect(
      reducer(
        mockStockSymbol,
        {
          type: RECEIVE_SEARCH_ERROR
        }
      )
    ).to.equal(null);
  });
  it('should handle RECEIVE_STOCK', () => {
    expect(
      reducer(
        mockStockSymbol,
        {
          type: RECEIVE_STOCK
        }
      )
    ).to.equal(null);
  });
});