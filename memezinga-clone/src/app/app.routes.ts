import { RouterModule, Routes } from '@angular/router';
import { GeneradorComponent } from './generador/generador.component';
import { ListaMemesComponent } from './lista-memes/lista-memes.component';

const APP_ROUTES: Routes = [
  { path: '', component: GeneradorComponent },
  { path: 'editar/:id', component: GeneradorComponent },
  { path: 'memes', component: ListaMemesComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);