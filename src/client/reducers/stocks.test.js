import { expect } from 'chai';
import sinon from 'sinon';

import { reducer } from './stocks';
import { RECEIVE_STOCK } from '../actions';
import { mockStockData } from '../testData';

/* eslint-disable no-undefined */

describe('stocks reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({});
  });
  it('should handle RECEIVE_STOCK', () => {
    const clock = sinon.useFakeTimers();
    const receivedAt = new Date();
    const action = {
      type: RECEIVE_STOCK,
      receivedAt,
      ...mockStockData
    };
    const initialState = {};
    const expectedState = {
      [mockStockData.symbol]: {
        ...mockStockData,
        lastUpdated: receivedAt
      }
    };

    expect(reducer(initialState, action)).to.deep.equal(expectedState);

    clock.restore();
  });
});