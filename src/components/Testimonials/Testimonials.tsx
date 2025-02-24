import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './Testimonials.css';

interface Testimonial {
  id: number;
  name: string;
  body: string;
  rating: number;
}

interface Comment {
  id: number;
  name: string;
  body: string;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        // Add a random rating (1-5) to each testimonial
        const testimonialsWithRating = data.slice(0, 5).map((comment: Comment) => ({
          id: comment.id,
          name: comment.name,
          body: comment.body,
          rating: Math.floor(Math.random() * 5) + 1, 
        }));
        setTestimonials(testimonialsWithRating);
      })
      .catch((error) => console.error('Error fetching testimonials:', error));

    // Update isMobile state on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, testimonials.length - 1));
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const testimonialsToShow = isMobile ? testimonials.slice(currentIndex, currentIndex + 1) : testimonials.slice(currentIndex, currentIndex + 2);

  return (
    <section className="testimonials-section">
      <h2 className="section-title">
        <span className="title-white">What Our</span> <span className="title-highlight">Clients Say</span>
      </h2>
      <p className="section-subtitle">We value our clients' feedback and strive to provide the best service possible.</p>
      <div className="testimonials-carousel">
        <button
          className="carousel-button prev"
          onClick={prevTestimonial}
          disabled={currentIndex === 0}
        >
          &#10094;
        </button>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="testimonial-card-container"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {testimonialsToShow.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i} className="star">
                      <i className="fas fa-star"></i> 
                    </span>
                  ))}
                </div>
                <p className="testimonial-body">"{testimonial.body}"</p>
                <h3 className="testimonial-name">- {testimonial.name}</h3>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <button
          className="carousel-button next"
          onClick={nextTestimonial}
          disabled={currentIndex >= testimonials.length - (isMobile ? 1 : 2)}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
