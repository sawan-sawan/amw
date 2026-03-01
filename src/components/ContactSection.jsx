import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './ContactSection.css'; 

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Header Section */}
        <div className="contact-header">
          <h4 className="contact-subtitle">Reach Out</h4>
          <h2 className="contact-title">Contact & Visit Us</h2>
          <p className="contact-description">
            We'd love to help you find the perfect smartphone. Drop by or give us a call!
          </p>
        </div>

        {/* Cards Grid Section */}
        <div className="contact-grid">
          
          {/* Card 1: Visit Us */}
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <MapPin size={24} />
            </div>
            <h3 className="contact-card-title">Visit Us</h3>
            <p className="contact-card-text">
              123 Main Market, Sector 15{"\n"}City - 123456, India
            </p>
          </div>

          {/* Card 2: Call Us */}
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Phone size={24} />
            </div>
            <h3 className="contact-card-title">Call Us</h3>
            <p className="contact-card-text">
              +91 98765 43210{"\n"}+91 87654 32109
            </p>
          </div>

          {/* Card 3: Email Us */}
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Mail size={24} />
            </div>
            <h3 className="contact-card-title">Email Us</h3>
            <p className="contact-card-text">
              aroramobileworld@gmail.com
            </p>
          </div>

          {/* Card 4: Working Hours */}
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Clock size={24} />
            </div>
            <h3 className="contact-card-title">Working Hours</h3>
            <p className="contact-card-text">
              Mon – Sat: 10:00 AM – 8:00 PM{"\n"}Sunday: 11:00 AM – 5:00 PM
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;