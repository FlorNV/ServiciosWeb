import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private _http:HttpClient) { }

  getCurrencies(): Observable<any>{
    const options = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com',
        'X-RapidAPI-Key': 'fa93237e82mshc9630ae5edb2b78p1ea897jsn892e38d9d423'
      })
    }
    return this._http.get('https://currency-converter-pro1.p.rapidapi.com/currencies', options);
  }

  getConversion(from: string, to: string, amount: number): Observable<any>{

    const params = new HttpParams()
    .set('from', from)
    .set('to', to)
    .set('amount', amount);

    const options = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com',
        'X-RapidAPI-Key': 'fa93237e82mshc9630ae5edb2b78p1ea897jsn892e38d9d423'
      }),
      params: params
    };

    return this._http.get('https://currency-converter-pro1.p.rapidapi.com/convert', options);
  }

  getConversionTable(base: string, currencies: string): Observable<any>{
    const headers = new HttpHeaders()
    .set('X-RapidAPI-Host', 'currency-converter-pro1.p.rapidapi.com')
    .set('X-RapidAPI-Key', 'fa93237e82mshc9630ae5edb2b78p1ea897jsn892e38d9d423');

    const params = new HttpParams()
    .set('base', base)
    .set('currencies', currencies);

    const options = { params: params, headers: headers };

    return this._http.get('https://currency-converter-pro1.p.rapidapi.com/latest-rates', options);
  }
}
