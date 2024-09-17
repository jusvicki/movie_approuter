import React, { useState } from 'react';
import './Filter.css'; 

const Filter = ({ onFilterChange }) => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        onFilterChange(e.target.value, rating);
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
        onFilterChange(title, e.target.value);
    };

    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Filter by title"
                value={title}
                onChange={handleTitleChange}
            />
            <input
                type="number"
                placeholder="Filter by rating"
                value={rating}
                onChange={handleRatingChange}
                min="0"
                max="10"
            />
        </div>
    );
};

export default Filter;
