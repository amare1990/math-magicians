import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Math Magicians</h1>
      <ul className="nav-bar">
        <li className="link-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : undefined)}>
            Home
          </NavLink>
        </li>
        <li className="link-separator " />
        <li className="link-item">
          <NavLink to="/calculator" className={({ isActive }) => (isActive ? 'active-link' : undefined)}>
            Calculator
          </NavLink>
        </li>
        <li className="link-separator" />
        <li className="link-item">
          <NavLink to="/quote" className={({ isActive }) => (isActive ? 'active-link' : undefined)}>
            Quote
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
