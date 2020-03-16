import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {

  nombre: string = 'Ángel';
  formValid: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  cambiarNombrePeter() {
    this.nombre = 'Peter';
  }

  cambiarNombre(event) {
    // console.log(event.target);
    this.nombre = typeof(event) === 'string' ? event : event.target.value;
  }

}
