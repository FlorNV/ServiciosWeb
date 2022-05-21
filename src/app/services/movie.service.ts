import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpClient) { }

  getMovies(): Observable<any>{
    const options = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
        'X-RapidAPI-Key': 'fa93237e82mshc9630ae5edb2b78p1ea897jsn892e38d9d423'
      })
    }
    return this._http.get('https://movies-app1.p.rapidapi.com/api/movies', options);
  }

  getMoviesByName(title: string): Observable<any>{
    const headers = new HttpHeaders()
    .set('X-RapidAPI-Host', 'movies-app1.p.rapidapi.com')
    .set('X-RapidAPI-Key','fa93237e82mshc9630ae5edb2b78p1ea897jsn892e38d9d423');
    
    const params = new HttpParams()
    .set('query', title);

    const options = { params: params, headers: headers};
    
    return this._http.get('https://movies-app1.p.rapidapi.com/api/movies', options);
  }
}
