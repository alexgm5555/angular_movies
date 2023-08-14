import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/models';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{
  public movies: Movie[] = [];

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
}
