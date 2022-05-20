import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private _http: HttpClient) { }

  getMusic(query: string): Observable<any>{
    const headers = new HttpHeaders()
    .set('X-RapidAPI-Host', 'deezerdevs-deezer.p.rapidapi.com')
    .set('X-RapidAPI-Key', 'fa93237e82mshc9630ae5edb2b78p1ea897jsn892e38d9d423');

    const params = new HttpParams().set('q', query);

    const options = {params: params, headers: headers};
    return this._http.get('https://deezerdevs-deezer.p.rapidapi.com/search', options);
  }
}
