import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../enviroments/enviroment';

import { connectHttpClientService } from './connectHttpClient';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class TvSeriesService {
  private API_TV = `${base_url}/3/discover/tv`;

  constructor( 
    private services: connectHttpClientService
  ) {}

  public getTvSeries( page: number = 0 ): Observable<any> {
    const url: string = `${this.API_TV}?include_adult=false&include_video=false`+
                        `&language=en-US&page=${page}&sort_by=popularity.desc`
    return this.services.get(url);
  }
}
