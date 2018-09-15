import { createStore } from 'redux';

import { reducer } from '.';
import { reducer as chartTimePeriodIndex } from './chartTimePeriodIndex';
import { reducer as fetching } from './fetching';
import { reducer as search } from './search';
import { reducer as selectedStock } from './selectedStock';
import { reducer as stocks } from './stocks';
import {
  RECEIVE_SEARCH_ERROR,
  RECEIVE_STOCK,
  SET_FETCHING,
  UPDATE_CHART_TIME_PERIOD_INDEX
} from '../actions';

/* eslint-disable no-undefined */

describe('Reducers are connected to the store as expected', () => {
  let store;

  beforeAll(() => {
    store = createStore(reducer);
  });

  test('initial state matches each reducer with empty action', () => {
    expect(store.getState().chartTimePeriodIndex)
      .toEqual(chartTimePeriodIndex(4, {}));
    expect(store.getState().fetching)
      .toEqual(fetching(null, {}));
    expect(store.getState().search)
      .toEqual(search({ currentText: '', error: null }, {}));
    expect(store.getState().selectedStock)
      .toEqual(selectedStock('', {}));
    expect(store.getState().stocks)
      .toEqual(stocks({}, {}));
  });
  test('chartTimePeriodIndex reducer handles an action', () => {
    const action = {
      type: UPDATE_CHART_TIME_PERIOD_INDEX,
      index: 2
    };
    store.dispatch(action);
    expect(store.getState().chartTimePeriodIndex)
      .toEqual(chartTimePeriodIndex(2, {}));
  });
  test('fetching reducer handles an action', () => {
    const action = {
      type: SET_FETCHING,
      stockSymbol: 'MSFT'
    };
    store.dispatch(action);
    expect(store.getState().fetching)
      .toEqual(fetching('MSFT', {}));
  });
  test('search reducer handles an action', () => {
    const action = {
      type: RECEIVE_SEARCH_ERROR,
      errorMessage: 'An error has occurred.'
    };
    store.dispatch(action);
    expect(store.getState().search)
      .toEqual(
        search(
          { currentText: '', error: 'An error has occurred.' },
          {}
        )
      );
  });
  test('selectedStock reducer handles an action', () => {
    const action = {
      type: RECEIVE_STOCK,
      symbol: 'MSFT'
    };
    store.dispatch(action);
    expect(store.getState().selectedStock)
      .toEqual(selectedStock('MSFT', {}));
  });
  test('stocks reducer handles an action', () => {
    const action = {
      type: RECEIVE_STOCK,
      symbol: 'MSFT'
    };
    const receivedStock = {
      MSFT: {
        companyName: undefined,
        exchange: undefined,
        fiveDayStockData: undefined,
        lastUpdated: undefined,
        maxStockData: undefined,
        oneDayStockData: undefined,
        stockOverviewData: undefined,
        symbol: 'MSFT'
      }
    };
    store.dispatch(action);
    expect(store.getState().stocks)
      .toEqual(stocks(receivedStock, {}));
  });
});