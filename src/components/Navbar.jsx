import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar fade-in-up delay-1">
      <div className="container nav-container">
        <a href="/" className="brand-logo">TechSnippet</a>
        
        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="/#home" className="nav-link">Home</a></li>
          <li><a href="/#about" className="nav-link">About Me</a></li>
          <li><a href="/#skills" className="nav-link">Skills</a></li>
          <li><a href="/#services" className="nav-link">Services</a></li>
          <li><a href="/#portfolio" className="nav-link">Portfolio</a></li>
        </ul>
        
        <div className="nav-actions">
          <a href="/#contact" className="desktop-contact"><button className="nav-button">Contact</button></a>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="/#home" className="mobile-nav-link" onClick={closeMenu}>Home</a></li>
          <li><a href="/#about" className="mobile-nav-link" onClick={closeMenu}>About Me</a></li>
          <li><a href="/#skills" className="mobile-nav-link" onClick={closeMenu}>Skills</a></li>
          <li><a href="/#services" className="mobile-nav-link" onClick={closeMenu}>Services</a></li>
          <li><a href="/#portfolio" className="mobile-nav-link" onClick={closeMenu}>Portfolio</a></li>
          <li><a href="/#contact" className="mobile-nav-link contact-link" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
