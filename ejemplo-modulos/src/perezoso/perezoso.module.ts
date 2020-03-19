import { NgModule } from '@angular/core';
import { PerezosoComponent } from './perezoso.component';
import { routing } from './perezoso.routing';
// import { ContadorService } from '../shared/contador.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    routing,
    SharedModule
  ],
  declarations: [
    PerezosoComponent
  ],
  // providers: [ContadorService]
})
export class PerezosoModule { }
