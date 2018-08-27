import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
  withRouter
} from 'react-router-dom';

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
    url: URL_HOME,
    title: 'Home'
  },
  {
    url: URL_GLOSSARY,
    title: 'Glossary'
  }
];

class NavBar extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <div
        className='navBar'
        style={{ backgroundColor: THEME_COLOR_DARK1 }}>
        <span className='title'>{ APP_NAME }</span>
        <ul className='nav'>
          { menuItems.map(({ url, title }) => (
            <li
              className={
                url === pathname ? 'selected' : ''
              }
              key={ url }>
              <NavLink
                className='navLink'
                to={ url }
                exact={ true }>{ title }</NavLink>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}
NavBar.propTypes = {
  location: PropTypes.object
};
export default withRouter(NavBar);