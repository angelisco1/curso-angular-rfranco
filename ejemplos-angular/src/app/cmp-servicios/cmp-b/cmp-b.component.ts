import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css']
})
export class CmpBComponent implements OnInit {

  datos: Array<string> = [];

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.datos = this.datosService.listaDatos;
    console.log(this.datos);
  }

}