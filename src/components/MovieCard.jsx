import React from 'react';
import './index.css'; 

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.rating}</p>
        </div>
    );
};

export default MovieCard;
