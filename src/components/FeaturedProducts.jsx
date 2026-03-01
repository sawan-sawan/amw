import React from 'react';
import { Smartphone, Check, Star } from 'lucide-react';
import './FeaturedProducts.css';
import { useScrollToTop } from "../hooks/useScrollToTop";


const FeaturedProducts = () => {
  useScrollToTop();
  const products = [
    {
      id: 1,
      brand: "Samsung",
      condition: "Used",
      isFeatured: true,
      name: "Samsung Galaxy S21 Ultra",
      description: "Flagship Samsung smartphone with top-end features",
      inStock: true,
      price: "₹74,999",
      bgClass: "bg-samsung"
    },
    {
      id: 2,
      brand: "Apple",
      condition: "Used",
      isFeatured: true,
      name: "iPhone 13 Pro Max",
      description: "Apple's latest Pro model with advanced camera system",
      inStock: true,
      price: "₹1,19,900",
      bgClass: "bg-apple"
    }
  ];

  return (
    <section className="featured-section">
      <div className="section-header">
        <span className="subtitle">HAND-PICKED FOR YOU</span>
        <h2 className="title">Featured Products</h2>
        <p className="description">Our top picks — flagship devices and great-value pre-owned phones</p>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
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

export default FeaturedProducts;