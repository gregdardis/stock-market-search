import React from 'react';
import { Link } from 'react-router-dom';

import {
  THEME_COLOR_DARK1,
  URL_GLOSSARY,
  URL_HOME
} from '../../../constants/utilityConstants';
import {
  APP_NAME
} from '../../../constants/userFacing';
import './navBar.css';

const menuItems = [
  {
    to: URL_HOME,
    title: 'Home'
  },
  {
    to: URL_GLOSSARY,
    title: 'Glossary'
  }
];

const NavBar = () => {
  return (
    <div
      className='navBar'
      style={{ backgroundColor: THEME_COLOR_DARK1 }}>
      <span className='title'>{ APP_NAME }</span>
      <ul className='nav'>
        { menuItems.map(({ to, title }) => (
          <li>
            <Link
              to={ to }
              exact="true">{ title }</Link>
          </li>
        )) }
      </ul>
    </div>
  );
};
export default NavBar;