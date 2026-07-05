import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <NavLink to="/">Kyeongseok Lee</NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Profile</NavLink>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>Projects</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
