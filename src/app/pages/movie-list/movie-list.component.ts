import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services';
import { Movie } from 'src/app/models';
import { Detail } from 'src/app/interfaces';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{
  public movies: Movie[] = [];
  public autocompleteMovieSelected: Movie = {
    original_language: '',
    original_title: '',
    poster_path: '',
    title: '',
    vote_average: '',
    vote_count: '',
    id: ''
  }
  public movieDeail: Detail = {
    id: 0,
    overview: '',
    title: ''
  };

  constructor(
    private services: MoviesService
  ){}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.services.getMovies(1).subscribe( async resp => {
      this.movies = resp.results;
    });
  }

  public getDetailById(id: number) {
    this.services.getMoviesDeatailsById(id).subscribe( async resp => {
      this.movieDeail = resp;
    });
  }

  public _autoSelectedMovie(value: Movie){
    this.autocompleteMovieSelected = value;
    this.getDetailById(parseInt(value.id));
  }

}
