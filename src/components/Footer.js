import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-top">
          <div className="footer-about">
            <h3 className="footer-logo">CodeCatalysta</h3>
            <p>
              A remote-first, project-based internship for future developers 
              and a chance to solve real problems.
            </p>
          </div>
          <div className="footer-links-grid">
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/curriculum">Curriculum</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Support</h4>
              <ul>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Apply</h4>
              <ul>
                <li><Link to="/apply">Application</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CodeCatalysta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 