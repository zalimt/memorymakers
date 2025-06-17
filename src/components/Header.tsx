import React from 'react';
import './Header.scss';

const Header = () => (
  <header className="mm-header">
    <div className="mm-header-logo">MEMORY MAKERS</div>
    <nav className="mm-header-nav">
      <a href="#" className="mm-header-link">Home</a>
      <a href="#brands" className="mm-header-link">Brands</a>
      <a href="#advantages" className="mm-header-link">Advantages</a>
      <a href="#contact" className="mm-header-link">Contact</a>
    </nav>
  </header>
);

export default Header; 