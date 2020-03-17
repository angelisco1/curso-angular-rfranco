import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { MiSegundoComponenteComponent } from './mi-segundo-componente/mi-segundo-componente.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';

import { FormsModule } from '@angular/forms';
import { CardComponent } from './cmp-data-binding/card/card.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { PowerModeDirective } from './cmp-directivas/power-mode.directive';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    MiSegundoComponenteComponent,
    CmpDataBindingComponent,
    CardComponent,
    CmpPipesComponent,
    DoblePipe,
    FiltroPipe,
    CmpDirectivasComponent,
    PowerModeDirective,
    CmpServiciosComponent,
    CmpAComponent,
    CmpBComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
