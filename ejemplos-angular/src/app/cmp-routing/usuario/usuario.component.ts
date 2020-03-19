import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id = '';
  nombre = 'Sin nombre';
  subscriptions: Array<Subscription> = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.id = this.activatedRoute.snapshot.paramMap.get('id')

    const subs1 = this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.id = params.get('id');
        // Pedir datos de usuario con id this.id
      }
    });

    const subs2 = this.activatedRoute.queryParamMap.subscribe(queryParams => {
      if (queryParams.has('nombre')) {
        this.nombre = queryParams.get('nombre');
      }
    });

    this.subscriptions.push(subs1)
    this.subscriptions.push(subs2)
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
