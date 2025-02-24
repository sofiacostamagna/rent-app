import React from 'react';
import { motion } from 'framer-motion';
import './Pricing.css';

const Pricing: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Basic',
      price: '$19',
      features: ['10 Properties', 'Basic Support', 'Email Assistance'],
      recommended: false,
    },
    {
      name: 'Pro',
      price: '$49',
      features: ['50 Properties', 'Priority Support', 'Phone & Email Assistance'],
      recommended: true, 
    },
    {
      name: 'Premium',
      price: '$99',
      features: ['Unlimited Properties', '24/7 Support', 'Dedicated Agent'],
      recommended: false,
    },
  ];

  return (
    <section className="pricing-section">
      <h2 className="section-title">Choose Your Plan</h2>
      <div className="pricing-container">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={index}
            className={`pricing-card ${tier.recommended ? 'recommended' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {tier.recommended && <div className="recommended-badge">Recommended</div>}
            <h3 className="pricing-tier-name">{tier.name}</h3>
            <p className="pricing-tier-price">{tier.price}<span>/month</span></p>
            <ul className="pricing-tier-features">
              {tier.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="pricing-tier-button">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
