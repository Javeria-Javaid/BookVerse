import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Discover Your Next <span className="text-accent">Favorite Read</span>
                        </h1>
                        <p className="hero-subtitle">
                            Explore thousands of new, used, and rare books. Curated by book lovers, for book lovers.
                            Find your perfect story today.
                        </p>
                        <div className="hero-actions">
                            <button className="btn btn-primary">Shop New Books</button>
                            <button className="btn btn-secondary">Browse Used Books</button>
                        </div>
                        <div className="hero-features">
                            <div className="feature">
                                <span>🚚</span>
                                <span>Free shipping over $35</span>
                            </div>
                            <div className="feature">
                                <span>📚</span>
                                <span>50,000+ titles available</span>
                            </div>
                            <div className="feature">
                                <span>⭐</span>
                                <span>4.8/5 customer rating</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-placeholder">
                            📖 Book Collection
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;