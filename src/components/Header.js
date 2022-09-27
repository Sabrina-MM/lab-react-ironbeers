import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  return (
    <header className="Header">
      <Link to="/">
        <i className="fas fa-home"></i>
      </Link>
    </header>
  );
}

export default Header;
