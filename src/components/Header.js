import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <h1 className="logo">Math Magicians</h1>
      <ul className="nav-bar">
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/calculator"> Calculator </NavLink>
        <NavLink to="/quote"> Quote </NavLink>
      </ul>
    </nav>
  );
}

export default Header;
