import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="nav-list">
                <li><a href="#home" className="nav-link">Home</a></li>
                <li><a href="#featured" className="nav-link">Featured</a></li>
                <li><a href="#bestsellers" className="nav-link">Bestsellers</a></li>
                <li><a href="#old-books" className="nav-link">Old Books</a></li>
                <li><a href="#categories" className="nav-link">Categories</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;