import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { MiSegundoComponenteComponent } from './mi-segundo-componente/mi-segundo-componente.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';

import { FormsModule } from '@angular/forms';
import { CardComponent } from './cmp-data-binding/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    MiSegundoComponenteComponent,
    CmpDataBindingComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
