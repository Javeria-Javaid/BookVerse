import React from 'react';
import './FeaturedCategories.css';

const FeaturedCategories = () => {
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
                <h2 className="section-title">Browse Categories</h2>
                <p className="section-subtitle">Find your next read by genre</p>

                <div className="categories-grid">
                    {categories.map((category) => (
                        <div key={category.id} className="category-card">
                            <div className="category-icon">{category.icon}</div>
                            <h3 className="category-name">{category.name}</h3>
                            <p className="category-count">{category.count}</p>
                            <button className="category-btn">Explore</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;