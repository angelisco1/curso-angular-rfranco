import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Meme } from '../meme';
import { MemesService } from '../memes.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  @Input() meme: Meme;
  subscriptions: Array<Subscription> = [];

  constructor(private memesService: MemesService, private router: Router) { }

  ngOnInit() { }

  cambiarMeme(event): void {
    // this.meme.textoArriba = event.target.value
    this.meme[event.target.name] = event.target.value;
  }

  guardar(): void {
    if (this.meme.id) {
      const subs = this.memesService.updateMeme(this.meme)
        .subscribe((resp) => {
          // console.log(resp);
          this.goToList();
        });
      this.subscriptions.push(subs);
    } else {
      const subs = this.memesService.addMeme(this.meme)
        .subscribe((resp) => {
          // console.log(resp);
          this.goToList();
        });
      this.subscriptions.push(subs);
    }
  }

  goToList() {
    this.router.navigate(['/memes']);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
