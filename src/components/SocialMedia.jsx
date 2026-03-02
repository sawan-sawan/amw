import React from 'react';
import { motion } from 'framer-motion';
import './SocialMedia.css';

const SocialMedia = () => {
  // 🛠️ DATA UPDATE: Ab 'video' path ki jagah hum 'thumbnail' (image path) add kar rahe hain.
  // 💡 Apni public folder mein in thumbnail images ko daal lijiyega.
  const reels = [
    { 
      id: 1, 
      thumbnail: "/reel1.png", // 💡 Video path ki jagah thumbnail image path
      link: "https://www.instagram.com/reel/DT4eOeGD94J/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "iPhone 17 Stock available now!" 
    },
    { 
      id: 2, 
      thumbnail: "/reel2.png", 
      link: "https://www.instagram.com/reel/DVX8IYZjwEN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "Best Budget Phones 2026" 
    },
    { 
      id: 3, 
      thumbnail: "/reel3.png", 
      link: "https://www.instagram.com/reel/DVTpFEPj5U4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "iphone Air Unboxing & Review" 
    },
    { 
      id: 4, 
      thumbnail: "/reel4.png", 
      link: "https://www.instagram.com/reel/DVOIigWD3DU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "iphone 17 series available & Offers" 
    },
  ];

  // Seamless infinite loop ke liye array ko bada kiya hai
  const extendedReels = [...reels, ...reels, ...reels, ...reels];
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
          
          <a href="https://www.instagram.com/aroramobworld?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="insta-btn">
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
              /* Link wrapper remains same */
              <a 
                href={reel.link} 
                target="_blank" 
                rel="noreferrer" 
                key={index} 
                className="reel-card"
              >
                {/* 🛠️ Tag change kiya hai: video to img */}
                <img 
                  src={reel.thumbnail} 
                  alt={reel.title}
                  className="reel-thumbnail" // Class name change ki styling ke liye
                />
                
                {/* Overlay logic remains same */}
                <div className="reel-overlay">
                  <div className="overlay-content">
                    <p className="reel-title">{reel.title}</p>
                    <span className="watch-btn">Watch on Instagram ↗</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SocialMedia;