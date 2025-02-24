import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/Hero/Hero';
import Features from './components/Feature/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Pricing from './components/Pricing/Pricing';
import Newsletter from './components/Newsletter/Newsletter';

const App: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const transitionSettings = {
    duration: 0.5, 
    ease: [0.6, -0.05, 0.01, 0.99],
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={transitionSettings}
        variants={sectionVariants}
      >
        <HeroSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ...transitionSettings, delay: 0.1 }} 
        variants={sectionVariants}
      >
        <Features />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ...transitionSettings, delay: 0.2 }} 
        variants={sectionVariants}
      >
        <Testimonials />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ...transitionSettings, delay: 0.3 }} 
        variants={sectionVariants}
      >
        <Pricing />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ...transitionSettings, delay: 0.4 }} 
        variants={sectionVariants}
      >
        <Contact />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ...transitionSettings, delay: 0.6 }} 
        variants={sectionVariants}
      >
        <Newsletter/>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ...transitionSettings, delay: 0.5 }} 
        variants={sectionVariants}
      >
        <Footer />
      </motion.div>
      
    </div>
  );
};

export default App;
