import React from 'react';
import './Header.scss';
import mmLogo from '../assets/mm-logo.svg';

const Header = () => (
  <article className="header">
    <section className="header-section">
      <header className="mm-header">
        <a href="/" className="mm-header-logo">
          <img src={mmLogo} alt="Memory Makers Logo" className="mm-logo-img" />
        </a>
        <nav className="mm-header-nav">
          <a href="#brands" className="mm-header-link">BRANDS</a>
          <a href="#founders" className="mm-header-link">FOUNDERS</a>
          <a href="#partners" className="mm-header-link">PARTNERS</a>
          <a href="#connect" className="mm-header-link">CONNECT</a>
          <a href="https://p-travelassist.com" target='_blank' className="mm-header-link mm-header-link-accent">PTA</a>
          <a href="https://hrsummitcy.com" target='_blank' className="mm-header-link mm-header-link-accent">HR SUMMIT CY</a>
        </nav>
      </header>
    </section>
  </article>
);

export default Header; 