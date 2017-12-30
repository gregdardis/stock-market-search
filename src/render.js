import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import App from './App';

// takes the old state and an action,
// then returns the new state
const searchTerm = (state = '', action) => {
  switch (action.type) {
  case 'UPDATE_SEARCH_TERM':
    return action.searchTerm;
  default:
    return state;
  }
};

const store = createStore(
  combineReducers({ searchTerm }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {
  ReactDOM.render(
    <App
      searchTerm={ store.getState().searchTerm }
      updateSearchTerm={ term =>
        store.dispatch({
          type: 'UPDATE_SEARCH_TERM',
          searchTerm: term
        })
      }
    />,
    document.getElementById('app')
  );
};

render();
store.subscribe(render);