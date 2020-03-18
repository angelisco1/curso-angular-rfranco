import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-normal',
  templateUrl: './form-normal.component.html',
  styleUrls: ['./form-normal.component.css']
})
export class FormNormalComponent implements OnInit {

  datosForm = {
    nombre: 'Ange',
    email: 'angel@gmail.com',
    password: '1234'
  };

  constructor() { }

  ngOnInit() {
  }

  mostrar(inputNombre) {
    console.dir(inputNombre)
  }

  guardar(miFormulario) {
    console.dir(miFormulario);
    console.dir(miFormulario.value);
    // Aqui habria que hacer una peticion POST
  }
}
