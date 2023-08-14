import { Movie } from '../models/movie.model';

export interface Movies {
  page: number;
  movies: Movie[];
}