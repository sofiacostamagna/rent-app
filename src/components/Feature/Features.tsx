import React from 'react';
import { FaHome, FaSearch, FaHandshake, FaChartLine } from 'react-icons/fa'; 
import { motion } from 'framer-motion';
import './Feature.css';

const Features: React.FC = () => {
  // Array of feature objects, each containing an icon, title, and description
  const features = [
    {
      icon: <FaHome className="feature-icon" />,
      title: "Wide Range of Properties",
      description: "Explore a vast selection of homes, apartments, and commercial spaces.",
    },
    {
      icon: <FaSearch className="feature-icon" />,
      title: "Advanced Search",
      description: "Find your perfect property with our powerful search tools.",
    },
    {
      icon: <FaHandshake className="feature-icon" />,
      title: "Trusted Agents",
      description: "Work with experienced and reliable real estate agents.",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Market Insights",
      description: "Get the latest trends and data to make informed decisions.",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {/* Small feature cards */}
        <div className="small-features">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="feature-icon-container">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Large feature card */}
        <motion.div
          className="feature-card large-feature"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="feature-title">Exclusive Benefits</h3>
          <p className="feature-description">
            Unlock exclusive benefits with our premium membership. Get access to
            personalized services, priority support, and much more.
          </p>
          <button className="secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1.5rem' }}>Learn More</button>
          <img src="/public/Illustration.png" alt="Illustration" className="feature-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Features;