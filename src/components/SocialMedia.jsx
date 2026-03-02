import React from 'react';
import { motion } from 'framer-motion';
import './SocialMedia.css';

const SocialMedia = () => {
  const reels = [
    { id: 1, video: "/reel1.mp4" },
    { id: 2, video: "/reel2.mp4" },
    { id: 3, video: "/reel3.mp4" },
    { id: 4, video: "/reel4.mp4" },
  ];

  // Seamless infinite loop ke liye array ko bada kiya hai
  // Pehle 4 videos ko repeat karke ek long list banayi
  const extendedReels = [...reels, ...reels, ...reels, ...reels];
  // Phir us puri list ko double kar diya taaki CSS animation perfectly -50% par loop ho sake
  const infiniteReels = [...extendedReels, ...extendedReels];

  return (
    <section className="social-section">
      <div className="social-container">
        
        {/* Header Section */}
        <motion.div 
          className="social-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Follow Our Journey</h2>
          <p>Join our Instagram family for the latest smartphone deals, unboxing videos, and daily tech updates.</p>
          
          <a href="https://instagram.com/aroramobileworld" target="_blank" rel="noreferrer" className="insta-btn">
            Follow on Instagram ↗
          </a>
        </motion.div>

        {/* Infinite Auto-Scrolling Slider */}
        <motion.div 
          className="slider-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Edge Shadows */}
          <div className="fade-left"></div>
          <div className="fade-right"></div>

          {/* Moving Track */}
          <div className="reels-track">
            {infiniteReels.map((reel, index) => (
              <div key={index} className="reel-card">
                <video 
                  src={reel.video} 
                  className="reel-video"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
                <div className="reel-overlay">
                  <span>Watch on Instagram</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SocialMedia;