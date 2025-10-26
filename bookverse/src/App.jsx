import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/home/Hero/Hero';
import Button from './components/common/Button/Button';
import ProductCard from './components/common/ProductCard/ProductCard';
import Modal from './components/common/Modal/Modal';

// Mock data for testing
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

            {/* Featured Books Section */}
            <section id="featured" style={{ padding: '4rem 0', background: '#EEF4ED' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#0B2545' }}>
                        Featured Books
                    </h2>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {mockBooks.map(book => (
                            <ProductCard
                                key={book.id}
                                book={book}
                                onAddToCart={handleAddToCart}
                                onViewDetails={handleViewDetails}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Test Buttons Section */}
            <section style={{ padding: '2rem 0', background: 'white' }}>
                <div className="container">
                    <h3 style={{ marginBottom: '1.5rem', color: '#0B2545' }}>Component Testing</h3>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Button variant="primary" size="large">Primary Large</Button>
                        <Button variant="secondary" size="medium">Secondary Medium</Button>
                        <Button variant="outline" size="small">Outline Small</Button>
                        <Button disabled>Disabled Button</Button>
                    </div>
                </div>
            </section>

            {/* Modal */}
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
                        <div style={{ marginTop: '1.5rem' }}>
                            <Button variant="primary" onClick={() => handleAddToCart(selectedBook)}>
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>
        </Layout>
    );
}

export default App;