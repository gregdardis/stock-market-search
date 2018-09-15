import React from 'react';
import {
  Route
} from 'react-router-dom';

import {
  URL_GLOSSARY,
  URL_HOME
} from '../../../constants/routes';
import Home from '../home';
import Glossary from '../glossary';
import NavBar from '../navBar';
import './app.css';

const App = () => (
  <div className='app'>
    <NavBar />
    <Route exact path={ URL_HOME } component={ Home }/>
    <Route path={ URL_GLOSSARY } component={ Glossary }/>
  </div>
);

export default App;