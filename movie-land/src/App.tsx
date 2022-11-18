import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search-icon.svg';

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

    console.log('movie data', data);

    setMovies(data.Search);
  };

  return (
    <div className="App">
      <h1>MovieLand</h1>
    </div>
  );
}

export default App;

type Movie = {
  Search: Array<Record<string, any>>;
  totalResults: string;
  Response: string;
};
