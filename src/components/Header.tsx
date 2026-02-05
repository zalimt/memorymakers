import React, { useState, useEffect } from 'react';
import './Header.scss';
import mmLogo from '../assets/mm-logo.svg';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="/" className="logo">
          <img src={mmLogo} alt="Memory Makers Logo" />
        </a>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#brands" onClick={closeMenu}>Brands</a>
          <a href="#partners" onClick={closeMenu}>Partners</a>
          <a href="#connect" onClick={closeMenu}>Connect</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="https://p-travelassist.com" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="mm-header-link-accent">PTA</a>
          <a href="https://hrsummit-mmg.com" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="mm-header-link-accent">MMG HR SUMMIT</a>
        </nav>

        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header; 