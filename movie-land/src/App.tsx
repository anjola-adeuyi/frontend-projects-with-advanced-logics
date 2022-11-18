import { useState, useEffect } from 'react';
import './App.css';
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
        <div className="movie">
          <div>
            <p>{MovieSearch.Year}</p>
          </div>

          <div>
            <img
              src={MovieSearch.Poster === 'N/A' ? 'https://via.placeholder.com/400' : MovieSearch.Poster}
              alt={MovieSearch.Title}
            />
          </div>

          <div>
            <span>{MovieSearch.Type}</span>
            <h3>{MovieSearch.Title}</h3>
          </div>
        </div>
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

type TMovieSearch = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

const MovieSearch: TMovieSearch = {
  Title: 'Star Wars: Episode IV - A New Hope',
  Year: '1977',
  imdbID: 'tt0076759',
  Type: 'movie',
  Poster: 'N/A',
  // Poster:
  // 'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg',
};
