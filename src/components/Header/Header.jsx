import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { SlLocationPin } from 'react-icons/sl';
import { BiCart } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [searchCategory, setSearchCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Arts & Crafts', 'Automotive', 'Baby', 'Beauty', 'Books'];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for "${searchQuery}" in "${searchCategory}"`);
  };

  return (
    <header className="amazon-header">
      {/* Top Navigation Bar */}
      <div className="nav-top">
        {/* Logo */}
        <div className="nav-logo border-hover">
          <img 
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="Amazon Logo" 
            className="logo-img"
          />
        </div>

        {/* Deliver To Section - Hidden on small mobile screens */}
        <div className="nav-delivery border-hover hide-mobile">
          <SlLocationPin className="icon-location" />
          <div className="delivery-text">
            <span className="text-light">Deliver to</span>
            <span className="text-bold">Ethiopia</span>
          </div>
        </div>

        {/* Search Bar Container */}
        <form className="nav-search" onSubmit={handleSearch}>
          <div className="search-dropdown-wrapper hide-tablet">
            <select 
              value={searchCategory} 
              onChange={(e) => setSearchCategory(e.target.value)}
              className="search-dropdown"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search Amazon"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            <BiSearch className="icon-search" />
          </button>
        </form>

        {/* Right Side Options */}
        <div className="nav-right">
          {/* Language Selection - Hidden on small mobile screens */}
          <div className="nav-lang border-hover hide-mobile">
            <span className="flag-icon">🇺🇸</span>
            <span className="text-bold">EN <span className="dropdown-arrow">▼</span></span>
          </div>

          {/* Account & Lists */}
          <div className="nav-account border-hover">
            <span className="text-light hide-mobile">Sign In</span>
            <span className="text-bold">Account <span className="dropdown-arrow hide-mobile">▼</span></span>
          </div>

          {/* Returns & Orders - Hidden on mobile screens */}
          <div className="nav-orders border-hover hide-tablet">
            <span className="text-light">Returns</span>
            <span className="text-bold">& Orders</span>
          </div>

          {/* Cart with structural absolute alignment */}
          <div className="nav-cart border-hover">
            <div className="cart-icon-wrapper">
              <span className="cart-count bg-[#131921]">0</span>
              <BiCart className="icon-cart" />
            </div>
            <span className="text-bold cart-text hide-mobile">Cart</span>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Bar */}
      <div className="nav-bottom">
        <div className="nav-bottom-item menu-all border-hover">
          <FiMenu className="icon-menu" />
          <span className="text-bold">All</span>
        </div>
        <div className="nav-bottom-item border-hover">Today's Deals</div>
        <div className="nav-bottom-item border-hover">Customer Service</div>
        <div className="nav-bottom-item border-hover hide-mobile">Registry</div>
        <div className="nav-bottom-item border-hover hide-mobile">Gift Cards</div>
        <div className="nav-bottom-item border-hover hide-tablet">Sell</div>
      </div>
    </header>
  );
};

export default Header;