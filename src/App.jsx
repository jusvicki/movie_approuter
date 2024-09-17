import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

const moviesData = [
    {
        title: 'Inception',
        description: 'A mind-bending thriller about dream invasion.',
        posterURL: 'https://via.placeholder.com/150',
        rating: 8.8,
        trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0'
    },
    // Add more movie objects here
];

const Home = ({ movies }) => {
    const history = useHistory();

    const handleMovieClick = (movie) => {
        history.push(`/movie/${movie.title}`, { movie });
    };

    return (
        <div>
            <h1>Movie App</h1>
            <Filter onFilterChange={handleFilterChange} />
            <MovieList movies={movies} onMovieClick={handleMovieClick} />
        </div>
    );
};

const MovieDescription = ({ location }) => {
    const history = useHistory();
    const { movie } = location.state || {};

    if (!movie) return <div>Movie not found</div>;

    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.posterURL} alt={movie.title} />
            <p>{movie.description}</p>
            <iframe
                width="560"
                height="315"
                src={movie.trailerURL}
                title="Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <button onClick={() => history.push('/')}>Back to Home</button>
        </div>
    );
};

const App = () => {
    const [filteredMovies, setFilteredMovies] = useState(moviesData);

    const handleFilterChange = (title, rating) => {
        let filtered = moviesData;
        if (title) {
            filtered = filtered.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
        }
        if (rating) {
            filtered = filtered.filter(movie => movie.rating >= rating);
        }
        setFilteredMovies(filtered);
    };

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home movies={filteredMovies} />
                </Route>
                <Route path="/movie/:title" component={MovieDescription} />
            </Switch>
        </Router>
    );
};

export default App;
