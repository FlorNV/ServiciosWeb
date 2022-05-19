import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private _htpp: HttpClient) { }

  translate(text: string, target: string, source: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        "X-RapidAPI-Key": "fa93237e82mshc9630ae5edb2b78p1ea897jsn892e38d9d423"
      })
    }

    const body = new HttpParams()
    .set('q', text)
    .set('target', target)
    .set('source', source);
    
    return this._htpp.post("https://google-translate1.p.rapidapi.com/language/translate/v2", body, httpOptions);
  }
}
