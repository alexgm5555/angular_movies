import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class connectHttpClientService {

  constructor( 
    private http: HttpClient,
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

  public get( url: string ): Observable<any> {
    return this.http.get<any>(url, this.headers);
  }

}