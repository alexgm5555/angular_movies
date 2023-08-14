import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from '../enviroments/enviroment';

import { Movies } from '../interfaces';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private API_MOVIES = base_url;

  constructor( 
    private http: HttpClient, 
    private router: Router,
    private ngZone: NgZone
  ) {}

  get authorization() {
    return 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODIyZTM1MGJhYjQ3N2I3YTM1MGY' +
           'yMTNlY2I4MWMzMSIsInN1YiI6IjY0ZDkwMDkzMDAxYmJkMDBjNmM3Yjc2MSIsInNjb3' +
           'BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cSuzVa5-J0CCjVNJiJHdYtTsOj' +
           'MjEtQhOvof3iyADMA'
  }

  get headers() {
    return {
      headers: {
        'accept': 'application/json',
        'Authorization': this.authorization
      }
    }
  }

  public getMovies( page: number = 0 ): Observable<any> {
    const url: string = `${this.API_MOVIES}?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
    return this.http.get<Movies>(url, this.headers);
  }
}
