import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';
import { reducer } from './reducers';

const store = createStore(
  reducer,
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