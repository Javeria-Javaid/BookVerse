import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            alert(`Searching for: ${searchTerm}`);
            // Later we'll implement actual search functionality
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search books, authors, genres..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <button type="submit" className="search-button">
                🔍
            </button>
        </form>
    );
};

export default SearchBar;