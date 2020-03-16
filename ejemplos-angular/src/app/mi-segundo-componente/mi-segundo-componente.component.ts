import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-segundo-componente',
  template: `
    <p>
      mi-segundo-componente works!
    </p>
  `,
  styles: [
    `
      p {
        color: blue;
      }
    `
  ]
})
export class MiSegundoComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
