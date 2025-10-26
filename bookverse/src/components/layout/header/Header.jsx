import React, { useState } from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    {/* Logo */}
                    <div className="logo">
                        <a href="#home" className="logo-link">
                            <span className="logo-text">BookVerse</span>
                        </a>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="search-container">
                        <SearchBar />
                    </div>

                    {/* Desktop Navigation */}
                    <Navigation />

                    {/* Utility Icons */}
                    <div className="utility-icons">
                        <button className="icon-button" title="Search">🔍</button>
                        <button className="icon-button" title="Wishlist">❤️</button>
                        <button className="icon-button" title="Cart">
                            🛒 <span className="cart-count">0</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="mobile-menu">
                        <div className="mobile-search">
                            <SearchBar />
                        </div>
                        <a href="#home" className="mobile-nav-link">Home</a>
                        <a href="#featured" className="mobile-nav-link">Featured</a>
                        <a href="#bestsellers" className="mobile-nav-link">Bestsellers</a>
                        <a href="#old-books" className="mobile-nav-link">Old Books</a>
                        <a href="#categories" className="mobile-nav-link">Categories</a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;