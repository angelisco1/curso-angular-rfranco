import { Component, OnInit } from '@angular/core';
import { Meme } from '../meme';
import { ActivatedRoute } from '@angular/router';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-generador',
  templateUrl: './generador.component.html',
  styleUrls: ['./generador.component.css']
})
export class GeneradorComponent implements OnInit {
  meme: Meme = new Meme('Arriba', 'Abajo', '#ffffff', 'https://i.imgflip.com/12dxv.jpg', null);
  id: string = '';

  constructor(private activatedRoute: ActivatedRoute, private memesServ: MemesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.has('id') ? params.get('id') : '';
      if (this.id) {
        this.memesServ.getMeme(this.id).subscribe(meme => this.meme = meme);
      }
    });
  }

}
