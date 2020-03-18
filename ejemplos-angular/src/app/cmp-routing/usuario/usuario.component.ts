import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id = '';
  nombre = 'Sin nombre';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.id = params.get('id');
        // Pedir datos de usuario con id this.id
      }
    });
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      if (queryParams.has('nombre')) {
        this.nombre = queryParams.get('nombre');
      }
    });
  }

}
