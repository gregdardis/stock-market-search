import { expect } from 'chai';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as networkRequest from './networkRequest';
import { mockStockData } from './testData';
import { SET_CHART_TO_DEFAULT_TIME_PERIOD } from './chart';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('networkRequest actions', () => {
  let clock;
  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });
  afterEach(() => {
    clock.restore();
  });

  it('should create an action to set chart to receive a stock', () => {
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

  it('creates RECEIVE_STOCK and SET_CHART_TO_DEFAULT_TIME_PERIOD when ' +
    'fetching stock has been done', () => {
    const stockSymbol = mockStockData.symbol;
    fetchMock.getOnce(
      `/api/stocks/${stockSymbol}`,
      {
        body: { ...mockStockData },
        headers: { 'content-type': 'application/json' }
      }
    );

    const expectedActions = [
      { type: networkRequest.SET_FETCHING, stockSymbol },
      {
        type: networkRequest.RECEIVE_STOCK,
        receivedAt: Date.now(),
        ...mockStockData
      },
      { type: SET_CHART_TO_DEFAULT_TIME_PERIOD }
    ];

    const store = mockStore({
      chartTimePeriodIndex: 4,
      fetching: null,
      currentText: '',
      error: null,
      selectedStock: '',
      stocks: {}
    });

    return store.dispatch(networkRequest.fetchStock(stockSymbol)).then(() => {
      // return of async actions
      expect(store.getActions())
        .to
        .deep
        .equal(expectedActions);
    });
  });
});