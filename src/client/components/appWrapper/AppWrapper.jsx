import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../app';

const AppWrapper = ({ store }) => (
  <Provider store={ store }>
    <MuiThemeProvider>
      <Router>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>
);
AppWrapper.propTypes = {
  store: PropTypes.object.isRequired
};
export default AppWrapper;