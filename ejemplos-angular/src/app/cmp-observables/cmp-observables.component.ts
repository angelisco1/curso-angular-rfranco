import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable, Observer, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-cmp-observables',
  templateUrl: './cmp-observables.component.html',
  styleUrls: ['./cmp-observables.component.css']
})
export class CmpObservablesComponent implements OnInit {
  subscripciones: Array<Subscription> = [];
  constructor() { }

  ngOnInit() { }

  empezar() {
    // this.obsIntervaloNums();
  //   // this.obsPersonalizado();
    this.obsConOperadores();
  //   this.obsEvento();
  }

  terminar() {
    this.subscripciones.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  obsIntervaloNums() {
    const obs = interval(1000);

    const subs = obs.subscribe((num) => {
      console.log(num);
    });

    this.subscripciones.push(subs);
  }

  // obsPersonalizado() {
  //   const miObservable = Observable.create((observer: Observer<string>) => {
  //     setTimeout(() => {
  //       observer.next('Primer dato enviado!');
  //     }, 2000);
  //     setTimeout(() => {
  //       // observer.next('Segundo dato enviado!');
  //       // observer.error(new Error('Ha ocurrido un error!'));
  //       observer.complete();
  //     }, 3000);
  //     setTimeout(() => {
  //       observer.next('Esto no aparece porque el observable se ha completado!');
  //     }, 4000);
  //   });

  //   const subs = miObservable.subscribe(
  //     dato => {
  //       console.log(dato);
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  //   this.subscripciones.push(subs);
  // }

  obsConOperadores() {
    const obs = interval(200)
      .pipe(
        filter(num => (num % 2 === 0) && num > 10),
        map(num => (num - 1))
      );

    const subs = obs.subscribe(dato => console.log(dato));
    this.subscripciones.push(subs);
  }

  // obsEvento() {
  //   const obsMouse = fromEvent(document, 'mousemove')
  //     .pipe(
  //       map((event: MouseEvent) => [event.clientX, event.clientY])
  //     );

  //   const subs = obsMouse.subscribe((position: Array<number>) => console.log(position));
  //   this.subscripciones.push(subs);
  // }

}
