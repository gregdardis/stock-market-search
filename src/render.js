import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import { reducer } from './reducers';

const initialState = {
  selectedStock: 'YAHOO',
  stocks: {
    GOOG: {
      isFetching: true,
      stockData: {}
    },
    YAHOO: {
      isFetching: false,
      lastUpdated: 1439478405547,
      stockData: {
        Open: {
          value: 26.50,
          optionalValue: null,
          valueSuffix: '',
          optionalValueSuffix: ''
        },
        High: {
          value: 26.78,
          optionalValue: null,
          valueSuffix: '',
          optionalValueSuffix: ''
        },
        Low: {
          value: 25.90,
          optionalValue: null,
          valueSuffix: '',
          optionalValueSuffix: ''
        },
        Div: {
          value: 1.50,
          optionalValue: 6.04,
          valueSuffix: '',
          optionalValueSuffix: '%'
        },
        'Mkt Cap': {
          value: 1,
          optionalValue: null,
          valueSuffix: 'B',
          optionalValueSuffix: ''
        },
        Volume: {
          value: 403214,
          optionalValue: 532423,
          valueSuffix: '',
          optionalValueSuffix: ''
        },
        'P/E Ratio': {
          value: 50,
          optionalValue: 0.02,
          valueSuffix: '',
          optionalValueSuffix: ''
        },
        ROE: {
          value: 21,
          optionalValue: null,
          valueSuffix: '%',
          optionalValueSuffix: ''
        },
        FCFY: {
          value: 10,
          optionalValue: null,
          valueSuffix: '%',
          optionalValueSuffix: ''
        }
      }
    }
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);