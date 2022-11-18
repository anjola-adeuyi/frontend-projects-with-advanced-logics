import React from 'react';
import { TMovieSearch } from '../constants/Movies';

const MovieCard = ({ MovieSearch }: { MovieSearch: TMovieSearch }) => {
  return (
    <div>
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
  );
};

export default MovieCard;
