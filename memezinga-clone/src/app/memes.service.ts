import { Injectable } from '@angular/core';
import { Meme } from './meme';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemesService {
  // private listaMemes: Array<Meme> = [];
  private URL: string = 'https://todo-list-603ba.firebaseio.com/memes/0';

  constructor(private http: HttpClient) { }

  getMemes(): Observable<Array<Meme>> {
    // return this.listaMemes;
    return this.http.get(`${this.URL}.json`)
      .pipe(
        map(memes => {
          const arrMemes = [];
          for (let id in memes) {
            let datos = memes[id];
            // currencyPipe.transform(producto.precio, 'EUR')
            const meme = new Meme(datos.textoArriba, datos.textoAbajo, datos.color, datos.imgUrl, id);
            arrMemes.push(meme);
          }
          return arrMemes;
        })
      );
  }

  getMeme(id: string): Observable<Meme> {
    return this.http.get(`${this.URL}/${id}.json`)
      .pipe(
        map((datos: any) => new Meme(datos.textoArriba, datos.textoAbajo, datos.color, datos.imgUrl, id))
      )
  }

  addMeme(meme: Meme): Observable<any> {
    delete meme.id;
    // const nuevoMeme = Object.assign({}, meme);
    // this.listaMemes.push(nuevoMeme);
    return this.http.post(`${this.URL}.json`, meme);
  }

  updateMeme(meme: Meme): Observable<any> {
    const url = `${this.URL}/${meme.id}.json`;
    delete meme.id;
    const nuevoMeme = Object.assign({}, meme);
    return this.http.put(url, nuevoMeme);
  }

  deleteMeme(id: string): Observable<any> {
    console.log('Eliminar: ' + id)
    return this.http.delete(`${this.URL}/${id}.json`);
  }
}