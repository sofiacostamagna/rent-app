import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../NavBar/NavBar';
import './Hero.css';

const HeroSection: React.FC = () => {
  return (
    <>
      <NavBar />
      <section className="hero-section">
        {/* Background video */}
        <div className="video-background">
          <video src="/house1.mp4" autoPlay loop muted className="hero-video"></video>
          <div className="video-overlay"></div>
        </div>

        {/* Overlay content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="content"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Find Your <span className="title-highlight1">Perfect</span> Home
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-xl mb-8"
          >
            Discover the best houses and apartments for rent or sale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex space-x-8"
          >
            <button>Rent</button>
            <button className="secondary">Buy</button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;