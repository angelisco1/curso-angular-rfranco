import { InicioComponent } from './inicio.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'perezoso', loadChildren: '../perezoso/perezoso.module#PerezosoModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);