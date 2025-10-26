import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/home/Hero/Hero';
import FeaturedCategories from './components/home/FeaturedCategories/FeaturedCategories';
import Bestsellers from './components/home/Bestsellers/Bestsellers';
import Modal from './components/common/Modal/Modal';

// Mock data
const mockBooks = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 15.99,
        originalPrice: 19.99,
        rating: 4.5,
        condition: "new",
        isBestseller: true,
        isNewArrival: false
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 12.50,
        rating: 4.8,
        condition: "used",
        conditionType: "Very Good",
        isBestseller: true,
        isNewArrival: false
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        price: 8.75,
        originalPrice: 14.99,
        rating: 4.6,
        condition: "used",
        conditionType: "Good",
        isBestseller: false,
        isNewArrival: true
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 14.99,
        rating: 4.7,
        condition: "new",
        isBestseller: true,
        isNewArrival: false
    }
];

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleAddToCart = (book) => {
        alert(`Added "${book.title}" to cart!`);
    };

    const handleViewDetails = (book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    return (
        <Layout>
            <Hero />
            <FeaturedCategories />
            <Bestsellers
                books={mockBooks}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
            />

            {/* Add more sections here later */}

            <Modal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedBook(null);
                }}
                title={selectedBook ? selectedBook.title : "Book Details"}
            >
                {selectedBook && (
                    <div>
                        <p><strong>Author:</strong> {selectedBook.author}</p>
                        <p><strong>Price:</strong> ${selectedBook.price}</p>
                        <p><strong>Rating:</strong> {selectedBook.rating}/5</p>
                        <p><strong>Condition:</strong> {selectedBook.condition}</p>
                        {selectedBook.conditionType && (
                            <p><strong>Condition Type:</strong> {selectedBook.conditionType}</p>
                        )}
                        <div style={{ marginTop: '1.5rem' }}>
                            <button
                                className="btn btn-primary"
                                onClick={() => handleAddToCart(selectedBook)}
                                style={{ padding: '0.75rem 1.5rem' }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </Layout>
    );
}

export default App;