import { ContadorService } from '../shared/contador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  template: `
    <h2>Inicio</h2>
    <p>Cuenta: {{ contadorService.contador }}</p>
    <button type="button" (click)="incrementar()">Incrementar cuenta</button>
  `,
  styles: []
})
export class InicioComponent implements OnInit {

  constructor(private contadorService: ContadorService) { }

  ngOnInit() {
  }

  incrementar() {
    this.contadorService.contador++;
  }

}
