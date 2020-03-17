import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  listaDatos: Array<string> = ['Dato 1'];

  constructor() { }

  insertDato(nuevoDato: string): void {
    this.listaDatos.push(nuevoDato);
  }
}
