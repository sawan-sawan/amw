import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logoblack.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // स्लीक और मॉडर्न कॉल आइकॉन (White)
  const CallIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        
        {/* Logo Section */}
        <div className="logo-section">
          <img src={logo} alt="AMW Logo" className="nav-logo" />
        </div>

        {/* Menu Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              <span className="nav-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
              </span>
              Home
            </a>
          </li>
          <li>
            <a href="#new" onClick={() => setIsOpen(false)}>
              <span className="nav-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </span>
              New Phones
            </a>
          </li>
          <li>
            <a href="#used" onClick={() => setIsOpen(false)}>
              <span className="nav-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
              </span>
              Used Phones
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              <span className="nav-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </span>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <span className="nav-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              Contact
            </a>
          </li>
          
          {/* Mobile Only Call Button */}
          <li className="mobile-only">
             <button className="call-btn-mobile">
               <CallIcon /> Call Us
             </button>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <button className="call-btn">
            <span className="icon" style={{ display: 'flex', alignItems: 'center' }}>
              <CallIcon />
            </span> 
            Call Us
          </button>
          
          {/* Hamburger Menu Icon */}
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span className={isOpen ? "bar top-bar" : "bar"}></span>
            <span className={isOpen ? "bar mid-bar" : "bar"}></span>
            <span className={isOpen ? "bar bot-bar" : "bar"}></span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;