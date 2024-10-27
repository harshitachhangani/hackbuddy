import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">HackBuddy</div>
    <div className="navbar-links">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/profile" className="navbar-link">Profile</Link>
      <Link to="/team" className="navbar-link">Team</Link>
    </div>
  </nav>
);

export default Navbar;
