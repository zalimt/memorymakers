import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer className="mm-footer">
    <div className="mm-footer-content">
      <span>© {new Date().getFullYear()} Memory Makers Group. All rights reserved.</span>
      <nav className="mm-footer-nav">
        <a href="#brands" className="mm-footer-link">Brands</a>
        <a href="#founders" className="mm-footer-link">Founders</a>
        <a href="#partners" className="mm-footer-link">Partners</a>
        <a href="#connect" className="mm-footer-link">Connect</a>
      </nav>
    </div>
  </footer>
);

export default Footer; 