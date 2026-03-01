import React from 'react';
import './FeaturesSection.css';
import { Package, ShieldCheck, Tag, Award } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <Package size={28} strokeWidth={1.5} />,
      title: "500+",
      subtitle: "Phones Available",
    },
    {
      id: 2,
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      title: "100%",
      subtitle: "Genuine Products",
    },
    {
      id: 3,
      icon: <Tag size={28} strokeWidth={1.5} />,
      title: "Best",
      subtitle: "Prices Guaranteed",
    },
    {
      id: 4,
      icon: <Award size={28} strokeWidth={1.5} />,
      title: "Since 2010",
      subtitle: "Trusted & Established",
    },
  ];

  return (
    <section className="modern-features-section">
      <div className="features-wrapper">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="icon-container">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-subtitle">{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;