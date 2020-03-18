import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { MiSegundoComponenteComponent } from './mi-segundo-componente/mi-segundo-componente.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './cmp-data-binding/card/card.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { PowerModeDirective } from './cmp-directivas/power-mode.directive';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';
import { FormNormalComponent } from './cmp-formularios/form-normal/form-normal.component';
import { FormReactivoComponent } from './cmp-formularios/form-reactivo/form-reactivo.component';
import { CmpObservablesComponent } from './cmp-observables/cmp-observables.component';
import { CmpRoutingComponent } from './cmp-routing/cmp-routing.component';
import { Routing } from './cmp-routing/app.routes';
import { InicioComponent } from './cmp-routing/inicio/inicio.component';
import { NuevoUsuarioComponent } from './cmp-routing/nuevo-usuario/nuevo-usuario.component';
import { UsuarioComponent } from './cmp-routing/usuario/usuario.component';
import { InfoUsuarioComponent } from './cmp-routing/info-usuario/info-usuario.component';
import { EditarUsuarioComponent } from './cmp-routing/editar-usuario/editar-usuario.component';
import { ErrorComponent } from './cmp-routing/error.component';

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
    CmpFormulariosComponent,
    FormNormalComponent,
    FormReactivoComponent,
    CmpObservablesComponent,
    CmpRoutingComponent,
    InicioComponent,
    NuevoUsuarioComponent,
    UsuarioComponent,
    InfoUsuarioComponent,
    EditarUsuarioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
