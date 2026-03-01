import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 8000); 
    return () => clearInterval(interval);
  }, []);

  // 🛠️ FIX: Mobile aur Tablet par boxes ki duri (distance) kam ki hai
  const getXDist = () => {
    if (windowWidth <= 480) return 40;   /* Mobile ke liye tight gap */
    if (windowWidth <= 968) return 65;   /* Tablet ke liye medium gap */
    return 130;                          /* Desktop ke liye wide gap */
  };

  const xDist = getXDist();

  const boxes = [
    { id: 1, video: "/video1.mp4", }, 
    { id: 2, video: "/video2.mp4", },
    { id: 3, video: "/video3.mp4", },
  ];

  return (
    <section className="hero-container">
      <div className="hero-content">
        
        {/* Left Side: Text */}
        <div className="hero-text-section">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="badge">
            ⚡ New & Used Smartphones at Best Prices
          </motion.div>
          <h1>Arora <br /> <span>Mobile World</span></h1>
          <p>Your Trusted Destination for New & Used Smartphones. Quality devices, unbeatable prices, and service you can trust.</p>
          <div className="hero-btns">
            <button className="btn-white">📱 Shop New Phones</button>
            <button className="btn-outline">🏷️ Shop Used Phones</button>
          </div>
        </div>

        {/* Right Side: 8-Second Carousel Animation */}
        <div className="hero-visual-section">
          <div className="box-wrapper">
            {boxes.map((box, index) => {
              let position = "left"; 
              if (index === activeIndex) position = "center";
              else if (index === (activeIndex + 1) % 3) position = "right";

              let xValue = 0;
              let scaleValue = 0.85; 
              let zIndexValue = 1;
              let opacityValue = 0.5; 

              if (position === "center") {
                xValue = 0;
                scaleValue = 1.1; 
                zIndexValue = 10;
                opacityValue = 1; 
              } else if (position === "right") {
                xValue = xDist;
              } else if (position === "left") {
                xValue = -xDist;
              }

              return (
                <motion.div
                  key={box.id}
                  className="video-box"
                  animate={{
                    x: xValue,
                    scale: scaleValue,
                    zIndex: zIndexValue,
                    opacity: opacityValue,
                  }}
                  transition={{
                    duration: 0.8, 
                    ease: "easeInOut",
                  }}
                >
                  <video autoPlay loop muted playsInline className="hero-video">
                    <source src={box.video} type="video/mp4" />
                  </video>
                  <div className="video-overlay" style={{ background: `linear-gradient(transparent, ${box.color}44)` }}></div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;