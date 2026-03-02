import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';
import { Link } from 'react-router-dom'; // Link import kiya gaya hai

import { useScrollToTop } from "../hooks/useScrollToTop";

const Hero = () => {
  useScrollToTop();
  const [activeIndex, setActiveIndex] = useState(0);

  // 4 Photos ka array
  const images = [
    { id: 1, src: "/image.png", alt: "Smartphone 0" },
    { id: 2, src: "/image5.png", alt: "Smartphone 1" },
    { id: 3, src: "/image6.png", alt: "Smartphone 2" },
    { id: 4, src: "/image4.png", alt: "Smartphone 4" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-container">
      <div className="hero-content">

        {/* Left Side: Text */}
        <div className="hero-text-section">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="badge">
            ⚡ New & Used Smartphones at Best Prices
          </motion.div>
          <h1><span className="color-silver">Arora</span> <br />
            <span className="color-orange">Mobile</span>{' '}
            <span className="color-navy">World</span></h1>
          <p>Your Trusted Destination for New & Used Smartphones. Quality devices, unbeatable prices, and service you can trust.</p>
          <div className="hero-btns">
            {/* Modern Primary Button with Smartphone SVG */}
            <Link to="/our-collection">
            <button className="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              Shop New Phones
            </button>
            </Link>

            {/* Modern Secondary Button with Price Tag SVG */}
            <Link to="/our-collection">
            <button className="btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
              Shop Used Phones
            </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Visual Section */}
        <div className="hero-visual-section">
          <div className="image-wrapper">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                className="hero-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;