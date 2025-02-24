import React, { useState } from 'react';
import './NavBar.css';
import { FaBars, FaHome } from 'react-icons/fa';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
    console.log('Menu toggled:', !isMenuOpen); 
  };

  return (
    <header className="navbar">
      <nav className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="navbar-logo">
          <FaHome className="home-icon" /> <span>RENT</span>
        </div>

        {/* Hamburger button (mobile only) */}
        <button 
          className="hamburger md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <FaBars />
        </button>

        {/* Navigation menu */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#rent" className="text-letra hover:text-letra-resalt">Rent</a></li>
          <li><a href="#buy" className="text-letra hover:text-letra-resalt">Buy</a></li>
          <li><a href="#sell" className="text-letra hover:text-letra-resalt">Sell</a></li>
          {/* Login and Signup buttons (mobile only) */}
          <li className="md:hidden"><button className="inactive w-full">Login</button></li>
          <li className="md.hidden"><button className="bg-botones text-white px-4 py-2 rounded w-full">Signup</button></li>
        </ul> 
      </nav>
    </header>
  );
};

export default NavBar;