import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  texto: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At est accusantium consequuntur debitis ex ipsa molestias saepe, rerum corporis alias qui illum soluta neque dicta! Architecto quidem accusantium at facilis!';
  precio: number = 3;
  mascotas: Array<string> = ['Gato', 'Canario', 'Hamster']
  hoy: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  addMascota(nuevaMascota) {
    this.mascotas.push(nuevaMascota);
  }

}
