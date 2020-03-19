import { MarcarRojoDirective } from './marcar-rojo.directive';
import { MarcarAzulDirective } from './marcar-azul.directive';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ContadorService } from './contador.service';

@NgModule({
  // providers: [
  //   ContadorService
  // ]
  declarations: [
    MarcarAzulDirective,
    MarcarRojoDirective
  ],
  exports: [
    MarcarAzulDirective,
    MarcarRojoDirective
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ContadorService]
    }
  }
}
