import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import {
  URL_GLOSSARY,
  URL_HOME
} from '../../../constants';
import Home from '../home';
import Glossary from '../glossary';
import NavBar from '../navBar';
import './app.css';

const App = () => (
  <Router>
    <div className='app'>
      <NavBar />
      <Route exact path={ URL_HOME } component={ Home }/>
      <Route path={ URL_GLOSSARY } component={ Glossary }/>
    </div>
  </Router>
);

export default App;