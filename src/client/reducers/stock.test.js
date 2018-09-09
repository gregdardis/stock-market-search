import { expect } from 'chai';
import sinon from 'sinon';

import { reducer } from './stock';
import { RECEIVE_STOCK } from '../actions';
import { mockStockData } from '../testData';


/* eslint-disable no-undefined */

describe('stock reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      companyName: '',
      symbol: '',
      exchange: '',
      stockOverviewData: {}
    };
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal(initialState);
  });
  it('should handle RECEIVE_STOCK', () => {
    const clock = sinon.useFakeTimers();
    const receivedAt = new Date();

    expect(
      reducer(
        initialState,
        {
          type: RECEIVE_STOCK,
          receivedAt,
          ...mockStockData
        }
      )
    ).to.deep.equal({
      ...mockStockData,
      lastUpdated: receivedAt
    });

    clock.restore();
  });
});