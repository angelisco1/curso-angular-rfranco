import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TarjetaCreditoModule } from 'src/tarjeta-credito/tarjeta-credito.module';
import { routing } from './app.routing';
import { SharedModule } from 'src/shared/shared.module';
import { InicioComponent } from './inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    TarjetaCreditoModule,
    routing,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
