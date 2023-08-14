import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input('movie') movie: Movie = {
    original_language: '',
    original_title: '',
    poster_path: '',
    title: '',
    vote_average: '',
    vote_count: '',
    id: ''
  };
}
