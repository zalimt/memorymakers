import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer className="mm-footer">
    <div className="mm-footer-content">
      <span>© {new Date().getFullYear()} Memory Makers Group. All rights reserved.</span>
      <nav className="mm-footer-nav">
        <a href="#" className="mm-footer-link">Home</a>
        <a href="#brands" className="mm-footer-link">Brands</a>
        <a href="#advantages" className="mm-footer-link">Advantages</a>
        <a href="#contact" className="mm-footer-link">Contact</a>
      </nav>
    </div>
  </footer>
);

export default Footer; 