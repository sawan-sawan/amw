import React from 'react';
import { Heart, ChevronRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';
// UPDATE THIS PATH to wherever you save your logo file
import logo from '../assets/logoblack.png'; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Column 1: Brand Info */}
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            {/* Replaced the icon with your custom logo */}
            <img src={logo} alt="Arora Mobile World Logo" className="footer-custom-logo" />
            <h3 className="footer-brand-name">Arora Mobile World</h3>
          </div>
          <p className="footer-desc">
            Your trusted destination for new & used smartphones since 2010. Quality, trust, and the best prices — always.
          </p>
          <div className="footer-trust">
            <Heart size={16} fill="currentColor" color="#000" />
            <span>Serving happy customers since 2010</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#home" className="footer-link-item">
                <ChevronRight size={16} /> Home
              </a>
            </li>
            <li>
              <a href="#new-phones" className="footer-link-item">
                <ChevronRight size={16} /> New Phones
              </a>
            </li>
            <li>
              <a href="#used-phones" className="footer-link-item">
                <ChevronRight size={16} /> Used Phones
              </a>
            </li>
            <li>
              <a href="#about" className="footer-link-item">
                <ChevronRight size={16} /> About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="footer-link-item">
                <ChevronRight size={16} /> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="footer-title">Contact Info</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <span>123 Main Market, Sector 15, City - 123456</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <span>+91 98765 43210</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon" />
              <span>aroramobileworld@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} className="footer-contact-icon" />
              <span>Mon–Sat: 10 AM – 8 PM</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div>© 2026 Arora Mobile World. All rights reserved.</div>
        <div className="footer-credit">
          Built with <Heart size={14} fill="currentColor" color="#000" /> using caffeine.ai
        </div>
      </div>
    </footer>
  );
};

export default Footer;