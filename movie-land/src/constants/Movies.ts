export const API_URL = 'http://www.omdbapi.com?apikey=eccaa7da';

export type TMovieSearch = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export const MovieSearch: TMovieSearch = {
  Title: 'Star Wars: Episode IV - A New Hope',
  Year: '1977',
  imdbID: 'tt0076759',
  Type: 'movie',
  Poster: 'N/A',
  // Poster:
  // 'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg',
};
