import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Las peticiones son inmutables por lo que no se pueden modificar, si queremos añadir unas headers, unos params, u otra cosa, hay que clonar la peticion, y al mismo tiempo modificar o añadir lo necesario.
    const reqCloned = req.clone({headers: req.headers.set('Token', 'mi-super-token')});
    // const reqCloned = req.clone({params: req.params.set('Cabecera', 'mi-cabecera')});
    console.log(reqCloned);
    // El next, hace que se ejecute el siguiente interceptor, en caso de lo que lo haya.
    return next.handle(reqCloned);
  }
}