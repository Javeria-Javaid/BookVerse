import React from 'react';
import NewsletterSignup from './NewsletterSignup';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <NewsletterSignup />

                <div className="footer-content">
                    <div className="footer-section">
                        <h4>BookVerse</h4>
                        <p>Your trusted source for new, used, and rare books since 2024.</p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <div className="footer-links">
                            <a href="#home">Home</a>
                            <a href="#featured">Featured</a>
                            <a href="#bestsellers">Bestsellers</a>
                            <a href="#categories">Categories</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Support</h4>
                        <div className="footer-links">
                            <a href="#contact">Contact Us</a>
                            <a href="#shipping">Shipping Info</a>
                            <a href="#returns">Returns</a>
                            <a href="#faq">FAQ</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Legal</h4>
                        <div className="footer-links">
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Service</a>
                            <a href="#cookies">Cookie Policy</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 BookVerse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;