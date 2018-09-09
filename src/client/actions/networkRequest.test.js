import { expect } from 'chai';
import sinon from 'sinon';

import * as networkRequest from './networkRequest';
import { mockStockData } from './testData';

describe('networkRequest actions', () => {
  it('should create an action to set chart to receive a stock', () => {
    const clock = sinon.useFakeTimers();

    const stockData = {
      ...mockStockData
    };

    const expectedAction = {
      type: networkRequest.RECEIVE_STOCK,
      receivedAt: Date.now(),
      ...mockStockData
    };

    expect(networkRequest.receiveStock(stockData))
      .to
      .deep
      .equal(expectedAction);

    clock.restore();
  });

  it('should create an action to set fetching to true for a stock', () => {
    const stockSymbol = mockStockData.symbol;
    const expectedAction = {
      type: networkRequest.SET_FETCHING,
      stockSymbol
    };
    expect(networkRequest.setFetching(stockSymbol))
      .to
      .deep
      .equal(expectedAction);
  });
});