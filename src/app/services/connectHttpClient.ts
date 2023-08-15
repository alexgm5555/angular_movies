import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class connectHttpClientService {

  constructor( 
    private http: HttpClient,
  ) {}

  get authorization() {
    return environment.autorization;
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