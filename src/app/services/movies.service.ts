import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../enviroments/enviroment';

import { connectHttpClientService } from './connectHttpClient';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private API_MOVIES = `${base_url}/3/discover/movie`;
  private API_FIND_MOVIES = `${base_url}/3/movie`;

  constructor( 
    private services: connectHttpClientService
  ) {}

  public getMovies( page: number = 0 ): Observable<any> {
    const url: string = `${this.API_MOVIES}?include_adult=false&include_video=false`+
                        `&language=en-US&page=${page}&sort_by=popularity.desc`
    return this.services.get(url);
  }

  public getMoviesDeatailsById( id: number = 0 ): Observable<any> {
    const url: string = `${this.API_FIND_MOVIES}/${id}?language=en-US`
    return this.services.get(url);
  }
}
