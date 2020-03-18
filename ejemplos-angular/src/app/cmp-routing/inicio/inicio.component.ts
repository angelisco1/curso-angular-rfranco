import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuarios = [
    { id: 1, nombre: 'Angel' },
    { id: 2, nombre: 'Falco' },
    { id: 3, nombre: 'Kozinsky' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
