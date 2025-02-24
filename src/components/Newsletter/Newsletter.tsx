import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setEmail(''); 
    setShowPopup(true); 
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="newsletter-section">
      <motion.h2
        className="newsletter-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Subscribe to our Newsletter
      </motion.h2>
      <motion.p
        className="newsletter-description"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get the latest updates and exclusive offers directly in your inbox.
      </motion.p>
      <motion.form
        className="newsletter-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
        />
        <motion.button
          type="submit"
          className="newsletter-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe
        </motion.button>
      </motion.form>
      {error && (
        <motion.p
          className="newsletter-error"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.p>
      )}
      {showPopup && (
        <div className="popup">
          <div className="popup-content card">
            <p>Thank you for subscribing!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Newsletter;