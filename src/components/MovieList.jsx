import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'; 

const MovieList = ({ movies, onMovieClick }) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <div key={movie.title} onClick={() => onMovieClick(movie)}>
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    );
};

export default MovieList;
