import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meme } from '../meme';
import { MemesService } from '../memes.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-memes',
  templateUrl: './lista-memes.component.html',
  styleUrls: ['./lista-memes.component.css']
})
export class ListaMemesComponent implements OnInit, OnDestroy {
  memes: Array<Meme> = [];
  subscriptions: Array<Subscription> = [];

  constructor(private memesService: MemesService, private router: Router) { }

  ngOnInit() {
    // this.memes = this.memesService.getMemes();
    // const subs = this.memesService.getMemes().subscribe(memes => this.memes = memes);
    // this.subscriptions.push(subs);
    this.getDatos();
  }

  getDatos() {
    const subs = this.memesService.getMemes().subscribe(memes => this.memes = memes);
    this.subscriptions.push(subs);
  }

  eliminar(id: string) {
    const subs = this.memesService.deleteMeme(id).subscribe(() => {
      // this.router.navigate(['/memes'])
      this.getDatos();
    });
    this.subscriptions.push(subs);
  }

  editar(id: string) {
    this.router.navigate(['/editar', id]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
