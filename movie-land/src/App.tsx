import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './component/MovieCard';
import { API_URL, MovieSearch, TMovieSearch } from './constants/Movies';
import SearchIcon from './search.svg';

function App() {
  const [movies, setMovies] = useState<Array<TMovieSearch>>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    searchMovies('star wars');
  }, []);

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const movie = await response.json();

    setMovies(movie?.Search);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchTerm && e.key === 'Enter') {
      searchMovies(searchTerm);
    }
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div
        className="search"
        onKeyDown={handleKeyPress}
      >
        <input
          type="text"
          placeholder="Search for movies"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
        />
        <img
          src={SearchIcon}
          alt="search icon"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      {movies && movies.length > 0 ? (
        <div className="container">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              MovieSearch={movie}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found for "{searchTerm}"</h2>
        </div>
      )}
    </div>
  );
}

export default App;

type Movie = {
  Search: Array<Record<string, any>>;
  totalResults: string;
  Response: string;
};
