import React from 'react';
import { Link } from 'react-router-dom';

import {
  APP_NAME,
  URL_GLOSSARY,
  URL_HOME
} from '../../../constants';
import './navBar.css';

const NavBar = () => {
  return (
    <div className='navBar'>
      <span>{ APP_NAME }</span>
      <ul className='nav'>
        <li><Link to={ URL_HOME }>Home</Link></li>
        <li><Link to={ URL_GLOSSARY }>Glossary</Link></li>
      </ul>
    </div>
  );
};
export default NavBar;