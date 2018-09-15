import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';

import AppWrapper from './components/appWrapper';

const render = component => {
  ReactDOM.render(
    component,
    document.getElementById('app')
  );
};

render(<AppWrapper />);

// TODO: do we need this?
// // Webpack Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./components/appWrapper', () => {
//     render(<AppWrapper />);
//   });
// }