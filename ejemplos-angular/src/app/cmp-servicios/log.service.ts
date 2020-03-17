import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  mostrarMensajesPorConsola(msg: string): void {
    console.log('Msg: ' + msg);
  }

}
