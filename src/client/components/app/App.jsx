import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from '../home';
import Glossary from '../glossary';
import NavBar from '../navBar';
import './app.css';

const App = () => (
  <Router>
    <div className='app'>
      <NavBar />
      <Route exact path="/" component={ Home }/>
      <Route path="/glossary" component={ Glossary }/>
    </div>
  </Router>
);

export default App;