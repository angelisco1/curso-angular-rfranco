import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MemeComponent } from './meme/meme.component';
import { FormComponent } from './form/form.component';
import { ListaMemesComponent } from './lista-memes/lista-memes.component';
import { GeneradorComponent } from './generador/generador.component';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MemeComponent,
    FormComponent,
    ListaMemesComponent,
    GeneradorComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
