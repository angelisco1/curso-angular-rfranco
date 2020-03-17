import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  tareaHecha: boolean = true
  colorTexto: string = 'black'
  tareaNombre: string = 'Tarea 1'

  constructor() { }

  ngOnInit() {
  }

  toggleTareaHecha() {
    this.tareaHecha = !this.tareaHecha;
  }

}
