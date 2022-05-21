import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currencies/currency';
import { Fila } from 'src/app/models/currencies/fila';
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
  fila1!: Fila;
  fila2!: Fila;
  fila3!: Fila;

  constructor(private currencyService: CurrencyService) { 
    this.from = new Currency();
    this.to = new Currency();
    // this.getCurrencies();
    // this.fila1 = {
    //   img: 'united-states.png',
    //   equivalencias: this.llenarTabla('USD', 'USD,EUR,ARS')
    // };
    // this.fila2 = {
    //   img: 'european.png',
    //   equivalencias: this.llenarTabla('EUR', 'USD,EUR,ARS')
    // };
    // console.log(this.fila2);
    // this.fila3 = {
    //   img: 'argentina.png',
    //   equivalencias: this.llenarTabla('ARS', 'USD,EUR,ARS')
    // };
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
    },
    error => { alert("Error en la petición"); }
    )
  }

  convert(){
    this.currencyService.getConversion(this.from.code, this.to.code, this.amount).subscribe(result => {
      this.conversion = result.result;
    },
    error => { alert("Error en la petición"); }
    )
  }

  llenarTabla(base: string, monedas: string){
    let equivalencias: any = [];
    this.currencyService.getConversionTable(base,monedas).subscribe(resultado => {
      for (const key in resultado.result) {
        equivalencias.push(resultado.result[key]);
      }
    })
    return equivalencias;
  }

  calcularInversa(valor: number){
    return 1/valor;
  }
}
