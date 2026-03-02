import React from 'react';
import { Link } from 'react-router-dom'; // Link import kiya gaya hai
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
            <Link to="/">
              <img src={logo} alt="Arora Mobile World Logo" className="footer-custom-logo" />
            </Link>
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
              <Link to="/" className="footer-link-item">
                <ChevronRight size={16} /> Home
              </Link>
            </li>
            <li>
              <Link to="/featured-products" className="footer-link-item">
                <ChevronRight size={16} /> New Phones
              </Link>
            </li>
            <li>
              <Link to="/our-collection" className="footer-link-item">
                <ChevronRight size={16} /> Used Phones
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link-item">
                <ChevronRight size={16} /> About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link-item">
                <ChevronRight size={16} /> Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="footer-title">Contact Info</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <span>Nakodar road near Hawkers, Phillaur{"\n"}City - 144410, India</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <span>+91 97700-00582{"\n"}+91 96965-70007</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon" />
              <span>aroramobileworld@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} className="footer-contact-icon" />
              <span>  Mon – Sat: 10:00 AM – 8:00 PM{"\n"}Sunday: 11:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div>© 2026 Arora Mobile World. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;