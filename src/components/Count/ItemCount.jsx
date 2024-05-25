import React, { useState } from 'react';
import './Count.css'

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="count-container">
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
};

export default ItemCount;
