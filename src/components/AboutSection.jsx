import React from 'react';
import { ShieldCheck, Star, Tag, Package, ChevronRight } from 'lucide-react';
import './AboutSection.css'; // Make sure this path is correct!
import { useScrollToTop } from "../hooks/useScrollToTop";


const AboutSection = () => {
    useScrollToTop();

    return (
        <section className="about-section">
            <div className="about-container">

                {/* Left Column: Text & Button */}
                <div>
                    <h3 className="about-subtitle">Who We Are</h3>
                    <h2 className="about-title">Your Neighbourhood Mobile Store</h2>

                    <p className="about-description">
                        Arora Mobile World has been serving customers since <span className="text-black-bold">2010</span>, offering a wide range of new and pre-owned smartphones at unbeatable prices. We are committed to quality, trust, and customer satisfaction.
                    </p>

                    <p className="about-description">
                        Whether you're looking for the latest flagship or a reliable budget-friendly used phone, we have the right device for every need and every pocket.
                    </p>

                    {/* Black & White Button */}
                    <button className="btn-black">
                        Get in Touch
                        <ChevronRight size={18} className="btn-icon" />
                    </button>
                </div>

                {/* Right Column: 2x2 Grid */}
                <div className="cards-grid">

                    {/* Card 1 */}
                    <div className="about-card">
                        <div className="card-icon-wrapper">
                            <ShieldCheck size={24} />
                        </div>
                        <h4 className="card-title">Quality Assured</h4>
                        <p className="card-text">
                            Every device is thoroughly tested and verified before sale.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="about-card">
                        <div className="card-icon-wrapper">
                            <Star size={24} />
                        </div>
                        <h4 className="card-title">Customer Trust</h4>
                        <p className="card-text">
                            Thousands of happy customers since 2010.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="about-card">
                        <div className="card-icon-wrapper">
                            <Tag size={24} />
                        </div>
                        <h4 className="card-title">Best Prices</h4>
                        <p className="card-text">
                            Competitive pricing on all new and pre-owned smartphones.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="about-card">
                        <div className="card-icon-wrapper">
                            <Package size={24} />
                        </div>
                        <h4 className="card-title">Wide Selection</h4>
                        <p className="card-text">
                            All major brands — Samsung, Apple, OnePlus, Xiaomi, and more.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;