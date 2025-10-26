import React from 'react';
import './FeaturedCategories.css';

const FeaturedCategories = () => {
    console.log('FeaturedCategories component is rendering!');

    const categories = [
        { id: 1, name: 'Fiction', icon: '📚', count: '1,250 books' },
        { id: 2, name: 'Mystery & Thriller', icon: '🕵️', count: '450 books' },
        { id: 3, name: 'Science Fiction', icon: '🚀', count: '320 books' },
        { id: 4, name: 'Biography', icon: '📖', count: '280 books' },
        { id: 5, name: 'Romance', icon: '❤️', count: '380 books' },
        { id: 6, name: 'Old & Rare Books', icon: '🏛️', count: '150 books' }
    ];

    return (
        <section id="categories" className="featured-categories">
            <div className="container">
                <h2 className="section-title" style={{ color: '#0B2545' }}>Browse Categories</h2>
                <p className="section-subtitle" style={{ color: '#1D3557' }}>Find your next read by genre</p>

                <div className="categories-grid">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="category-card"
                            style={{
                                border: '2px solid #134074',
                                background: 'white'
                            }}
                        >
                            <div className="category-icon" style={{ fontSize: '3rem' }}>{category.icon}</div>
                            <h3 className="category-name" style={{ color: '#0B2545' }}>{category.name}</h3>
                            <p className="category-count" style={{ color: '#1D3557' }}>{category.count}</p>
                            <button
                                className="category-btn"
                                style={{
                                    background: '#134074',
                                    color: 'white',
                                    padding: '0.75rem 1.5rem',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: 'pointer'
                                }}
                            >
                                Explore
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;