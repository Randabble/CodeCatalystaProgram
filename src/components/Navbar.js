import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <nav className="navbar container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          CodeCatalysta
        </Link>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" className={`navbar-link ${isActive('/about') ? 'active' : ''}`} onClick={closeMenu}>About</Link></li>
            <li><Link to="/curriculum" className={`navbar-link ${isActive('/curriculum') ? 'active' : ''}`} onClick={closeMenu}>Curriculum</Link></li>
            <li><Link to="/faq" className={`navbar-link ${isActive('/faq') ? 'active' : ''}`} onClick={closeMenu}>FAQ</Link></li>
            <li><Link to="/contact" className={`navbar-link ${isActive('/contact') ? 'active' : ''}`} onClick={closeMenu}>Contact</Link></li>
          </ul>
          <a href="https://forms.gle/iDxFS6J8rnSDVseC6" target="_blank" rel="noopener noreferrer" className="navbar-cta" onClick={closeMenu}>Apply Now</a>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 