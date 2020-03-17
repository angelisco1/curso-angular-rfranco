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

  reproducir(video) {
    // console.dir(video)
    video.play()
  }

  pausar(video) {
    video.pause()
  }

  mostrarValor(valor: string): void {
    console.log('Valor', valor);
  }

  cambiarNombrePeter(): void {
    this.nombre = 'Peter';
  }

  cambiarNombre(nuevoNombre: string): void {
    // console.log(event.target);
    // this.nombre = typeof(event) === 'string' ? event : event.target.value;
    this.nombre = nuevoNombre;
  }

}
