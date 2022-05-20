import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencies!: Array<Currency>;
  currency!: Currency;
  amount!: number;
  from!: Currency;
  to!: Currency;
  convertion!: any;
  

  constructor(private currencyService: CurrencyService) { 
    this.from = new Currency();
    this.to = new Currency();
    // this.getCurrencies();
  }

  ngOnInit(): void {
  }

  getCurrencies(){
    this.currencyService.getCurrencies().subscribe( result => {
      this.currencies = new Array<Currency>();
      for (const key in result.result) {
        this.currency = new Currency();
        this.currency.code = key;
        this.currency.description = result.result[key];
        this.currencies.push(this.currency);
      }
    })
  }

  convert(){
    this.currencyService.getConversion(this.from.code, this.to.code, this.amount).subscribe(result => {
      this.convertion = result.result;
    })
  }
}
