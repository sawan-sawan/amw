import React, { useState, useEffect } from 'react';
import { Smartphone, Check, Star } from 'lucide-react';
import './OurCollection.css';
import { useScrollToTop } from "../hooks/useScrollToTop";

// Data file ko import karein (path apne hisaab se adjust kar lein)
import { productsData } from "../data/products"; 

const OurCollection = () => {
  useScrollToTop();
  const [activeTab, setActiveTab] = useState('All Phones');
  
  // Shuffled products aur pagination ke liye states
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // Start mein 8 phones dikhenge

  // JAB PAGE LOAD HO: Products ko randomly shuffle karein
  useEffect(() => {
    const shuffleArray = [...productsData].sort(() => 0.5 - Math.random());
    setShuffledProducts(shuffleArray);
  }, []); // Empty dependency array means yeh sirf page refresh par chalega

  // JAB TAB CHANGE HO: Visible count ko wapas reset kar dein
  useEffect(() => {
    setVisibleCount(8);
  }, [activeTab]);

  // Filter Logic
  const filteredProducts = shuffledProducts.filter(product => {
    if (activeTab === 'All Phones') return true;
    return product.category === activeTab;
  });

  // Jitne visible count hain, sirf utne hi products dikhayein
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // Load More Function
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4); // Ek click par 4 naye phones aayenge
  };

  return (
    <section className="collection-section">
      <div className="section-header">
        <span className="subtitle">BROWSE & SHOP</span>
        <h2 className="title">Our Collection</h2>
        <p className="description">Explore our wide range of new and pre-owned smartphones at unbeatable prices</p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs-container">
        <div className="filter-tabs">
          {['All Phones', 'New Phones', 'Used Phones'].map((tab) => (
            <button 
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="collection-grid">
        {visibleProducts.map((product) => (
          <div key={product.id} className="product-card fade-in">
            {/* Top Image Area */}
            <div className={`card-top ${product.bgClass}`}>
              <div className="top-badges">
                <span className="brand-badge">{product.brand}</span>
                <span className="condition-badge">{product.condition}</span>
              </div>
              
              <div className="product-icon-wrapper">
                <Smartphone size={70} strokeWidth={1} className="product-icon" />
              </div>

              {product.isFeatured && (
                <div className="featured-badge">
                  <Star size={12} fill="currentColor" /> Featured
                </div>
              )}
            </div>

            {/* Bottom Content Area */}
            <div className="card-bottom">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              
              <div className="stock-status">
                <Check size={14} strokeWidth={3} /> In Stock
              </div>

              <div className="card-footer">
                <span className="product-price">{product.price}</span>
                <button className="enquire-btn">Enquire Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button - Sirf tabhi dikhega jab aur products bache hon */}
      {visibleCount < filteredProducts.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More Products
          </button>
        </div>
      )}
    </section>
  );
};

export default OurCollection;