import { Component } from '@angular/core';
import { Meme } from './meme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  verLista: boolean = false;
}
