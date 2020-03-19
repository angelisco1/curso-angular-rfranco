import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { TarjetaCreditoComponent } from './tarjeta-credito.component';
import { TarjetaService } from './tarjeta.service';
import { OcultarDigitosPipe } from './ocultar-digitos.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TarjetaCreditoComponent
  ],
  declarations: [
    TarjetaCreditoComponent,
    OcultarDigitosPipe
  ],
  providers: [TarjetaService]
})
export class TarjetaCreditoModule { }
