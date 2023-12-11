import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className='header'>
    <nav>
      <ul className='header'>
        <li><NavLink className="navLink" to="/">Home </NavLink></li>
        <li><NavLink className="navLink" to="/posts">Posts </NavLink></li>
        <li><NavLink className="navLink" to="/contacts">Contacts </NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;