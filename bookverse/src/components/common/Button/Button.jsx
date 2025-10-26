import React from 'react';
import './Button.css';

const Button = ({
                    children,
                    variant = 'primary',
                    size = 'medium',
                    onClick,
                    disabled = false,
                    type = 'button',
                    ...props
                }) => {
    const buttonClass = `btn ${variant} ${size} ${disabled ? 'disabled' : ''}`;

    return (
        <button
            type={type}
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;