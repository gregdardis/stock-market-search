import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import AppWrapper from './components/appWrapper';
import { reducer } from './reducers';

const store = createStore(
  reducer,
  compose(applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
);

ReactDOM.render(
  <AppWrapper store={ store } />,
  document.getElementById('app')
);