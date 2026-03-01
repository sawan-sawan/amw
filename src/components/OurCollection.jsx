import React, { useState } from 'react';
import { Smartphone, Check, Star } from 'lucide-react';
import './OurCollection.css';

const OurCollection = () => {
  const [activeTab, setActiveTab] = useState('All Phones');

  const products = [
    {
      id: 1,
      brand: "Vivo",
      condition: "Used",
      isFeatured: false,
      name: "Used Vivo V21",
      description: "Gently used phone with 44MP selfie camera",
      inStock: true,
      price: "₹12,999",
      bgClass: "bg-vivo",
      category: "Used Phones"
    },
    {
      id: 2,
      brand: "Realme",
      condition: "Used",
      isFeatured: false,
      name: "Realme Narzo 30",
      description: "Budget phone with gaming processor",
      inStock: true,
      price: "₹12,999",
      bgClass: "bg-realme",
      category: "Used Phones"
    },
    {
      id: 3,
      brand: "Redmi",
      condition: "Used",
      isFeatured: false,
      name: "Redmi Note 10 Pro",
      description: "Affordable phone with AMOLED screen",
      inStock: true,
      price: "₹18,999",
      bgClass: "bg-redmi",
      category: "Used Phones"
    },
    {
      id: 4,
      brand: "Apple",
      condition: "Used",
      isFeatured: false,
      name: "Used iPhone XR",
      description: "Well maintained iPhone XR",
      inStock: true,
      price: "₹25,999",
      bgClass: "bg-apple",
      category: "Used Phones"
    },
    {
      id: 5,
      brand: "Oppo",
      condition: "Used",
      isFeatured: false,
      name: "Oppo Reno6",
      description: "Sleek phone with AI portrait video features",
      inStock: true,
      price: "₹29,999",
      bgClass: "bg-oppo",
      category: "Used Phones"
    },
    {
      id: 6,
      brand: "OnePlus",
      condition: "Used",
      isFeatured: false,
      name: "OnePlus 9R",
      description: "High performance phone with Oxygen OS",
      inStock: true,
      price: "₹39,999",
      bgClass: "bg-oneplus",
      category: "Used Phones"
    },
    {
      id: 7,
      brand: "Samsung",
      condition: "Used",
      isFeatured: true,
      name: "Samsung Galaxy S21 Ultra",
      description: "Flagship Samsung smartphone with top-end features",
      inStock: true,
      price: "₹74,999",
      bgClass: "bg-samsung",
      category: "Used Phones" // Ise aap 'New Phones' bhi kar sakte hain test karne ke liye
    },
    {
      id: 8,
      brand: "Apple",
      condition: "Used",
      isFeatured: true,
      name: "iPhone 13 Pro Max",
      description: "Apple's latest Pro model with advanced camera system",
      inStock: true,
      price: "₹1,19,900",
      bgClass: "bg-apple",
      category: "Used Phones"
    }
  ];

  // Filter Logic
  const filteredProducts = products.filter(product => {
    if (activeTab === 'All Phones') return true;
    return product.category === activeTab;
  });

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
        {filteredProducts.map((product) => (
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
    </section>
  );
};

export default OurCollection;