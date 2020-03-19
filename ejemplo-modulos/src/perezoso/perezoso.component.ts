import { ContadorService } from '../shared/contador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perezoso',
  template: `
    <h2>
      Perezoso
    </h2>
    <p>Cuenta: {{ contadorService.contador }}</p>
    <button type="button" (click)="incrementar()">Incrementar cuenta</button>
  `,
  styles: []
})
export class PerezosoComponent implements OnInit {

  constructor(private contadorService: ContadorService) { }

  ngOnInit() {
  }

  incrementar() {
    this.contadorService.contador++;
  }
}
