import { expect } from 'chai';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as networkRequest from './networkRequest';
import { mockStockData } from '../testData';
import { SET_CHART_TO_DEFAULT_TIME_PERIOD } from './chart';
import { RECEIVE_SEARCH_ERROR } from './search';
import {
  errorMessageStockNotFound,
  ERROR_MESSAGE_UNEXPECTED
} from '../../constants/userFacingStrings';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('networkRequest actions (synchronous)', () => {
  let clock;

  beforeAll(() => {
    clock = sinon.useFakeTimers(Date.now());
  });

  afterAll(() => {
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
});

describe('networkRequest actions (asynchronous)', () => {
  let clock;
  let store;
  const stockSymbol = mockStockData.symbol;
  const endpoint = `/api/stocks/${stockSymbol}`;

  beforeAll(() => {
    clock = sinon.useFakeTimers(Date.now());
  });

  afterAll(() => {
    clock.restore();
  });

  beforeEach(() => {
    store = mockStore({
      chartTimePeriodIndex: 4,
      fetching: null,
      currentText: '',
      error: null,
      selectedStock: '',
      stocks: {}
    });
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates RECEIVE_STOCK and SET_CHART_TO_DEFAULT_TIME_PERIOD when ' +
    'fetching stock has been done', () => {
    fetchMock.getOnce(
      endpoint,
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

    return store.dispatch(networkRequest.fetchStock(stockSymbol)).then(() => {
      expect(store.getActions())
        .to
        .deep
        .equal(expectedActions);
    });
  });
  it('creates RECEIVE_SEARCH_ERROR when fetching stock fails with 404', () => {
    fetchMock.getOnce(endpoint, 404);
    const errorMessage = errorMessageStockNotFound(stockSymbol);
    const expectedActions = [
      { type: networkRequest.SET_FETCHING, stockSymbol },
      { type: RECEIVE_SEARCH_ERROR, errorMessage }
    ];

    return store.dispatch(networkRequest.fetchStock(stockSymbol)).then(() => {
      expect(store.getActions())
        .to
        .deep
        .equal(expectedActions);
    });
  });
  it('creates RECEIVE_SEARCH_ERROR when fetching stock fails with 500', () => {
    fetchMock.getOnce(endpoint, 500);
    const errorMessage = ERROR_MESSAGE_UNEXPECTED;
    const expectedActions = [
      { type: networkRequest.SET_FETCHING, stockSymbol },
      { type: RECEIVE_SEARCH_ERROR, errorMessage }
    ];

    return store.dispatch(networkRequest.fetchStock(stockSymbol)).then(() => {
      expect(store.getActions())
        .to
        .deep
        .equal(expectedActions);
    });
  });
  it('creates RECEIVE_SEARCH_ERROR when fetching stock fails with 500', () => {
    fetchMock.getOnce(
      endpoint,
      () => {
        // Doing something unexpected (nothing),
        // which causes the outer catch to execute
      }
    );
    const errorMessage = ERROR_MESSAGE_UNEXPECTED;
    const expectedActions = [
      { type: networkRequest.SET_FETCHING, stockSymbol },
      { type: RECEIVE_SEARCH_ERROR, errorMessage }
    ];

    return store.dispatch(networkRequest.fetchStock(stockSymbol)).then(() => {
      expect(store.getActions())
        .to
        .deep
        .equal(expectedActions);
    });
  });
});