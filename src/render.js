import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';

// // example action
// const myAction = {
//   type: 'UPDATE_SEARCH_TERM',
//   searchTerm: 'GOOG'
// };

// takes the old state and an action,
// then returns the new state
const searchReducer = (state = 'asdfff', action) => {
  switch (action.type) {
  case 'UPDATE_SEARCH_TERM':
    return action.searchTerm;
  default:
    return state;
  }
};

const store = createStore(searchReducer);

const render = () => {
  ReactDOM.render(
    <App
      searchTerm={ store.getState() }
    />,
    document.getElementById('app')
  );
};

render();
store.subscribe(render);