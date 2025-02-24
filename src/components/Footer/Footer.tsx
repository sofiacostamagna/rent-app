import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHome,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Logo and Social Media */}
        <div className="footer-top">
          <div className="navbar-logo">
            <FaHome className="home-icon" /> <span>RENT</span>
          </div>
          <div className="social-media">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>

        {/* Information Sections */}
        <div className="footer-sections">
          <div className="footer-column">
            <h4>About</h4>
            <p>We provide the best rental properties with excellent service.</p>
          </div>

          <div className="footer-column">
            <h4>Buy or Rent</h4>
            <ul>
              <li><a href="#">Browse Properties</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <p><FaEnvelope className="contact-icon" /> rent@rent.com</p>
            <p><FaPhone className="contact-icon" /> +1 1111 2222 30</p>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="footer-divider"></div>

        {/* Rights and Credit */}
        <div className="footer-bottom">
          <p>© 2025 Rent. All rights reserved.</p>
          <p className="footer-credit">
            Designed with by <a href="#">Rent</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

