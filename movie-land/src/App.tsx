import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './component/MovieCard';
import { API_URL, MovieSearch, TMovieSearch } from './constants/Movies';
import SearchIcon from './search.svg';

function App() {
  const [movies, setMovies] = useState<Array<TMovieSearch>>();

  useEffect(() => {
    searchMovies('star wars');
  }, []);

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

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

      <div className="container">{movies && <MovieCard MovieSearch={movies[0]} />}</div>
    </div>
  );
}

export default App;

type Movie = {
  Search: Array<Record<string, any>>;
  totalResults: string;
  Response: string;
};
