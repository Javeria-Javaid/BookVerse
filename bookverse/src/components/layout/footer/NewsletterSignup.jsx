import React, { useState } from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Thank you for subscribing with: ${email}`);
            setEmail('');
        }
    };

    return (
        <div className="newsletter-signup">
            <h3>Stay Updated</h3>
            <p>Get the latest book recommendations and exclusive deals</p>
            <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default NewsletterSignup;