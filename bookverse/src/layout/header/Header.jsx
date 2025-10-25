import React, { useState } from 'react';
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

                    {/* Desktop Navigation */}
                    <nav className="nav">
                        <ul className="nav-list">
                            <li><a href="#home" className="nav-link">Home</a></li>
                            <li><a href="#featured" className="nav-link">Featured</a></li>
                            <li><a href="#bestsellers" className="nav-link">Bestsellers</a></li>
                            <li><a href="#old-books" className="nav-link">Old Books</a></li>
                            <li><a href="#categories" className="nav-link">Categories</a></li>
                        </ul>
                    </nav>

                    {/* Utility Icons */}
                    <div className="utility-icons">
                        <button className="icon-button">🔍</button>
                        <button className="icon-button">❤️</button>
                        <button className="icon-button">
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