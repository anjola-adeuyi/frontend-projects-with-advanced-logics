import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './component/MovieCard';
import { MovieSearch } from './constants/Movies';
import SearchIcon from './search.svg';

// eccaa7da
const API_URL = 'http://www.omdbapi.com?apikey=eccaa7da';

function App() {
  const [movies, setMovies] = useState<Movie>();

  useEffect(() => {
    searchMovies('star wars');
  }, []);

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log('movie data', data.Search);

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          onChange={(e) => {}}
          value={'star wars'}
        />
        <img
          src={SearchIcon}
          alt="search icon"
          onClick={() => {}}
        />
      </div>

      <div className="container">
        <MovieCard MovieSearch={MovieSearch} />
      </div>
    </div>
  );
}

export default App;

type Movie = {
  Search: Array<Record<string, any>>;
  totalResults: string;
  Response: string;
};
