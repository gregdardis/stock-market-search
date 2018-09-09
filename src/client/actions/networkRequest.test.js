import { expect } from 'chai';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as networkRequest from './networkRequest';
import { mockStockData } from './testData';
import { SET_CHART_TO_DEFAULT_TIME_PERIOD } from './chart';
import { RECEIVE_SEARCH_ERROR } from './search';
import { errorMessageStockNotFound } from '../../constants/userFacingStrings';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('networkRequest actions', () => {
  let clock;
  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });
  afterEach(() => {
    clock.restore();
    fetchMock.restore();
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
      expect(store.getActions())
        .to
        .deep
        .equal(expectedActions);
    });
  });

  it('creates RECEIVE_SEARCH_ERROR when fetching stock fails with 404', () => {
    const stockSymbol = mockStockData.symbol;
    fetchMock.mock(`/api/stocks/${stockSymbol}`, 404);

    const errorMessage = errorMessageStockNotFound(stockSymbol);
    const expectedActions = [
      { type: networkRequest.SET_FETCHING, stockSymbol },
      { type: RECEIVE_SEARCH_ERROR, errorMessage }
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
      expect(store.getActions())
        .to
        .deep
        .equal(expectedActions);
    });
  });
});