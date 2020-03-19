import { Routes, RouterModule } from '@angular/router';
import { PerezosoComponent } from './perezoso.component';

const PEREZOSO_ROUTES: Routes = [
  { path: '',  component: PerezosoComponent },
];

export const routing = RouterModule.forChild(PEREZOSO_ROUTES);