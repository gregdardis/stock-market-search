import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import { reducer } from './reducers';

const initialState = {
  searchTerm: 'hi',
  dataItems: {
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
    Div: {
      value: 1.50,
      optionalValue: 6.04,
      valueSuffix: '',
      optionalValueSuffix: '%'
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