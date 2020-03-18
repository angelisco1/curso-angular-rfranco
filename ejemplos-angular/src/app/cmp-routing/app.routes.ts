import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { InfoGuard } from './info-usuario/info.guard';
import { EditarGuard } from './editar-usuario/editar.guard';
import { ErrorComponent } from './error.component';

const USUARIOS_ROUTES: Routes = [
  { path: ':id/informacion', component: InfoUsuarioComponent, canActivate: [InfoGuard] },
  { path: ':id/editar', component: EditarUsuarioComponent, canDeactivate: [EditarGuard] }
];

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: InicioComponent, children: USUARIOS_ROUTES },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: '**', component: ErrorComponent },
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
