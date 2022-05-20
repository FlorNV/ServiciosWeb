import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  divisas!: Array<Currency>;
  divisa!: Currency;
  amount!: number;
  from!: Currency;
  to!: Currency;
  conversion!: any;
  

  constructor(private currencyService: CurrencyService) { 
    this.from = new Currency();
    this.to = new Currency();
    // this.getCurrencies();
  }

  ngOnInit(): void {
  }

  getCurrencies(){
    this.currencyService.getCurrencies().subscribe( result => {
      this.divisas = new Array<Currency>();
      for (const key in result.result) {
        this.divisa = new Currency();
        this.divisa.code = key;
        this.divisa.description = result.result[key];
        this.divisas.push(this.divisa);
      }
    })
  }

  convert(){
    this.currencyService.getConversion(this.from.code, this.to.code, this.amount).subscribe(result => {
      this.conversion = result.result;
    })
  }
}
