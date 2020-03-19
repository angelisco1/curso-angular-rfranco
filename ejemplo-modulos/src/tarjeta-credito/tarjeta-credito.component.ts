import { TarjetaService } from './tarjeta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  template: `
    <h2>Tarjeta credito</h2>
    <p>Num. tarjeta: {{ numTarjeta | ocultarDigitos:6 }}</p>
  `,
  styles: []
})
export class TarjetaCreditoComponent implements OnInit {
  numTarjeta: string;
  constructor(private tarjetaService: TarjetaService) { }

  ngOnInit() {
    this.numTarjeta = this.tarjetaService.getNumTarjeta();
  }

}
