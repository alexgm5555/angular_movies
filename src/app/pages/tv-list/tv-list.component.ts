import { Component, OnInit } from '@angular/core';

import { TvSeriesService } from '../../services';
import { Movie } from 'src/app/models';

@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.scss']
})
export class TvListComponent implements OnInit{
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

  constructor(
    private services: TvSeriesService
  ){}

  ngOnInit(): void {
    this.getTvSeries();
  }

  getTvSeries() {
    this.services.getTvSeries(1).subscribe( async resp => {
      const _tv: Movie[] = resp.results.map((item: any) => {
        const { id, original_language, poster_path, vote_count, vote_average  } = item; 
        const e: Movie = {
          original_language,
          original_title: item.original_name,
          poster_path,
          title: item.original_name,
          vote_average,
          vote_count,
          id
        }
        return e;
      })
      this.movies = _tv;
    });
  }

  public _autoSelectedMovie(value: Movie){
    this.autocompleteMovieSelected = value;
  }
}
