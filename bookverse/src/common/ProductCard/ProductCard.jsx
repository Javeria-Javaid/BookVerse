import React from 'react';
import Button from '../Button/Button';
import './ProductCard.css'; // Regular CSS import

const ProductCard = ({
                         book,
                         onAddToCart,
                         onViewDetails
                     }) => {
    const {
        title,
        author,
        price,
        originalPrice,
        rating,
        condition = 'new',
        conditionType,
        isBestseller,
        isNewArrival
    } = book;

    const hasDiscount = originalPrice && originalPrice > price;

    return (
        <div className="product-card">
            {/* Book Image */}
            <div className="image-container">
                <div className="image-placeholder">
                    📖
                </div>

                {/* Badges */}
                <div className="badges">
                    {isBestseller && <span className="bestseller-badge">Bestseller</span>}
                    {isNewArrival && <span className="new-arrival-badge">New</span>}
                    {hasDiscount && <span className="discount-badge">Sale</span>}
                    {condition === 'used' && (
                        <span className="condition-badge">{conditionType}</span>
                    )}
                </div>
            </div>

            {/* Book Info */}
            <div className="content">
                <h3 className="title">{title}</h3>
                <p className="author">by {author}</p>

                {/* Rating */}
                <div className="rating">
                    {'⭐'.repeat(Math.floor(rating))}
                    <span className="rating-text">({rating})</span>
                </div>

                {/* Price */}
                <div className="price">
                    {hasDiscount ? (
                        <>
                            <span className="current-price">${price}</span>
                            <span className="original-price">${originalPrice}</span>
                        </>
                    ) : (
                        <span className="current-price">${price}</span>
                    )}
                </div>

                {/* Condition */}
                {condition === 'used' && (
                    <div className="condition">
                        Condition: <span className="condition-value">{conditionType}</span>
                    </div>
                )}

                {/* Actions */}
                <div className="actions">
                    <Button
                        variant="primary"
                        size="small"
                        onClick={() => onAddToCart(book)}
                        className="add-to-cart-btn"
                    >
                        Add to Cart
                    </Button>
                    <Button
                        variant="outline"
                        size="small"
                        onClick={() => onViewDetails(book)}
                    >
                        Details
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;