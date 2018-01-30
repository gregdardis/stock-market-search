import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navBar'>
      <ul className='nav'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/glossary">Glossary</Link></li>
      </ul>
    </div>
  );
};
export default NavBar;