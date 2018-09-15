import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../app';
import { reducer } from '../../reducers';

const store = createStore(
  reducer,
  compose(applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const AppWrapper = () => (
  <Provider store={ store }>
    <AppContainer>
      <MuiThemeProvider>
        <Router>
          <App />
        </Router>
      </MuiThemeProvider>
    </AppContainer>
  </Provider>
);

export default AppWrapper;