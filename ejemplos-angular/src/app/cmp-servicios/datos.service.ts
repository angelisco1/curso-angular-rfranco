import { Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DatosService {

  listaDatos: Array<string> = ['Dato 1'];

  constructor(private currencyPipe: CurrencyPipe) { }

  insertDato(nuevoDato: string): void {
    nuevoDato = this.currencyPipe.transform(Number(nuevoDato), 'EUR', 'symbol')
    this.listaDatos.push(nuevoDato);
  }
}
