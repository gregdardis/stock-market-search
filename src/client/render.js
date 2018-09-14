import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import { reducer } from './reducers';

const store = createStore(
  reducer,
  compose(applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const render = Component => {
  ReactDOM.render(
    <Provider store={ store }>
      <AppContainer>
        <MuiThemeProvider>
          <Router>
            <Component />
          </Router>
        </MuiThemeProvider>
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/app', () => {
    render(App);
  });
}