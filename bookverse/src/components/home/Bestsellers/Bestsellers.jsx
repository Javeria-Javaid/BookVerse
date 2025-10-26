import React from 'react';
import ProductCard from '../../common/ProductCard/ProductCard';
import './Bestsellers.css';

const Bestsellers = ({ books, onAddToCart, onViewDetails }) => {
    const bestsellers = books.filter(book => book.isBestseller);

    return (
        <section id="bestsellers" className="bestsellers">
            <div className="container">
                <h2 className="section-title">Bestsellers</h2>
                <p className="section-subtitle">Most loved books by our readers</p>

                <div className="bestsellers-grid">
                    {bestsellers.map(book => (
                        <ProductCard
                            key={book.id}
                            book={book}
                            onAddToCart={onAddToCart}
                            onViewDetails={onViewDetails}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bestsellers;