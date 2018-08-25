import React from 'react';
import { Link } from 'react-router-dom';

import {
  APP_NAME,
  THEME_COLOR_DARK1,
  URL_GLOSSARY,
  URL_HOME
} from '../../../constants';
import './navBar.css';

const NavBar = () => {
  return (
    <div
      className='navBar'
      style={{ backgroundColor: THEME_COLOR_DARK1 }}>
      <span className='title'>{ APP_NAME }</span>
      <ul className='nav'>
        <li>
          <Link
            to={ URL_HOME }
            exact="true">Home</Link>
        </li>
        <li>
          <Link
            to={ URL_GLOSSARY }
            exact="true">Glossary</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;